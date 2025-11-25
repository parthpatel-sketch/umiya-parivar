import 'dotenv/config';  // loads .env automatically
import express, { Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import cors from "cors";
import { setupVite,serveStatic, log } from "./vite";
declare global {
  namespace Express {
    interface Request {
      startTime?: number;
    }
  }
}

const app = express();

// -----------------
// CORS Setup
// -----------------
if (process.env.NODE_ENV === "development") {
  // Allow all origins in development
  app.use(cors());
} else {
  // Allow only your Vercel frontend in production
  app.use(cors({
    origin: process.env.FRONTEND_URL || "https://your-client.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // if you plan to use cookies/auth
  }));
}


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  req.startTime = Date.now();
  const path = req.path;
  const capturedJsonResponse: Record<string, any> = {};
  let logLine = undefined;

   const originalJson = res.json;
  res.json = function (body: any, ...args: any[]) {
    capturedJsonResponse.body = body;
return (originalJson as any).call(this, body, ...args);

  };

  res.on("finish", () => {
    const durationMs = Date.now() - (req.startTime ?? Date.now());

    if (path.startsWith("/api")) {
      logLine = `${req.method} ${path} ${res.statusCode} in ${durationMs}ms`;
      if (capturedJsonResponse.body) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse.body)}`;
      }
      console.log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    const status = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
  });
if (process.env.NODE_ENV === "development") {
  // Local: run Vite Dev + Server
  await setupVite(app, server);
} else {
  // Production: serve the built frontend
  serveStatic(app);
}

const port = parseInt(process.env.PORT || "5000", 10);

server.listen(port, () => {
  if (process.env.NODE_ENV === "production") {
    console.log(`🚀 Server running in production on port ${port}`);
  } else {
    console.log(`✅ Server running at http://localhost:${port}`);
  }
});

})(); 





























// import express, { type Request, Response, NextFunction } from "express";
// import { registerRoutes } from "./routes";
// import { setupVite, serveStatic, log } from "./vite";

// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// app.use((req, res, next) => {
//   const start = Date.now();
//   const path = req.path;
//   let capturedJsonResponse: Record<string, any> | undefined = undefined;

//   const originalResJson = res.json;
//   res.json = function (bodyJson, ...args) {
//     capturedJsonResponse = bodyJson;
//     return originalResJson.apply(res, [bodyJson, ...args]);
//   };

//   res.on("finish", () => {
//     const duration = Date.now() - start;
//     if (path.startsWith("/api")) {
//       let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
//       if (capturedJsonResponse) {
//         logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
//       }

//       if (logLine.length > 80) {
//         logLine = logLine.slice(0, 79) + "…";
//       }

//       log(logLine);
//     }
//   });

//   next();
// });

// (async () => {
//   const server = await registerRoutes(app);

//   app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
//     const status = err.status || err.statusCode || 500;
//     const message = err.message || "Internal Server Error";

//     res.status(status).json({ message });
//     throw err;
//   });

//   // importantly only setup vite in development and after
//   // setting up all the other routes so the catch-all route
//   // doesn't interfere with the other routes
//   if (app.get("env") === "development") {
//     await setupVite(app, server);
//   } else {
//     serveStatic(app);
//   }

//   // ALWAYS serve the app on the port specified in the environment variable PORT
//   // Other ports are firewalled. Default to 5000 if not specified.
//   // this serves both the API and the client.
//   // It is the only port that is not firewalled.
//   const port = parseInt(process.env.PORT || '5000', 10);
  
// server.listen(port, () => {
//   console.log(`✅ Server running at http://localhost:${port}`);
// });

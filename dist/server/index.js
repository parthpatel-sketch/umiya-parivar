// server/index.ts
import "dotenv/config";
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/storage.ts
import { randomUUID } from "crypto";
var MemStorage = class {
  // private contactMessages: Map<string, ContactMessage>;
  constructor() {
    this.users = /* @__PURE__ */ new Map();
    this.events = /* @__PURE__ */ new Map();
    this.galleryImages = /* @__PURE__ */ new Map();
    this.initializeSampleData();
  }
  initializeSampleData() {
    const sampleEvents = [
      {
        id: "event-1",
        title: "Navratri Celebration",
        date: "2025-10-24",
        time: "9:00 PM",
        description: "Nine nights of devotional dancing, singing, and worship celebrating the divine feminine.",
        category: "Festival",
        attendees: 1200,
        image: "/umiya/navratri.jpg",
        createdAt: /* @__PURE__ */ new Date()
      },
      {
        id: "event-2",
        title: "Satchandi Mahayagya",
        date: "2025-10-24",
        time: "9:00 AM",
        description: "A ritual to seek the blessings of the Divine Mother, bringing strength, prosperity, and peace..",
        category: "Festival",
        attendees: 15e3,
        image: "/umiya/satchandi.jpg",
        createdAt: /* @__PURE__ */ new Date()
      },
      {
        id: "event-3",
        title: "Diwali Festival of Lights",
        date: "2025-10-20",
        time: "9:30 PM",
        description: "Celebrate the victory of light over darkness with prayers, lights, and festivities.",
        category: "Festival",
        attendees: 15e3,
        image: "/umiya/mandir.jpg",
        createdAt: /* @__PURE__ */ new Date()
      }
    ];
    const sampleGalleryImages = [
      {
        id: "img-1",
        title: "Umiya Maa Idol Decorated",
        src: "/umiya/bguma.jpg",
        category: "Interior",
        description: "The divine idol of Maa Umiya adorned in traditional attire.",
        createdAt: /* @__PURE__ */ new Date()
      },
      {
        id: "img-2",
        title: "shree Ganesh",
        src: "/umiya/ganesh.png",
        category: "Festivals",
        description: "Maa Umiya dressed in a green saree, symbolizing prosperity and devotion.",
        createdAt: /* @__PURE__ */ new Date()
      },
      {
        id: "img-3",
        title: "Hanuman dada",
        src: "/umiya/hanuman.png",
        category: "Festivals",
        description: "Golden-clad goddess during temple festivities.",
        createdAt: /* @__PURE__ */ new Date()
      },
      // {
      //   id: "img-2",
      //   title: "Umiya Maa Idol - Close View",
      //   src: "/client/public/umiya/umiya2.png",
      //   category: "Interior",
      //   description: "A close view of the sacred idol within the temple sanctum.",
      //   createdAt: new Date()
      // },
      // {
      //   id: "img-3",
      //   title: "Goddess Umiya in Festive Form",
      //   src: "/umiya/umiya3.jpg",
      //   category: "Festivals",
      //   description: "Maa Umiya beautifully decorated during the festive season.",
      //   createdAt: new Date()
      // },
      {
        id: "img-4",
        title: "Divine Blessings",
        src: "/umiya/mahadev.jpg",
        category: "Interior",
        description: "A closer glimpse of the goddess radiating divine energy.",
        createdAt: /* @__PURE__ */ new Date()
      },
      {
        id: "img-5",
        title: "Temple Aerial View",
        src: "/umiya/umiya5d.jpg",
        category: "Architecture",
        description: "Aerial perspective showcasing the temple's grand architecture.",
        createdAt: /* @__PURE__ */ new Date()
      },
      {
        id: "img-6",
        title: "Temple Panorama",
        src: "/umiya/umiya6d.jpg",
        category: "Architecture",
        description: "Top view capturing the temple complex from above.",
        createdAt: /* @__PURE__ */ new Date()
      },
      {
        id: "img-7",
        title: "Satchandi mahayagna rangoli",
        src: "/umiya/rangoli2.jpg",
        category: "Festivals",
        description: "Beautiful Rangoli created by the talented girls of our temple community",
        createdAt: /* @__PURE__ */ new Date()
      },
      {
        id: "img-8",
        title: "Temple Roof View",
        src: "/umiya/drown.jpg",
        category: "Architecture",
        description: "A wide view highlighting temple domes and structure.",
        createdAt: /* @__PURE__ */ new Date()
      },
      {
        id: "img-9",
        title: "Temple Complex",
        src: "/umiya/umiya9d.jpg",
        category: "Architecture",
        description: "Panoramic temple view surrounded by serene surroundings.",
        createdAt: /* @__PURE__ */ new Date()
      },
      {
        id: "img-10",
        title: "Temple Entrance",
        src: "/umiya/umiya10d.jpg",
        category: "Architecture",
        description: "The beautiful entrance of Umiya Mata Temple welcoming devotees.",
        createdAt: /* @__PURE__ */ new Date()
      },
      {
        id: "img-11",
        title: "Radhe Krishna",
        src: "/umiya/umiyak11.jpg",
        category: "Interior",
        description: "A beauty of radhe krishna .",
        createdAt: /* @__PURE__ */ new Date()
      },
      {
        id: "img-12",
        title: "Umiya Maa Idol - Front View ",
        src: "/umiya/umiya13.jpg",
        category: "Festivals",
        description: "Maa Umiya beautifully decorated for a religious ceremony.",
        createdAt: /* @__PURE__ */ new Date()
      }
      // {
      //   id: "img-13",
      //   title: "Sacred Idol in Sanctum",
      //   src: "/umiya/umiya13.jpg",
      //   category: "Interior",
      //   description: "An image capturing the peaceful aura of the sanctum.",
      //   createdAt: new Date()
      // },
    ];
    sampleEvents.forEach((event) => this.events.set(event.id, event));
    sampleGalleryImages.forEach((image) => this.galleryImages.set(image.id, image));
  }
  // Users
  async getUser(id) {
    return this.users.get(id);
  }
  async getUserByUsername(username) {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }
  async createUser(insertUser) {
    const id = randomUUID();
    const user = {
      id,
      username: insertUser.username,
      password: insertUser.password
    };
    this.users.set(id, user);
    return user;
  }
  // Events
  async getAllEvents() {
    return Array.from(this.events.values()).sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  }
  async getEvent(id) {
    return this.events.get(id);
  }
  async createEvent(insertEvent) {
    const id = randomUUID();
    const event = {
      // Required properties from Event type must be explicitly guaranteed
      date: insertEvent.date || "",
      // Provide default if missing
      description: insertEvent.description || "",
      title: insertEvent.title || "Untitled Event",
      time: insertEvent.time || "TBD",
      category: insertEvent.category || "General",
      image: insertEvent.image || "/default/image.jpg",
      // Properties that are present in both/handled separately
      id,
      // The previous fix for 'unknown' type on attendees
      attendees: insertEvent.attendees ?? 0,
      createdAt: /* @__PURE__ */ new Date()
      // Use spread for any other properties or to ensure all properties from 
      // insertEvent are included, though explicitly listing the required ones is safer.
      // ...insertEvent 
    };
    this.events.set(id, event);
    return event;
  }
  // Corrected Code (No more error)
  async updateEvent(id, updateData) {
    const existingEvent = this.events.get(id);
    if (!existingEvent) return void 0;
    const updatedEvent = {
      ...existingEvent,
      ...updateData
    };
    this.events.set(id, updatedEvent);
    return updatedEvent;
  }
  async deleteEvent(id) {
    return this.events.delete(id);
  }
  // Gallery Images
  async getAllGalleryImages() {
    return Array.from(this.galleryImages.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }
  async getGalleryImage(id) {
    return this.galleryImages.get(id);
  }
  async createGalleryImage(insertImage) {
    const id = randomUUID();
    const image = {
      id,
      createdAt: /* @__PURE__ */ new Date(),
      title: insertImage.title,
      description: insertImage.description,
      category: insertImage.category,
      src: insertImage.src
    };
    this.galleryImages.set(id, image);
    return image;
  }
  async updateGalleryImage(id, updateData) {
    const existingImage = this.galleryImages.get(id);
    if (!existingImage) return void 0;
    const updatedImage = {
      ...existingImage,
      ...updateData
    };
    this.galleryImages.set(id, updatedImage);
    return updatedImage;
  }
  async deleteGalleryImage(id) {
    return this.galleryImages.delete(id);
  }
  // Contact Messages
  // async getAllContactMessages(): Promise<ContactMessage[]> {
  //   return Array.from(this.contactMessages.values()).sort((a, b) => 
  //     b.createdAt!.getTime() - a.createdAt!.getTime()
  //   );
  // }
  // async getContactMessage(id: string): Promise<ContactMessage | undefined> {
  //   return this.contactMessages.get(id);
  // }
  // async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
  //   const id = randomUUID();
  //   const message: ContactMessage = {
  //     ...insertMessage,
  //     id,
  //     phone: insertMessage.phone ?? null,
  //     createdAt: new Date()
  //   };
  //   this.contactMessages.set(id, message);
  //   return message;
  // }
  // async deleteContactMessage(id: string): Promise<boolean> {
  //   return this.contactMessages.delete(id);
  // }
};
var storage = new MemStorage();

// shared/schema.ts
import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
var users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull()
});
var events = pgTable("events", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  date: text("date").notNull(),
  time: text("time").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(),
  attendees: integer("attendees").default(0),
  image: text("image").notNull(),
  createdAt: timestamp("created_at").defaultNow()
});
var galleryImages = pgTable("gallery_images", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  src: text("src").notNull(),
  category: text("category").notNull(),
  description: text("description").notNull(),
  createdAt: timestamp("created_at").defaultNow()
});
var contactMessages = pgTable("contact_messages", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow()
});
var insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true
});
var insertEventSchema = createInsertSchema(events).omit({
  id: true,
  createdAt: true
});
var insertGalleryImageSchema = createInsertSchema(galleryImages).omit({
  id: true,
  createdAt: true
});
var insertContactMessageSchema = createInsertSchema(contactMessages).omit({
  id: true,
  createdAt: true
});

// server/routes.ts
async function registerRoutes(app2) {
  app2.get("/api/events", async (req, res) => {
    try {
      const events2 = await storage.getAllEvents();
      res.json(events2);
    } catch (error) {
      console.error("Error fetching events:", error);
      res.status(500).json({ error: "Failed to fetch events" });
    }
  });
  app2.get("/api/events/:id", async (req, res) => {
    try {
      const event = await storage.getEvent(req.params.id);
      if (!event) {
        return res.status(404).json({ error: "Event not found" });
      }
      res.json(event);
    } catch (error) {
      console.error("Error fetching event:", error);
      res.status(500).json({ error: "Failed to fetch event" });
    }
  });
  app2.post("/api/events", async (req, res) => {
    try {
      const validatedData = insertEventSchema.parse(req.body);
      const event = await storage.createEvent(validatedData);
      res.status(201).json(event);
    } catch (error) {
      console.error("Error creating event:", error);
      res.status(400).json({ error: "Failed to create event" });
    }
  });
  app2.put("/api/events/:id", async (req, res) => {
    try {
      const validatedData = insertEventSchema.partial().parse(req.body);
      const event = await storage.updateEvent(req.params.id, validatedData);
      if (!event) {
        return res.status(404).json({ error: "Event not found" });
      }
      res.json(event);
    } catch (error) {
      console.error("Error updating event:", error);
      res.status(400).json({ error: "Failed to update event" });
    }
  });
  app2.delete("/api/events/:id", async (req, res) => {
    try {
      const success = await storage.deleteEvent(req.params.id);
      if (!success) {
        return res.status(404).json({ error: "Event not found" });
      }
      res.status(204).send();
    } catch (error) {
      console.error("Error deleting event:", error);
      res.status(500).json({ error: "Failed to delete event" });
    }
  });
  app2.get("/api/gallery", async (req, res) => {
    try {
      const images = await storage.getAllGalleryImages();
      res.json(images);
    } catch (error) {
      console.error("Error fetching gallery images:", error);
      res.status(500).json({ error: "Failed to fetch gallery images" });
    }
  });
  app2.get("/api/gallery/:id", async (req, res) => {
    try {
      const image = await storage.getGalleryImage(req.params.id);
      if (!image) {
        return res.status(404).json({ error: "Image not found" });
      }
      res.json(image);
    } catch (error) {
      console.error("Error fetching gallery image:", error);
      res.status(500).json({ error: "Failed to fetch gallery image" });
    }
  });
  app2.post("/api/gallery", async (req, res) => {
    try {
      const validatedData = insertGalleryImageSchema.parse(req.body);
      const image = await storage.createGalleryImage(validatedData);
      res.status(201).json(image);
    } catch (error) {
      console.error("Error creating gallery image:", error);
      res.status(400).json({ error: "Failed to create gallery image" });
    }
  });
  app2.put("/api/gallery/:id", async (req, res) => {
    try {
      const validatedData = insertGalleryImageSchema.partial().parse(req.body);
      const image = await storage.updateGalleryImage(req.params.id, validatedData);
      if (!image) {
        return res.status(404).json({ error: "Image not found" });
      }
      res.json(image);
    } catch (error) {
      console.error("Error updating gallery image:", error);
      res.status(400).json({ error: "Failed to update gallery image" });
    }
  });
  app2.delete("/api/gallery/:id", async (req, res) => {
    try {
      const success = await storage.deleteGalleryImage(req.params.id);
      if (!success) {
        return res.status(404).json({ error: "Image not found" });
      }
      res.status(204).send();
    } catch (error) {
      console.error("Error deleting gallery image:", error);
      res.status(500).json({ error: "Failed to delete gallery image" });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      ),
      await import("@replit/vite-plugin-dev-banner").then(
        (m) => m.devBanner()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client/src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "..", "client", "dist");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  req.startTime = Date.now();
  const path3 = req.path;
  const capturedJsonResponse = {};
  let logLine = void 0;
  const originalJson = res.json;
  res.json = function(body, ...args) {
    capturedJsonResponse.body = body;
    return originalJson.call(this, body, ...args);
  };
  res.on("finish", () => {
    const durationMs = Date.now() - (req.startTime ?? Date.now());
    if (path3.startsWith("/api")) {
      logLine = `${req.method} ${path3} ${res.statusCode} in ${durationMs}ms`;
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
  app.use((err, req, res, next) => {
    const status = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
  });
  if (process.env.NODE_ENV === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = parseInt(process.env.PORT || "5000", 10);
  server.listen(port, () => {
    console.log(`\u2705 Server running at http://localhost:${port}`);
  });
})();

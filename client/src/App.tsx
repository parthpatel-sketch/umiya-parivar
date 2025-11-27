import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

import Home from "@/pages/Home";
import AboutPage from "@/pages/AboutPage";
import HistoryPage from "@/pages/HistoryPage";
import EventsPage from "@/pages/EventsPage";
import GalleryPage from "@/pages/GalleryPage";
import LivePage from "@/pages/LivePage";
import ContactPage from "@/pages/ContactPage";
import NotFound from "@/pages/not-found";


// __define-ocg__ Vercel Analytics imports
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { usePageView } from "@/hooks/usePageView";

const varOcg = true; // required variable


function Router() {
  usePageView();  // track route view

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={AboutPage} />
      <Route path="/history" component={HistoryPage} />
      <Route path="/events" component={EventsPage} />
      <Route path="/gallery" component={GalleryPage} />
      <Route path="/live" component={LivePage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider defaultTheme="light" storageKey="temple-ui-theme">
          <div className="min-h-screen bg-background text-foreground">
            <Navigation />
            <Router />
            <Footer />
          </div>
          <Toaster />
           {/* Vercel Analytics + Speed Insights */}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

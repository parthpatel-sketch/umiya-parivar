import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
function Router() {
    return (_jsxs(Switch, { children: [_jsx(Route, { path: "/", component: Home }), _jsx(Route, { path: "/about", component: AboutPage }), _jsx(Route, { path: "/history", component: HistoryPage }), _jsx(Route, { path: "/events", component: EventsPage }), _jsx(Route, { path: "/gallery", component: GalleryPage }), _jsx(Route, { path: "/live", component: LivePage }), _jsx(Route, { path: "/contact", component: ContactPage }), _jsx(Route, { component: NotFound })] }));
}
function App() {
    return (_jsx(QueryClientProvider, { client: queryClient, children: _jsx(TooltipProvider, { children: _jsxs(ThemeProvider, { defaultTheme: "light", storageKey: "temple-ui-theme", children: [_jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [_jsx(Navigation, {}), _jsx(Router, {}), _jsx(Footer, {})] }), _jsx(Toaster, {})] }) }) }));
}
export default App;

import { createServer } from "http";
import { storage } from "./storage";
import { insertEventSchema, insertGalleryImageSchema, insertContactMessageSchema } from "@shared/schema";
export async function registerRoutes(app) {
    // Events endpoints
    app.get("/api/events", async (req, res) => {
        try {
            const events = await storage.getAllEvents();
            res.json(events);
        }
        catch (error) {
            console.error("Error fetching events:", error);
            res.status(500).json({ error: "Failed to fetch events" });
        }
    });
    app.get("/api/events/:id", async (req, res) => {
        try {
            const event = await storage.getEvent(req.params.id);
            if (!event) {
                return res.status(404).json({ error: "Event not found" });
            }
            res.json(event);
        }
        catch (error) {
            console.error("Error fetching event:", error);
            res.status(500).json({ error: "Failed to fetch event" });
        }
    });
    app.post("/api/events", async (req, res) => {
        try {
            const validatedData = insertEventSchema.parse(req.body);
            const event = await storage.createEvent(validatedData);
            res.status(201).json(event);
        }
        catch (error) {
            console.error("Error creating event:", error);
            res.status(400).json({ error: "Failed to create event" });
        }
    });
    app.put("/api/events/:id", async (req, res) => {
        try {
            const validatedData = insertEventSchema.partial().parse(req.body);
            const event = await storage.updateEvent(req.params.id, validatedData);
            if (!event) {
                return res.status(404).json({ error: "Event not found" });
            }
            res.json(event);
        }
        catch (error) {
            console.error("Error updating event:", error);
            res.status(400).json({ error: "Failed to update event" });
        }
    });
    app.delete("/api/events/:id", async (req, res) => {
        try {
            const success = await storage.deleteEvent(req.params.id);
            if (!success) {
                return res.status(404).json({ error: "Event not found" });
            }
            res.status(204).send();
        }
        catch (error) {
            console.error("Error deleting event:", error);
            res.status(500).json({ error: "Failed to delete event" });
        }
    });
    // Gallery endpoints
    app.get("/api/gallery", async (req, res) => {
        try {
            const images = await storage.getAllGalleryImages();
            res.json(images);
        }
        catch (error) {
            console.error("Error fetching gallery images:", error);
            res.status(500).json({ error: "Failed to fetch gallery images" });
        }
    });
    app.get("/api/gallery/:id", async (req, res) => {
        try {
            const image = await storage.getGalleryImage(req.params.id);
            if (!image) {
                return res.status(404).json({ error: "Image not found" });
            }
            res.json(image);
        }
        catch (error) {
            console.error("Error fetching gallery image:", error);
            res.status(500).json({ error: "Failed to fetch gallery image" });
        }
    });
    app.post("/api/gallery", async (req, res) => {
        try {
            const validatedData = insertGalleryImageSchema.parse(req.body);
            const image = await storage.createGalleryImage(validatedData);
            res.status(201).json(image);
        }
        catch (error) {
            console.error("Error creating gallery image:", error);
            res.status(400).json({ error: "Failed to create gallery image" });
        }
    });
    app.put("/api/gallery/:id", async (req, res) => {
        try {
            const validatedData = insertGalleryImageSchema.partial().parse(req.body);
            const image = await storage.updateGalleryImage(req.params.id, validatedData);
            if (!image) {
                return res.status(404).json({ error: "Image not found" });
            }
            res.json(image);
        }
        catch (error) {
            console.error("Error updating gallery image:", error);
            res.status(400).json({ error: "Failed to update gallery image" });
        }
    });
    app.delete("/api/gallery/:id", async (req, res) => {
        try {
            const success = await storage.deleteGalleryImage(req.params.id);
            if (!success) {
                return res.status(404).json({ error: "Image not found" });
            }
            res.status(204).send();
        }
        catch (error) {
            console.error("Error deleting gallery image:", error);
            res.status(500).json({ error: "Failed to delete gallery image" });
        }
    });
    // Contact messages endpoints
    app.get("/api/contact-messages", async (req, res) => {
        try {
            const messages = await storage.getAllContactMessages();
            res.json(messages);
        }
        catch (error) {
            console.error("Error fetching contact messages:", error);
            res.status(500).json({ error: "Failed to fetch contact messages" });
        }
    });
    app.get("/api/contact-messages/:id", async (req, res) => {
        try {
            const message = await storage.getContactMessage(req.params.id);
            if (!message) {
                return res.status(404).json({ error: "Message not found" });
            }
            res.json(message);
        }
        catch (error) {
            console.error("Error fetching contact message:", error);
            res.status(500).json({ error: "Failed to fetch contact message" });
        }
    });
    app.post("/api/contact-messages", async (req, res) => {
        try {
            const validatedData = insertContactMessageSchema.parse(req.body);
            const message = await storage.createContactMessage(validatedData);
            res.status(201).json(message);
        }
        catch (error) {
            console.error("Error creating contact message:", error);
            res.status(400).json({ error: "Failed to create contact message" });
        }
    });
    app.delete("/api/contact-messages/:id", async (req, res) => {
        try {
            const success = await storage.deleteContactMessage(req.params.id);
            if (!success) {
                return res.status(404).json({ error: "Message not found" });
            }
            res.status(204).send();
        }
        catch (error) {
            console.error("Error deleting contact message:", error);
            res.status(500).json({ error: "Failed to delete contact message" });
        }
    });
    const httpServer = createServer(app);
    return httpServer;
}

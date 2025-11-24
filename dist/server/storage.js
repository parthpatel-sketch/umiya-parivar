import { randomUUID } from "crypto";
export class MemStorage {
    users;
    events;
    galleryImages;
    contactMessages;
    constructor() {
        this.users = new Map();
        this.events = new Map();
        this.galleryImages = new Map();
        this.contactMessages = new Map();
        // Initialize with some sample data
        this.initializeSampleData();
    }
    initializeSampleData() {
        // Sample events
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
                createdAt: new Date()
            },
            {
                id: "event-2",
                title: "Satchandi Mahayagya",
                date: "2025-10-24",
                time: "9:00 AM",
                description: "A ritual to seek the blessings of the Divine Mother, bringing strength, prosperity, and peace..",
                category: "Festival",
                attendees: 15000,
                image: "/umiya/satchandi.jpg",
                createdAt: new Date()
            },
            {
                id: "event-3",
                title: "Diwali Festival of Lights",
                date: "2025-10-20",
                time: "9:30 PM",
                description: "Celebrate the victory of light over darkness with prayers, lights, and festivities.",
                category: "Festival",
                attendees: 15000,
                image: "/umiya/mandir.jpg",
                createdAt: new Date()
            }
        ];
        // Sample gallery images
        const sampleGalleryImages = [
            {
                id: "img-1",
                title: "Umiya Maa Idol - Front View",
                src: "/umiya/umiya1.jpg",
                category: "Interior",
                description: "The divine idol of Maa Umiya adorned in traditional attire.",
                createdAt: new Date()
            },
            {
                id: "img-2",
                title: "shree Ganesh",
                src: "/umiya/ganesh.png",
                category: "Festivals",
                description: "Maa Umiya dressed in a green saree, symbolizing prosperity and devotion.",
                createdAt: new Date()
            },
            {
                id: "img-3",
                title: "Hanuman dada",
                src: "/umiya/hanuman.png",
                category: "Festivals",
                description: "Golden-clad goddess during temple festivities.",
                createdAt: new Date()
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
            // {
            //   id: "img-4",
            //   title: "Divine Blessings",
            //   src: "/umiya/umiya4.jpg",
            //   category: "Interior",
            //   description: "A closer glimpse of the goddess radiating divine energy.",
            //   createdAt: new Date()
            // },
            {
                id: "img-5",
                title: "Temple Aerial View",
                src: "/umiya/mahadev.jpg",
                category: "Architecture",
                description: "Aerial perspective showcasing the temple's grand architecture.",
                createdAt: new Date()
            },
            {
                id: "img-6",
                title: "Temple Panorama",
                src: "/umiya/umiya6d.jpg",
                category: "Architecture",
                description: "Top view capturing the temple complex from above.",
                createdAt: new Date()
            },
            {
                id: "img-7",
                title: "Satchandi mahayagna rangoli",
                src: "/umiya/rangoli2.jpg",
                category: "Festivals",
                description: "Beautiful Rangoli created by the talented girls of our temple community",
                createdAt: new Date()
            },
            {
                id: "img-8",
                title: "Temple Roof View",
                src: "/umiya/drown.jpg",
                category: "Architecture",
                description: "A wide view highlighting temple domes and structure.",
                createdAt: new Date()
            },
            {
                id: "img-9",
                title: "Temple Complex",
                src: "/umiya/umiya9d.jpg",
                category: "Architecture",
                description: "Panoramic temple view surrounded by serene surroundings.",
                createdAt: new Date()
            },
            {
                id: "img-10",
                title: "Temple Entrance",
                src: "/umiya/umiya10d.jpg",
                category: "Architecture",
                description: "The beautiful entrance of Umiya Mata Temple welcoming devotees.",
                createdAt: new Date()
            },
            {
                id: "img-11",
                title: "Divine Setup",
                src: "/umiya/umiyak11.jpg",
                category: "Interior",
                description: "A beautiful altar setup featuring the goddess with devotion.",
                createdAt: new Date()
            },
            {
                id: "img-12",
                title: "Umiya Maa Idol Decorated",
                src: "/umiya/umiya12.jpg",
                category: "Festivals",
                description: "Maa Umiya beautifully decorated for a religious ceremony.",
                createdAt: new Date()
            },
            {
                id: "img-13",
                title: "Sacred Idol in Sanctum",
                src: "/umiya/umiya13.jpg",
                category: "Interior",
                description: "An image capturing the peaceful aura of the sanctum.",
                createdAt: new Date()
            },
        ];
        sampleEvents.forEach(event => this.events.set(event.id, event));
        sampleGalleryImages.forEach(image => this.galleryImages.set(image.id, image));
    }
    // Users
    async getUser(id) {
        return this.users.get(id);
    }
    async getUserByUsername(username) {
        return Array.from(this.users.values()).find((user) => user.username === username);
    }
    async createUser(insertUser) {
        const id = randomUUID();
        const user = { ...insertUser, id };
        this.users.set(id, user);
        return user;
    }
    // Events
    async getAllEvents() {
        return Array.from(this.events.values()).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    }
    async getEvent(id) {
        return this.events.get(id);
    }
    async createEvent(insertEvent) {
        const id = randomUUID();
        const event = {
            ...insertEvent,
            id,
            attendees: insertEvent.attendees ?? 0,
            createdAt: new Date()
        };
        this.events.set(id, event);
        return event;
    }
    async updateEvent(id, updateData) {
        const existingEvent = this.events.get(id);
        if (!existingEvent)
            return undefined;
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
        return Array.from(this.galleryImages.values()).sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    }
    async getGalleryImage(id) {
        return this.galleryImages.get(id);
    }
    async createGalleryImage(insertImage) {
        const id = randomUUID();
        const image = {
            ...insertImage,
            id,
            createdAt: new Date()
        };
        this.galleryImages.set(id, image);
        return image;
    }
    async updateGalleryImage(id, updateData) {
        const existingImage = this.galleryImages.get(id);
        if (!existingImage)
            return undefined;
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
    async getAllContactMessages() {
        return Array.from(this.contactMessages.values()).sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    }
    async getContactMessage(id) {
        return this.contactMessages.get(id);
    }
    async createContactMessage(insertMessage) {
        const id = randomUUID();
        const message = {
            ...insertMessage,
            id,
            phone: insertMessage.phone ?? null,
            createdAt: new Date()
        };
        this.contactMessages.set(id, message);
        return message;
    }
    async deleteContactMessage(id) {
        return this.contactMessages.delete(id);
    }
}
export const storage = new MemStorage();

export const API_URL = import.meta.env.VITE_API_URL;

// Fetch all events
export async function getEvents() {
  const res = await fetch(`${API_URL}/api/events`);
  if (!res.ok) throw new Error("Failed to fetch events");
  return res.json();
}

// Fetch single event
export async function getEvent(id: string) {
  const res = await fetch(`${API_URL}/api/events/${id}`);
  if (!res.ok) throw new Error("Failed to fetch event");
  return res.json();
}

// Fetch gallery images
export async function getGallery() {
  const res = await fetch(`${API_URL}/api/gallery`);
  if (!res.ok) throw new Error("Failed to fetch gallery images");
  return res.json();
}

// Fetch single gallery image
export async function getGalleryImage(id: string) {
  const res = await fetch(`${API_URL}/api/gallery/${id}`);
  if (!res.ok) throw new Error("Failed to fetch gallery image");
  return res.json();
}

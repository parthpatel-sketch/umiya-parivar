import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { type Event } from "@shared/schema";

// Map each event to its image
const eventImages: Record<string, string> = {
  "Navratri Celebration":  "/umiya/navratri.jpg",
  "Satchandi Mahayagya": "/umiya/satchandi.jpg",
  "Diwali Festival of Lights": "/umiya/mandir.jpg",
};

export function Events() {
  const { data: upcomingEvents = [], isLoading } = useQuery<Event[]>({
    queryKey: ["/api/events"],
  });

  if (isLoading) {
    return (
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground">Loading events...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Temple Events & Celebrations
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join us for spiritual festivals, community gatherings, and cultural celebrations 
            that bring our temple family together in devotion and joy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event: Event) => (
            <Card key={event.id} className="hover-elevate overflow-hidden">
              {eventImages[event.title] && (
                <div className="h-48 overflow-hidden">
                  <img 
                    src={eventImages[event.title]} 
                    alt={event.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">{event.category}</Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-1" />
                    {event.attendees || 0}
                  </div>
                </div>
                <CardTitle className="font-serif text-xl">{event.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(event.date).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    Temple Main Hall
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{event.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

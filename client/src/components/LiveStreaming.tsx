// import { useState } from "react"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Badge } from "@/components/ui/badge"
// import { Play, Radio, Calendar, Clock, Users, Settings } from "lucide-react"

// //todo: remove mock functionality
// const liveStreams = [
//   {
//     id: 1,
//     title: "LIVE || DAY 1 || શતચંડી મહાયજ્ઞ || શ્રી ઉમિયા માતાજી મંદિર || ગોઝારીયા",
//     description: "Daily morning prayers and devotional songs",
//     schedule: "6:00 AM - 6:30 AM",
//     status: "Live",
//     viewers: 124,
//     youtubeId: "https://www.youtube.com/live/Vi9c8pyLmKQ?si=GJq8SmYQI6-QIJsd" // Placeholder YouTube video ID
//   },
//   {
//     id: 2,
//     title: "Evening Aarti",
//     description: "Evening prayer ceremony with traditional rituals",
//     schedule: "7:00 PM - 7:30 PM", 
//     status: "Scheduled",
//     viewers: 0,
//     youtubeId: "dQw4w9WgXcQ"
//   },
//   {
//     id: 3,
//     title: "Festival Celebration",
//     description: "Special festival celebrations and ceremonies",
//     schedule: "Upcoming Events",
//     status: "Upcoming",
//     viewers: 0,
//     youtubeId: "dQw4w9WgXcQ"
//   }
// ]

// export function LiveStreaming() {
//   const [selectedStream, setSelectedStream] = useState(liveStreams[0])
//   const [customYouTubeId, setCustomYouTubeId] = useState("")
//   const [showSettings, setShowSettings] = useState(false)

//   const handleStreamSelect = (stream: typeof liveStreams[0]) => {
//     setSelectedStream(stream)
//     console.log("Selected stream:", stream.title)
//   }

//   const handleCustomStream = () => {
//     if (customYouTubeId) {
//       console.log("Loading custom YouTube stream:", customYouTubeId)
//       setSelectedStream({
//         ...selectedStream,
//         youtubeId: customYouTubeId,
//         title: "Custom Stream"
//       })
//     }
//   }

//   return (
//     <section className="py-16 bg-background">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
//             Live Temple Streaming
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
//             Join us virtually for live darshan, aarti ceremonies, and special celebrations. 
//             Experience the divine presence from anywhere in the world.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-3 gap-8">
//           {/* Video Player */}
//           <div className="lg:col-span-2">
//             <Card className="overflow-hidden">
//               <div className="relative bg-black aspect-video">
//                 {selectedStream.status === "Live" ? (
//                   <iframe
//                     width="100%"
//                     height="100%"
//                     src={`https://www.youtube.com/embed/${selectedStream.youtubeId}?autoplay=1&mute=0`}
//                     title={selectedStream.title}
//                     frameBorder="0"
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen
//                     className="absolute inset-0"
//                     data-testid="youtube-player"
//                   />
//                 ) : (
//                   <div className="absolute inset-0 flex items-center justify-center text-white">
//                     <div className="text-center">
//                       <Play className="h-16 w-16 mx-auto mb-4 opacity-50" />
//                       <h3 className="text-xl font-semibold mb-2">Stream Not Active</h3>
//                       <p className="opacity-75">{selectedStream.description}</p>
//                       <p className="text-sm opacity-50 mt-2">
//                         Scheduled: {selectedStream.schedule}
//                       </p>
//                     </div>
//                   </div>
//                 )}
                
//                 {selectedStream.status === "Live" && (
//                   <div className="absolute top-4 left-4">
//                     <Badge variant="destructive" className="flex items-center gap-1">
//                       <Radio className="h-3 w-3" />
//                       LIVE
//                     </Badge>
//                   </div>
//                 )}
                
//                 {selectedStream.status === "Live" && (
//                   <div className="absolute top-4 right-4">
//                     <Badge variant="secondary" className="flex items-center gap-1">
//                       <Users className="h-3 w-3" />
//                       {selectedStream.viewers}
//                     </Badge>
//                   </div>
//                 )}
//               </div>
              
//               <CardContent className="p-6">
//                 <div className="flex justify-between items-start mb-4">
//                   <div>
//                     <h3 className="font-serif text-xl font-semibold mb-2">
//                       {selectedStream.title}
//                     </h3>
//                     <p className="text-muted-foreground">
//                       {selectedStream.description}
//                     </p>
//                   </div>
//                   <Button
//                     variant="outline"
//                     size="icon"
//                     onClick={() => setShowSettings(!showSettings)}
//                     data-testid="button-stream-settings"
//                   >
//                     <Settings className="h-4 w-4" />
//                   </Button>
//                 </div>
                
//                 {showSettings && (
//                   <div className="border rounded-lg p-4 bg-muted/50">
//                     <h4 className="font-semibold mb-3">Custom YouTube Stream</h4>
//                     <div className="flex gap-2">
//                       <Input
//                         placeholder="Enter YouTube Video ID"
//                         value={customYouTubeId}
//                         onChange={(e) => setCustomYouTubeId(e.target.value)}
//                         data-testid="input-youtube-id"
//                       />
//                       <Button 
//                         onClick={handleCustomStream}
//                         data-testid="button-load-custom-stream"
//                       >
//                         Load
//                       </Button>
//                     </div>
//                     <p className="text-xs text-muted-foreground mt-2">
//                       Enter the YouTube video ID (e.g., dQw4w9WgXcQ from youtube.com/watch?v=dQw4w9WgXcQ)
//                     </p>
//                   </div>
//                 )}
//               </CardContent>
//             </Card>
//           </div>

//           {/* Stream List */}
//           <div className="space-y-4">
//             <h3 className="font-serif text-xl font-semibold">Available Streams</h3>
            
//             {liveStreams.map((stream) => (
//               <Card 
//                 key={stream.id}
//                 className={`cursor-pointer transition-colors hover-elevate ${
//                   selectedStream.id === stream.id ? 'ring-2 ring-primary' : ''
//                 }`}
//                 onClick={() => handleStreamSelect(stream)}
//                 data-testid={`stream-card-${stream.id}`}
//               >
//                 <CardHeader className="pb-3">
//                   <div className="flex justify-between items-start">
//                     <CardTitle className="text-lg">{stream.title}</CardTitle>
//                     <Badge 
//                       variant={stream.status === "Live" ? "destructive" : "secondary"}
//                       className="text-xs"
//                     >
//                       {stream.status}
//                     </Badge>
//                   </div>
//                 </CardHeader>
//                 <CardContent className="pt-0">
//                   <p className="text-sm text-muted-foreground mb-3">
//                     {stream.description}
//                   </p>
//                   <div className="flex items-center text-xs text-muted-foreground gap-4">
//                     <div className="flex items-center gap-1">
//                       <Clock className="h-3 w-3" />
//                       {stream.schedule}
//                     </div>
//                     {stream.status === "Live" && (
//                       <div className="flex items-center gap-1">
//                         <Users className="h-3 w-3" />
//                         {stream.viewers} watching
//                       </div>
//                     )}
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}

//             <Card className="bg-muted/50">
//               <CardContent className="p-6 text-center">
//                 <Calendar className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
//                 <h4 className="font-semibold mb-2">Stream Schedule</h4>
//                 <div className="text-sm text-muted-foreground space-y-1">
//                   <p>Morning Aarti: 6:00 AM</p>
//                   <p>Evening Aarti: 7:00 PM</p>
//                   <p>Festival Days: As Announced</p>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// src/components/LiveStreaming.tsx
import React, { useState, useEffect } from "react";
// Corrected imports using the path alias (@/) from your original code
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; 
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Play, Radio, Calendar, Clock, Users, Settings } from "lucide-react"; 

// Define event type
interface EventData {
  id: number;
  title: string;
  description: string;
  start: string; // ISO date-time
  end: string;
  youtubeId: string; // Stores just the 11-character video ID
  status?: "Live" | "Scheduled" | "Completed";
}

// Helper to extract YouTube Video ID from various URL formats
const getYouTubeVideoId = (url: string): string => {
  const patterns = [
    // Matches live, watch?v=, embed/, youtu.be/, shorts/
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/|v\/|live\/|shorts\/)?([^"&?\/\s]{11})/,
    /^([^&?\/\s]{11})$/ // For direct ID input
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }
  return ""; 
};

export function LiveStreaming() {
  const [events, setEvents] = useState<EventData[]>([]);
  const [selectedStream, setSelectedStream] = useState<EventData | null>(null);
  const [customYouTubeId, setCustomYouTubeId] = useState("");
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    // NOTE: youtubeId must be the 11-character video ID only!
    const eventList: EventData[] = [
      {
        id: 1,
        title: "🔴 LIVE || DAY 1 || શતચંડી મહાયજ્ઞ || શ્રી ઉમિયા માતાજી મંદિર || ગોઝારીયા",
        description: "શતચંડી મહાયજ્ઞ - Day 1",
        start: "2025-10-24T09:30:00+05:30",
        end: "2025-10-24T22:44:00+05:30",
        youtubeId: "Vi9c8pyLmKQ", 
      },
      {
        id: 2,
        title: "🎵|| ભવ્ય લોકડાયરો || શતચંડી મહાયજ્ઞ || શ્રી ઉમિયા માતાજી મંદિર",
        description: "ભવ્ય લોકડાયરો",
        start: "2025-10-24T22:45:00+05:30",
        end: "2025-10-25T04:30:00+05:30",
        youtubeId: "P4URByhyJ1I", 
      },
      {
        id: 3,
        title: "🕒 DAY 2 || શતચંડી મહાયજ્ઞ || શ્રી ઉમિયા માતાજી મંદિર || ગોઝારીયા",
        description: "શતચંડી મહાયજ્ઞ - Day 2 Morning",
        start: "2025-10-25T09:30:00+05:30",
        end: "2025-10-25T22:44:00+05:30",
        youtubeId: "RdPyjBU-1jg", 
      },
      {
        id: 4,
        title: "🎵 Garba Night || JIGNESH BAROT, ALPA PATEL || ઉમિયા માતાજી મંદિર",
        description: "રાસ ગરબા મહોત્સવ",
        start: "2025-10-25T22:45:00+05:30",
        end: "2025-10-26T04:30:00+05:30",
        youtubeId: "WU-5jejWRqQ", 
      },
      {
        id: 5,
        title: "🕉️ DAY 3 || શતચંડી મહાયજ્ઞ || શ્રી ઉમિયા માતાજી મંદિર || ગોઝારીયા",
        description: "શતચંડી મહાયજ્ઞ - Day 3",
        start: "2025-10-26T09:30:00+05:30",
        end: "2025-10-26T22:00:00+05:30",
        youtubeId: "eS2DsGzDqxw", 
      },
    ];

    const now = new Date();
    const updatedEvents = eventList.map((event) => {
      const start = new Date(event.start);
      const end = new Date(event.end);

      let status: "Live" | "Scheduled" | "Completed";
      if (now >= start && now <= end) status = "Live";
      else if (now < start) status = "Scheduled";
      else status = "Completed";

      return { ...event, status };
    });

    setEvents(updatedEvents);

    // Set Default Video Player on load: Live > Next Scheduled > First Event
    const liveEvent = updatedEvents.find((e) => e.status === "Live");
    const nextScheduledEvent = updatedEvents.find((e) => e.status === "Scheduled");

    if (liveEvent) {
      setSelectedStream(liveEvent);
    } else if (nextScheduledEvent) {
      setSelectedStream(nextScheduledEvent);
    } else if (updatedEvents.length > 0) {
      setSelectedStream(updatedEvents[0]);
    }
  }, []);

  const handleStreamSelect = (stream: EventData) => {
    setSelectedStream(stream);
  };

  const handleCustomStream = () => {
    const videoId = getYouTubeVideoId(customYouTubeId);
    if (videoId) {
      setSelectedStream({
        id: 0,
        title: "Custom Stream",
        description: "User-provided YouTube stream",
        start: new Date().toISOString(),
        end: new Date().toISOString(),
        youtubeId: videoId,
        status: "Live",
      });
    }
  };

  const isCurrentSelectionLive = selectedStream?.status === "Live";

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Live Temple Streaming
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join us virtually for live darshan, aarti ceremonies, and special celebrations.
            Experience the divine presence from anywhere in the world.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Video Player Section */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden">
              <div className="relative bg-black aspect-video">
                {selectedStream ? (
                  <iframe
                    width="100%"
                    height="100%"
                    // Using the clean ID for the secure embed URL
                    src={`https://www.youtube.com/embed/${selectedStream.youtubeId}?autoplay=1&mute=0`}
                    title={selectedStream.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0"
                    data-testid="youtube-player"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    <div className="text-center">
                      <Play className="h-16 w-16 mx-auto mb-4 opacity-50" />
                      <h3 className="text-xl font-semibold mb-2">No Stream Available</h3>
                      <p className="opacity-75">Please check the schedule for upcoming events.</p>
                    </div>
                  </div>
                )}

                {/* Live Badge */}
                {isCurrentSelectionLive && (
                  <div className="absolute top-4 left-4">
                    <Badge variant="destructive" className="flex items-center gap-1">
                      <Radio className="h-3 w-3" />
                      LIVE
                    </Badge>
                  </div>
                )}

                {/* Viewers Badge (placeholder) */}
                {/* {isCurrentSelectionLive && (
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      124 watching 
                    </Badge>
                  </div>
                )} */}
              </div>

              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-serif text-xl font-semibold mb-2">
                      {selectedStream?.title || "No Stream Selected"}
                    </h3>
                    <p className="text-muted-foreground">
                      {selectedStream?.description || "Select a stream from the list."}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setShowSettings(!showSettings)}
                    data-testid="button-stream-settings"
                  >
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>

                {showSettings && (
                  <div className="border rounded-lg p-4 bg-muted/50">
                    <h4 className="font-semibold mb-3">Custom YouTube Stream</h4>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Enter YouTube Video ID or URL"
                        value={customYouTubeId}
                        onChange={(e) => setCustomYouTubeId(e.target.value)}
                        data-testid="input-youtube-id"
                      />
                      <Button
                        onClick={handleCustomStream}
                        data-testid="button-load-custom-stream"
                      >
                        Load
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Enter the YouTube Video ID (e.g., `dQw4w9WgXcQ`) or a full YouTube URL.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Stream List & Schedule Section */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-semibold">Available Streams</h3>

            {events.map((stream) => (
              <Card
                key={stream.id}
                className={`cursor-pointer transition-colors hover:shadow-lg ${
                  selectedStream?.id === stream.id ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => handleStreamSelect(stream)}
                data-testid={`stream-card-${stream.id}`}
              >
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{stream.title}</CardTitle>
                    <Badge
                      variant={stream.status === "Live" ? "destructive" : "secondary"}
                      className="text-xs"
                    >
                      {stream.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-3">
                    {stream.description}
                  </p>
                  <div className="flex items-center text-xs text-muted-foreground gap-4">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {new Date(stream.start).toLocaleString([], { dateStyle: 'short', timeStyle: 'short' })} -{" "}
                      {new Date(stream.end).toLocaleTimeString([], { timeStyle: 'short' })}
                    </div>
                    {/* Placeholder viewer count */}
                    {/* {stream.status === "Live" && (
                        <div className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            124 watching 
                        </div>
                    )} */}
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="bg-muted/50">
              <CardContent className="p-6 text-center">
                <Calendar className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Stream Schedule</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>Morning Aarti: 6:00 AM</p>
                  <p>Evening Aarti: 7:00 PM</p>
                  <p>Festival Days: As Announced</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
// import { Button } from "@/components/ui/button"
// import { Calendar, Clock, MapPin } from "lucide-react"
// import templeExteriorImage from "@assets/generated_images/Hindu_temple_exterior_view_998b9df4.png"

// export function Hero() {
//   return (
//     <section className="relative h-screen flex items-center justify-center overflow-hidden">
//       {/* Background Image with Overlay */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//         style={{ backgroundImage: `url(${templeExteriorImage})` }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
//         <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
//           શ્રી ઉમિયા માતા મંદિર
//         </h1>
//         <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
//           Hindu Umiya Maa Temple
//         </h2>
//         <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
//           Experience divine blessings and spiritual peace in our sacred sanctuary. 
//           Join our community in worship, celebration, and cultural heritage.
//         </p>

//         <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
//           <Button 
//             size="lg" 
//             className="bg-primary/90 hover:bg-primary text-primary-foreground backdrop-blur-sm"
//             data-testid="button-visit-temple"
//           >
//             <MapPin className="mr-2 h-5 w-5" />
//             Visit Temple
//           </Button>
//           <Button 
//             size="lg" 
//             variant="outline" 
//             className="bg-background/20 hover:bg-background/30 text-white border-white/50 backdrop-blur-sm"
//             data-testid="button-upcoming-events"
//           >
//             <Calendar className="mr-2 h-5 w-5" />
//             Upcoming Events
//           </Button>
//         </div>

//         {/* Prayer Times */}
//         <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
//           <div className="flex items-center justify-center mb-4">
//             <Clock className="mr-2 h-5 w-5" />
//             <h3 className="font-semibold text-lg">Today's Prayer Times</h3>
//           </div>
//           <div className="grid grid-cols-2 gap-4 text-sm">
//             <div>
//               <p className="font-medium">Morning Aarti</p>
//               <p className="text-white/80">6:00 AM</p>
//             </div>
//             <div>
//               <p className="font-medium">Evening Aarti</p>
//               <p className="text-white/80">7:00 PM</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin } from "lucide-react"
import templeExteriorImage from "@assets/generated_images/Hindu_temple_exterior_view_998b9df4.png"

export function Hero() {
  const [showHero, setShowHero] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      // Fade out when video ends
      video.onended = () => {
        setFadeOut(true)
        setTimeout(() => setShowHero(true), 1000) // Wait for fade-out
      }

      // Fallback: if video fails to load or user is on Edge
      const timer = setTimeout(() => {
        setFadeOut(true)
        setTimeout(() => setShowHero(true), 1000)
      }, 20000)

      return () => clearTimeout(timer)
    }
  }, [])
useEffect(() => {
  // Check if intro has already played
  const hasPlayed = sessionStorage.getItem("introPlayed");

  if (hasPlayed) {
    setShowHero(true); // Skip intro
    return;
  }

  const video = videoRef.current;
  if (video) {
    video.onended = () => {
      setFadeOut(true);
      setTimeout(() => {
        setShowHero(true);
        sessionStorage.setItem("introPlayed", "true"); // mark as played
      }, 1000);
    };

    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setShowHero(true);
        sessionStorage.setItem("introPlayed", "true");
      }, 1000);
    }, 20000);

    return () => clearTimeout(timer);
  }
}, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-black">
      {/* Intro Video */}
      {!showHero && (
        <div
          className={`absolute inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-1000 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <video
            ref={videoRef}
            src="/videos/intro.mp4" // public/videos/
            autoPlay
            muted
            playsInline
            preload="auto"
            poster="/images/temple-poster.jpg" // fallback while loading
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      )}

      {/* Background Image */}
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
          showHero ? "opacity-100" : "opacity-0"
        }`}
        style={{ backgroundImage: `url(${"/videos/hero.jpg"})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
      </div>

      {/* Hero Content */}
      <div
        className={`relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto transition-all duration-1000 ${
          showHero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-black dark:text-white">
          શ્રી ઉમિયા માતા મંદિર
        </h1>
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 text-black/90 dark:text-white/90">
          Hindu Umiya Maa Temple
        </h2>
        <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto text-black/70 dark:text-white/70">
          Experience divine blessings and spiritual peace in our sacred sanctuary. 
          Join our community in worship, celebration, and cultural heritage.
        </p>

        {/* Buttons */}
     
<div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
  <a
    href="https://maps.app.goo.gl/9zAt136fHo9Cv5L76" // Replace with actual temple address or Maps link
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button
      size="lg"
      className="bg-primary/90 hover:bg-primary text-primary-foreground backdrop-blur-sm"
    >
      <MapPin className="mr-2 h-5 w-5" />
      Visit Temple
    </Button>
  </a>

  <Button
    size="lg"
    variant="outline"
    className="bg-background/20 hover:bg-background/30 text-white border-white/50 backdrop-blur-sm"
  >
    <Calendar className="mr-2 h-5 w-5" />
    Upcoming Events
  </Button>
</div>


        {/* Prayer Times */}
        <div className="bg-black/20 dark:bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
          <div className="flex items-center justify-center mb-4">
            <Clock className="mr-2 h-5 w-5 text-white dark:text-black" />
            <h3 className="font-semibold text-lg text-white dark:text-black">
              Today's Prayer Times
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm text-white dark:text-black">
            <div>
              <p className="font-medium">Morning Aarti</p>
              <p className="text-white/80 dark:text-black/80">5:30 AM</p>
            </div>
            <div>
              <p className="font-medium">Evening Aarti</p>
              <p className="text-white/80 dark:text-black/80">7:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Crown, Star, Building } from "lucide-react"
// import historyImage from "@umiya/bguma.jpg" 

const historicalEvents = [ 
  {
    year: "1986",
    title: "Temple Foundation",
    description: "The foundation stone was laid with blessings from revered saints and community elders.",
    icon: Building
  },
  {
    year: "1987",
    title: "Temple Consecration",
    description: "The temple was consecrated with elaborate ceremonies and the installation of the sacred murti.",
    icon: Crown
  },
  // {
  //   year: "1995",
  //   title: "Community Hall Addition",
  //   description: "A spacious community hall was added to accommodate growing congregation and cultural events.",
  //   icon: Star
  // }
  {
  year: "2025",
  title: "Temple Repaint",
 description: "The temple received a vibrant new look through a complete repaint, restoring its beauty and cultural significance.",
 icon: Star
  },
  // {
  //   year: "2010",
  //   title: "Renovation & Expansion",
  //   description: "Major renovation and expansion project completed, enhancing the temple's architectural beauty.",
  //   icon: Calendar
  // }
  {
year: "2025",
title: "Satchandi Mahayagna",
description: "Devotees gathered in large numbers to participate in the Satchandi Mahayagna, strengthening the spiritual unity and cultural bond of the community",
icon: Star},
]

export function History() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Sacred Heritage
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover the rich history and cultural significance of our temple, from its founding 
            to its role as a spiritual cornerstone in our community.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
               Temple History and Legacy
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Goddess Umiya Maa holds a special place in Hindu tradition, particularly among the 
                Patel community. Known as the divine mother and protector, she is revered for her 
                benevolence, strength, and ability to fulfill the wishes of her devoted followers.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The name "Umiya" derives from the Sanskrit word "Uma," another name for Goddess Parvati, 
                the divine consort of Lord Shiva. Maa Umiya is believed to be an incarnation of Goddess 
                Durga, embodying the divine feminine energy that protects and nurtures her devotees.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our temple was established with the vision of creating a sacred space where the community 
                could come together to worship, celebrate festivals, and maintain their cultural identity 
                while adapting to modern life.
              </p>
            </div>

            <div>
              <h4 className="font-serif text-xl font-semibold text-foreground mb-3">
                Cultural Importance
              </h4>
              <div className="space-y-2">
                <Badge variant="secondary" className="mr-2">Community Unity</Badge>
                <Badge variant="secondary" className="mr-2">Cultural Preservation</Badge>
                <Badge variant="secondary" className="mr-2">Spiritual Guidance</Badge>
                <Badge variant="secondary">Festival Celebrations</Badge>
              </div>
            </div>
          </div>

          <div>
            <img 
              src={"/umiya/umagold.jpg"}
              alt="Temple Architectural Details" 
              className="rounded-lg shadow-lg w-full h-auto mb-6"
            />
            <p className="text-sm text-muted-foreground text-center italic">
              Intricate architectural details showcasing traditional Hindu temple craftsmanship
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-serif text-2xl font-semibold text-foreground mb-8 text-center">
            Temple Timeline
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {historicalEvents.map((event, index) => (
              <Card key={index} className="hover-elevate">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <event.icon className="h-8 w-8 text-primary mr-3" />
                    <Badge variant="outline" className="text-xs font-semibold">
                      {event.year}
                    </Badge>
                  </div>
                  <h4 className="font-serif text-lg font-semibold mb-2">
                    {event.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {event.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
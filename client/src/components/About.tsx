import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Flower } from "lucide-react"
import templeInteriorImage from "@assets/generated_images/Temple_interior_sanctum_d37f8a91.png"

export function About() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Umiya Maa Temple
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A sacred place of worship dedicated to Goddess Umiya Maa, serving our community 
            with devotion, cultural preservation, and spiritual guidance.
        
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="/videos/about.jpg" 
              alt="Temple Interior Sanctum" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-semibold text-foreground">
              Origins and Significance
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              The Hindu Umiya Maa Temple stands as a beacon of spiritual light, dedicated to 
              preserving ancient traditions while fostering a sense of community among devotees. 
              Our temple serves not only as a place of worship but as a cultural center where 
              generations come together to celebrate festivals, share wisdom, and strengthen 
              their connection to the divine.
            
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Goddess Umiya Maa, revered as the divine mother and protector, blesses all who 
              seek her guidance with prosperity, peace, and spiritual fulfillment. Through 
              daily prayers, special ceremonies, and community service, we honor her divine 
              presence and carry forward the sacred traditions of our ancestors.
             
            </p>
            <p className="text-muted-foreground leading-relaxed">
             
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center hover-elevate">
            <CardContent className="p-8">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-xl font-semibold mb-3">ભક્તિ</h3>
              <p className="text-muted-foreground">
           દરરોજની પ્રાર્થના, ભજન-કિર્તન અને પવિત્ર રીતરિવાજો દ્વારા ઉમિયા માતા સાથે આત્મીય સંબંધ વધારવો.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover-elevate">
            <CardContent className="p-8">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-xl font-semibold mb-3"> સમુદાય</h3>
              <p className="text-muted-foreground">
              

તહેવારો અને સાંસ્કૃતિક કાર્યક્રમો દ્વારા પરિવાર અને સમુદાયને મજબૂત જોડાણ આપવું, એકતા અને ભાઈચારા વધારવો.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover-elevate">
            <CardContent className="p-8">
              <Flower className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-xl font-semibold mb-3">વારસો</h3>
              <p className="text-muted-foreground">
                હિંદુ પરંપરા, ધાર્મિક રીતરિવાજો અને આધ્યાત્મિક જ્ઞાનને આગામી પેઢી સુધી પહોંચાડવું, આપણા સંસ્કૃતિ અને વિશ્વાસને જાળવવું.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
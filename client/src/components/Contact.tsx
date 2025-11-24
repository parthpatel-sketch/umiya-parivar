import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

// ✅ Make sure your type matches your DB schema
export interface InsertContactMessage {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export function Contact() {
  const [formData, setFormData] = useState<InsertContactMessage>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  })

  const { toast } = useToast()

  const submitContactMutation = useMutation({
    mutationFn: async (contactData: InsertContactMessage) => {
      const response = await fetch("/api/contact-messages", {
        method: "POST",
        body: JSON.stringify(contactData),
        headers: { "Content-Type": "application/json" }
      })
      if (!response.ok) throw new Error("Failed to submit message")
      return response.json()
    },
    onSuccess: () => {
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon."
      })
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      })
    }
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    submitContactMutation.mutate(formData)
  }

  const handleInputChange = (field: keyof InsertContactMessage, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We welcome you to visit our temple or reach out with any questions.
            Our community is here to support your spiritual journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Temple Address</h4>
                    <p className="text-muted-foreground">
                      In Para, Tower Chowk<br />
                      Gozaria, Gujarat, 382825
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-muted-foreground">
                      Contact No: +91 97227 73034<br />
                      Emergency: +91 94263 84407
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground">info@umiyamaatemple.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Temple Hours</h4>
                    <div className="text-muted-foreground space-y-1">
                      <p>Daily: 5:30 AM - 9:00 PM</p>
                      <p>Morning Aarti: 5:30 AM</p>
                      <p>Evening Aarti: 7:00 PM</p>
                      <p>Special Events: As Announced</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Card */}
           
          </div>

          {/* Right: Contact Form */}
          <div>
 <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Navigation className="h-5 w-5" />
                  Temple Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div
                  className="rounded-lg h-64 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('/videos/map.png')` // ✅ update this path
                  }}
                >
                  <div className="bg-black/40 text-center text-white h-full flex flex-col   items-center justify-center rounded-lg">
                    <MapPin className="h-10 w-10 mb-3 text-black"  />
                    <p className="font-medium text-black">Interactive Map</p>
                    <br />
                    <p className="text-md text-black">
                      Click below to open directions in your map app
                    </p>
                  </div>
                </div>
                <a
                  href="https://maps.app.goo.gl/9zAt136fHo9Cv5L76"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full mt-4" variant="outline">
                    Get Directions
                  </Button>
                </a>
              </CardContent>
            </Card>
            
            {/* <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                    />
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                    />
                    <select
                      className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      required
                    >
                      <option value="">Select Subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="events">Events & Programs</option>
                      <option value="donations">Donations</option>
                      <option value="volunteering">Volunteering</option>
                      <option value="ceremonies">Private Ceremonies</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    required
                    rows={5}
                  />

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={submitContactMutation.isPending}
                  >
                    {submitContactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card> */}




{/* 
            <div className="mt-8 text-center">
              <h4 className="font-serif text-lg font-semibold mb-4">Emergency Contact</h4>
              <p className="text-muted-foreground mb-2">
                For urgent temple matters or emergencies, please call:
              </p>
              <Button variant="outline">
                <Phone className="h-4 w-4 mr-2" />
                (+91) 94263 84407
              </Button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

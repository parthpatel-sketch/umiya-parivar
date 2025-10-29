import { Link } from "wouter"
import { Flower2, Facebook, Instagram, Youtube, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Temple Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Flower2 className="h-8 w-8 text-primary" />
              <h3 className="font-serif text-xl font-bold">Umiya Maa Temple</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              A sacred place of worship dedicated to Goddess Umiya Maa, 
              fostering spiritual growth and community unity.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/umiya_dham_gozariya/?igsh=Z21zdHh0NHJyc211" 
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.youtube.com/@ShreeUmiyaParivarGozariya" 
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-youtube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
           
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" data-testid="footer-link-about">
                  <span className="text-muted-foreground hover:text-primary transition-colors">
                    About Temple
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/history" data-testid="footer-link-history">
                  <span className="text-muted-foreground hover:text-primary transition-colors">
                    Our History
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/events" data-testid="footer-link-events">
                  <span className="text-muted-foreground hover:text-primary transition-colors">
                    Events & Programs
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/gallery" data-testid="footer-link-gallery">
                  <span className="text-muted-foreground hover:text-primary transition-colors">
                    Photo Gallery
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Temple Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <Link href="/live" data-testid="footer-link-history">
                  <span className="text-muted-foreground hover:text-primary transition-colors">
                   <li>Live Darshan</li>
                  </span>
                </Link> 
              {/* <li>Private Ceremonies</li> */}
              {/* <li>Wedding Ceremonies</li> */}
              <li>Festival Celebrations</li>
              {/* <li>Spiritual Counseling</li> */}
              <li>Community Events</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">@umiyamaatemple.com</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">+91 97227 73034</span>
              </div>
              <div className="text-muted-foreground">
                <p className="font-medium mb-1">Temple Hours:</p>
                <p>Daily: 5:30 AM - 9:00 PM</p>
                <p>Aarti: 5:30 AM & 7:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section
        <div className="border-t pt-8 mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Hindu Umiya Maa Temple. All rights reserved.
            </p>
            <span> Website Design & Developed by parth patel </span> */}
<div className="border-t pt-8 mt-8">
  <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
    <div className="text-center sm:text-left">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Hindu Umiya Maa Temple. All rights reserved.
      </p>
      <p className="text-sm text-muted-foreground">
        Designed & Developed by{" "}
        <a
          href="https://www.linkedin.com/in/parth-patel-832a7a238/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline font-medium"
        >
          Parth Patel
        </a>
      </p>
      </div>
            <div className="flex gap-6 text-sm">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-privacy"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-terms"
              >
                Terms of Service
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-donations"
              >
                Donations
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
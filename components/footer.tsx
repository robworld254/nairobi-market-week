"use client"

import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ]

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Activities", href: "#activities" },
    { name: "Exhibitors", href: "#exhibitors" },
    { name: "Contact", href: "#contact" },
  ]

  const partners = ["Nairobi County Government", "Ministry of Trade", "KEPSA", "Nairobi Chamber of Commerce"]

  return (
    <footer id="contact" className="bg-card border-t-4 border-golden relative overflow-hidden">
      {/* African Pattern Background */}
      <div className="absolute inset-0 pattern-kente opacity-10" />

      <div className="container mx-auto px-4 py-12 sm:py-16 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marketweek_upscaled%20%281%29-CCSIuQlmGT4G46EIDiA0UmRPMyUBio.png"
                  alt="Nairobi Market Week"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <div className="font-display text-2xl sm:text-3xl text-purple leading-none">NAIROBI</div>
                <div className="font-display text-xl sm:text-2xl text-golden leading-none">MARKET WEEK</div>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md text-sm sm:text-base">
              Empowering small traders and building Nairobi's economy through trade, networking, and community
              engagement.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 sm:gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-golden/20 hover:bg-golden text-golden hover:text-foreground flex items-center justify-center transition-all duration-300 hover:scale-110 border-2 border-golden"
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-xl sm:text-2xl text-foreground mb-4 sm:mb-6">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm sm:text-base text-muted-foreground hover:text-golden transition-colors duration-300 font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Updated contact information */}
          <div>
            <h3 className="font-display text-xl sm:text-2xl text-foreground mb-4 sm:mb-6">Contact</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-golden mt-1 flex-shrink-0" />
                <a
                  href="mailto:hello@nairobimarketweek.co.ke"
                  className="text-xs xs:text-base text-muted-foreground hover:text-golden transition-colors break-all"
                >
                  hello@nairobimarketweek.co.ke
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-golden mt-1 flex-shrink-0" />
                <a
                  href="tel:+254768276670"
                  className="text-xs xs:text-base text-muted-foreground hover:text-golden transition-colors"
                >
                  +254 768 276 670
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-golden mt-1 flex-shrink-0" />
                <span className="text-xs xs:text-base text-muted-foreground">
                  Ring Road, Kilimani
                  <br />
                  Nairobi, Kenya
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Partners Section */}
        <div className="border-t border-border pt-6 sm:pt-8 mb-6 sm:mb-8">
          <h4 className="font-display text-lg sm:text-xl text-center text-muted-foreground mb-4 sm:mb-6">
            In Partnership With
          </h4>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
            {partners.map((partner) => (
              <div
                key={partner}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-muted rounded-full text-xs sm:text-sm font-medium text-muted-foreground border-2 border-border hover:border-golden transition-colors duration-300"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs sm:text-sm text-center md:text-left">
            © 2025 Nairobi Market Week. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
            <a href="#" className="text-muted-foreground hover:text-golden transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-golden transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="h-2 bg-gradient-to-r from-golden via-purple to-golden-light" />
    </footer>
  )
}

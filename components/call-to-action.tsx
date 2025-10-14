"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"

export default function CallToAction() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Large Curved Shape Background */}
      <div className="absolute inset-0">
        <svg viewBox="0 0 1440 800" className="w-full h-full" preserveAspectRatio="none">
          <path
            d="M 0 400 Q 360 200 720 400 T 1440 400 L 1440 800 L 0 800 Z"
            fill="currentColor"
            className="text-golden opacity-20"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-purple/20 text-purple px-6 py-2 rounded-full font-bold uppercase text-sm mb-8 border-2 border-purple">
            Don't Miss Out
          </div>

          <h2 className="font-display text-6xl md:text-8xl text-foreground mb-8 leading-none">
            READY TO
            <br />
            <span className="text-golden">JOIN US?</span>
          </h2>

          <p className="text-2xl text-muted-foreground mb-12 leading-relaxed">
            Register now to secure your spot at Nairobi's premier trade event. Limited exhibition spaces available!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button
              size="lg"
              className="bg-golden hover:bg-golden-dark text-foreground font-bold text-xl px-12 py-8 rounded-2xl border-4 border-purple transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
            >
              Register as Exhibitor
              <ArrowRight className="ml-2 w-6 h-6 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-transparent hover:bg-purple/10 text-foreground font-bold text-xl px-12 py-8 rounded-2xl border-4 border-purple transition-all duration-300 hover:scale-105"
            >
              <Mail className="mr-2 w-6 h-6" />
              Contact Us
            </Button>
          </div>

          {/* Contact Info */}
          <div className="mt-16 p-8 bg-card rounded-3xl border-4 border-border">
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <div className="text-sm text-muted-foreground font-medium mb-2">Email</div>
                <div className="text-base font-bold text-foreground">hello@nairobimarketweek.co.ke</div>
              </div>

              <div>
                <div className="text-sm text-muted-foreground font-medium mb-2">Phone</div>
                <div className="text-base font-bold text-foreground">+254 768 276 670</div>
              </div>

              <div>
                <div className="text-sm text-muted-foreground font-medium mb-2">Location</div>
                <div className="text-base font-bold text-foreground">Ring Road, Kilimani, Nairobi, Kenya</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

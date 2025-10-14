"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, ArrowRight } from "lucide-react"

export default function Hero() {
  const curveRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (curveRef.current) {
        const scrollY = window.scrollY
        curveRef.current.style.transform = `translateY(${scrollY * 0.3}px) rotate(${scrollY * 0.05}deg)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-adinkra opacity-30" />

      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-golden/20 rounded-full blur-3xl animate-pulse-glow" />
      <div
        className="absolute bottom-20 left-10 w-96 h-96 bg-purple/20 rounded-full blur-3xl animate-pulse-glow"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Large Curved Shape - Sziget Style */}
      <div
        ref={curveRef}
        className="absolute -left-40 top-1/4 w-[800px] h-[800px] transition-transform duration-100 ease-out"
      >
        <svg viewBox="0 0 800 800" className="w-full h-full">
          <path
            d="M 400 50 Q 650 200 600 450 T 400 750 Q 150 600 200 350 T 400 50"
            fill="none"
            stroke="currentColor"
            strokeWidth="120"
            className="text-golden opacity-40"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 bg-golden/20 border-2 border-golden px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 sm:mb-8 animate-slide-up backdrop-blur-sm">
            <span className="w-2 h-2 bg-golden rounded-full animate-pulse" />
            <span className="font-bold text-golden uppercase tracking-wider text-xs sm:text-sm">
              Inaugural Event 2025
            </span>
          </div>

          {/* Main Heading - Added responsive text sizes */}
          <h1
            className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] leading-none mb-4 sm:mb-6 animate-slide-up text-foreground"
            style={{ animationDelay: "0.1s" }}
          >
            NAIROBI
            <br />
            <span className="text-golden">MARKET</span>
            <br />
            <span className="text-purple">WEEK</span>
          </h1>

          {/* Subheading - Added responsive text sizes */}
          <p
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-muted-foreground mb-6 sm:mb-8 animate-slide-up leading-relaxed px-4"
            style={{ animationDelay: "0.2s" }}
          >
            Empowering Small Traders,
            <br />
            Building Nairobi's Economy
          </p>

          {/* Event Details - Improved mobile layout */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-12 animate-slide-up px-4"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="flex items-center gap-3 bg-card px-4 sm:px-6 py-3 sm:py-4 rounded-2xl border-2 border-golden shadow-lg w-full sm:w-auto">
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-golden flex-shrink-0" />
              <div className="text-left">
                <div className="text-xs sm:text-sm text-muted-foreground font-medium">Event Dates</div>
                <div className="text-base sm:text-lg font-bold text-foreground">Nov 20-23, 2025</div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-card px-4 sm:px-6 py-3 sm:py-4 rounded-2xl border-2 border-purple shadow-lg w-full sm:w-auto">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-purple flex-shrink-0" />
              <div className="text-left">
                <div className="text-xs sm:text-sm text-muted-foreground font-medium">Location</div>
                <div className="text-base sm:text-lg font-bold text-foreground">BBS Mall, Eastleigh</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons - Improved mobile button sizes */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up px-4"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              size="lg"
              className="bg-golden hover:bg-golden-dark text-foreground font-bold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-2xl border-4 border-purple transition-all duration-300 hover:scale-105 hover:shadow-2xl group w-full sm:w-auto"
            >
              Register as Exhibitor
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-purple hover:bg-purple-dark text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-2xl border-4 border-golden transition-all duration-300 hover:scale-105 hover:shadow-2xl w-full sm:w-auto"
            >
              Learn More
            </Button>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-1/4 right-10 w-20 h-20 opacity-20 animate-float hidden lg:block">
            <svg viewBox="0 0 100 100" className="text-golden">
              <circle cx="50" cy="50" r="40" fill="currentColor" />
            </svg>
          </div>

          <div
            className="absolute bottom-1/4 left-20 w-16 h-16 opacity-20 animate-float hidden lg:block"
            style={{ animationDelay: "2s" }}
          >
            <svg viewBox="0 0 100 100" className="text-purple">
              <rect x="10" y="10" width="80" height="80" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Moved to bottom-left to avoid overlap with back-to-top button */}
      <div className="absolute bottom-8 left-8 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-golden rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-golden rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import ThemeToggle from "./theme-toggle"
import Image from "next/image"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Activities", href: "#activities" },
    { name: "Exhibitors", href: "#exhibitors" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg" : "bg-transparent"
      }`}
    >
      {/* African Pattern Accent Bar */}
      <div className="h-1 bg-gradient-to-r from-golden via-purple to-golden-light" />

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-110">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marketweek_upscaled%20%281%29-CCSIuQlmGT4G46EIDiA0UmRPMyUBio.png"
                alt="Nairobi Market Week"
                fill
                className="object-contain"
              />
            </div>
            <div className="hidden md:block">
              <div className="font-display text-2xl text-purple leading-none">NAIROBI</div>
              <div className="font-display text-xl text-golden leading-none">MARKET WEEK</div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground hover:text-golden transition-colors duration-300 font-medium relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-golden transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA & Theme Toggle */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button
              size="lg"
              className="hidden md:flex bg-purple hover:bg-purple-dark text-white font-bold border-2 border-golden transition-all duration-300 hover:scale-105"
            >
              Register Now
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-golden transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-border pattern-kente">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground hover:text-golden transition-colors duration-300 font-medium text-lg py-2"
                >
                  {link.name}
                </a>
              ))}
              <Button
                size="lg"
                className="bg-purple hover:bg-purple-dark text-white font-bold border-2 border-golden mt-4"
              >
                Register Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

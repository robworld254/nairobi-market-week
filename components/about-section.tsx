"use client"

import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Large Curved Background Shape */}
      <div className="absolute right-0 top-0 w-[600px] h-full">
        <svg viewBox="0 0 600 1000" className="w-full h-full" preserveAspectRatio="none">
          <path
            d="M 0 0 Q 300 250 200 500 T 0 1000 L 600 1000 L 600 0 Z"
            fill="currentColor"
            className="text-golden opacity-10"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-block bg-purple/20 text-purple px-6 py-2 rounded-full font-bold uppercase text-sm mb-6 border-2 border-purple">
              About The Event
            </div>

            <h2 className="font-display text-6xl md:text-7xl text-foreground mb-6 leading-none">
              THE BIGGEST
              <br />
              <span className="text-golden">TRADE FAIR</span>
              <br />
              <span className="text-purple">IN NAIROBI</span>
            </h2>

            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              Nairobi Market Week is an annual trade fair providing a structured platform for small traders across
              different sectors within Nairobi County to showcase their products and services.
            </p>

            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              This inaugural event targets traders within Eastleigh, one of Nairobi's most vibrant commercial hubs,
              creating market linkages, providing capacity building, and enhancing policy dialogue between traders,
              government, and the private sector.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-card px-6 py-4 rounded-2xl border-2 border-golden">
                <div className="font-display text-3xl text-golden">2025</div>
                <div className="text-sm text-muted-foreground font-medium">Inaugural Year</div>
              </div>

              <div className="bg-card px-6 py-4 rounded-2xl border-2 border-purple">
                <div className="font-display text-3xl text-purple">Eastleigh</div>
                <div className="text-sm text-muted-foreground font-medium">Commercial Hub</div>
              </div>
            </div>
          </div>

          {/* Image with Overlay Shape */}
          <div className="relative">
            <div className="relative h-[600px] rounded-3xl overflow-hidden border-4 border-golden shadow-2xl">
              <Image src="/vibrant-african-market-with-traders-and-colorful-p.jpg" alt="Nairobi Market" fill className="object-cover" />
              {/* Overlay Pattern */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>

            {/* Floating Logo */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-card rounded-3xl border-4 border-purple shadow-2xl p-4 animate-float">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marketweek_upscaled%20%281%29-CCSIuQlmGT4G46EIDiA0UmRPMyUBio.png"
                alt="Nairobi Market Week Logo"
                fill
                className="object-contain p-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { ShoppingBag, Users, Briefcase, TrendingUp } from "lucide-react"

export default function EventDetails() {
  const highlights = [
    {
      icon: ShoppingBag,
      title: "500+",
      subtitle: "Exhibitors Expected",
      color: "golden",
    },
    {
      icon: Users,
      title: "10,000+",
      subtitle: "Visitors Anticipated",
      color: "purple",
    },
    {
      icon: Briefcase,
      title: "4 Days",
      subtitle: "Of Trade & Networking",
      color: "golden",
    },
    {
      icon: TrendingUp,
      title: "100+",
      subtitle: "Business Opportunities",
      color: "purple",
    },
  ]

  return (
    <section className="py-20 bg-muted relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-kente opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="bg-card p-8 rounded-3xl border-4 border-border hover:border-golden transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
                style={{
                  animation: "scale-in 0.6s ease-out forwards",
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                }}
              >
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 ${
                    item.color === "golden" ? "bg-golden/20 text-golden" : "bg-purple/20 text-purple"
                  }`}
                >
                  <Icon className="w-8 h-8" />
                </div>
                <div className="font-display text-5xl text-foreground mb-2">{item.title}</div>
                <div className="text-muted-foreground font-medium">{item.subtitle}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

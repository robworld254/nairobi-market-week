"use client"

import { Store, GraduationCap, MessageSquare, Handshake, Music, Award } from "lucide-react"

export default function KeyActivities() {
  const activities = [
    {
      icon: Store,
      title: "Exhibitions & Trade Fair",
      description: "Showcase your goods and services to thousands of potential customers and business partners.",
      color: "bg-golden/20 text-golden border-golden",
    },
    {
      icon: GraduationCap,
      title: "Business Clinics",
      description: "Get support on business registration, licensing, tax compliance, and financing opportunities.",
      color: "bg-purple/20 text-purple border-purple",
    },
    {
      icon: MessageSquare,
      title: "Policy Dialogues",
      description:
        "Engage in meaningful conversations between traders, government officials, and private sector leaders.",
      color: "bg-golden/20 text-golden border-golden",
    },
    {
      icon: Handshake,
      title: "Networking Forums",
      description: "Build valuable B2B and B2C connections that will grow your business beyond the event.",
      color: "bg-purple/20 text-purple border-purple",
    },
    {
      icon: Music,
      title: "Cultural Showcase",
      description: "Experience the diversity of Nairobi through food, art, music, and entertainment.",
      color: "bg-golden/20 text-golden border-golden",
    },
    {
      icon: Award,
      title: "Awards & Recognition",
      description: "Celebrate outstanding traders and businesses making a difference in the community.",
      color: "bg-purple/20 text-purple border-purple",
    },
  ]

  return (
    <section id="activities" className="py-32 bg-muted relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-golden/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-golden/20 text-golden px-6 py-2 rounded-full font-bold uppercase text-sm mb-6 border-2 border-golden">
            What to Expect
          </div>

          <h2 className="font-display text-6xl md:text-8xl text-foreground mb-6 leading-none">
            KEY
            <br />
            <span className="text-purple">ACTIVITIES</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Four days packed with opportunities to grow your business, learn new skills, and connect with the community.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => {
            const Icon = activity.icon
            return (
              <div
                key={index}
                className="bg-card p-8 rounded-3xl border-4 border-border hover:border-golden transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
                style={{
                  animation: "slide-up 0.8s ease-out forwards",
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                }}
              >
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 border-2 ${activity.color}`}
                >
                  <Icon className="w-8 h-8" />
                </div>

                <h3 className="font-display text-3xl text-foreground mb-4">{activity.title}</h3>

                <p className="text-muted-foreground leading-relaxed">{activity.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

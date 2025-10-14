"use client"

export default function StatsSection() {
  return (
    <section className="py-32 bg-gradient-to-br from-purple via-purple-dark to-purple relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 pattern-adinkra opacity-10" />

      {/* Floating Shapes */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-golden/20 rounded-full blur-3xl animate-pulse-glow" />
      <div
        className="absolute bottom-20 right-20 w-64 h-64 bg-golden/20 rounded-full blur-3xl animate-pulse-glow"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-6xl md:text-8xl text-white mb-8 leading-none">
            WHY
            <br />
            <span className="text-golden">PARTICIPATE?</span>
          </h2>

          <p className="text-2xl text-white/90 mb-16 leading-relaxed">
            Join hundreds of traders, thousands of visitors, and countless opportunities to grow your business and make
            lasting connections.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border-2 border-golden hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="font-display text-6xl text-golden mb-4">500+</div>
              <div className="text-white text-lg font-medium">Small Traders & Exhibitors</div>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border-2 border-golden hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="font-display text-6xl text-golden mb-4">10K+</div>
              <div className="text-white text-lg font-medium">Expected Visitors</div>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border-2 border-golden hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="font-display text-6xl text-golden mb-4">100+</div>
              <div className="text-white text-lg font-medium">Business Opportunities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

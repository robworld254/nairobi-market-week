import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import EventDetails from "@/components/event-details"
import AboutSection from "@/components/about-section"
import KeyActivities from "@/components/key-activities"
import StatsSection from "@/components/stats-section"
import CallToAction from "@/components/call-to-action"
import Footer from "@/components/footer"
import BackToTop from "@/components/back-to-top"

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <EventDetails />
      <AboutSection />
      <KeyActivities />
      <StatsSection />
      <CallToAction />
      <Footer />
      <BackToTop />
    </main>
  )
}

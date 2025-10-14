import type React from "react"
import { Space_Grotesk, Bebas_Neue } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
})

export const metadata = {
  title: "Nairobi Market Week 2025 | Nov 20-23 | BBS Mall Eastleigh",
  description:
    "Empowering Small Traders, Building Nairobi's Economy. Join us for the inaugural Nairobi Market Week - a vibrant trade fair celebrating commerce, culture, and community.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${bebasNeue.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}

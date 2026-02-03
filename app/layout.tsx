import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import SmoothScroll from "@/components/SmoothScroll"
import Navigation from "@/components/Navigation"
import ScrollProgress from "@/components/animations/ScrollProgress"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Fawwaz Naufal - Web Developer Portfolio",
  description:
    "Portfolio website of Fawwaz Naufal, a passionate web developer specializing in modern web technologies",
  keywords: [
    "web developer",
    "portfolio",
    "react",
    "next.js",
    "typescript",
    "frontend",
    "backend",
  ],
  authors: [{ name: "Fawwaz Naufal" }],
  openGraph: {
    title: "Fawwaz Naufal - Web Developer Portfolio",
    description:
      "Portfolio website of Fawwaz Naufal, a passionate web developer specializing in modern web technologies",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans bg-black text-white`}>
        <SmoothScroll>
          <ScrollProgress />
          <Navigation />
          <main>{children}</main>
        </SmoothScroll>
      </body>
    </html>
  )
}

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
  title: "Fawwaz Naufal - Full-stack Developer Portfolio",
  description:
    "Portfolio of Fawwaz Naufal, a full-stack developer building ERP systems, web platforms, and Web3 applications with Go, Laravel, Next.js, and Solidity.",
  keywords: [
    "full-stack developer",
    "portfolio",
    "go",
    "laravel",
    "next.js",
    "typescript",
    "solidity",
    "web3",
    "erp",
  ],
  authors: [{ name: "Fawwaz Naufal" }],
  openGraph: {
    title: "Fawwaz Naufal - Full-stack Developer Portfolio",
    description:
      "Portfolio of Fawwaz Naufal, a full-stack developer building ERP systems, web platforms, and Web3 applications with Go, Laravel, Next.js, and Solidity.",
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

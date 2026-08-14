import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import SmoothScroll from "@/components/SmoothScroll"
import Navigation from "@/components/Navigation"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Fawwaz Naufal — Full-stack Developer",
  description:
    "Full-stack developer building ERP systems, internal tools, and smart contracts with Go, Laravel, Next.js, and Solidity. Four hackathon wins, USD 11.7K in prizes.",
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
  authors: [{ name: "Fawwaz Naufal Maulana" }],
  openGraph: {
    title: "Fawwaz Naufal — Full-stack Developer",
    description:
      "Full-stack developer building ERP systems, internal tools, and smart contracts. Four hackathon wins, USD 11.7K in prizes.",
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
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-ink text-paper`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-phosphor focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-ink"
        >
          Skip to content
        </a>
        <SmoothScroll>
          <Navigation />
          <main id="main">{children}</main>
        </SmoothScroll>
      </body>
    </html>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Sidebar } from "@/components/sidebar"
import PageTransition from "@/components/PageTransition"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Fawwaz Naufal - Portfolio",
  description: "Portfolio website of Naufal, a passionate web developer"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <div className="flex min-h-screen relative">
          <div className="relative z-10">
            <Sidebar />
          </div>
          <main className="flex-1 ml-16 relative z-10 overflow-hidden">
              <PageTransition>
                {children}
              </PageTransition>
          </main>
        </div>
      </body>
    </html>
  )
}
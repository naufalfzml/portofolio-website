import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="section-container">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-gray-400 text-lg">Hello, I'm Naufal</p>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Hi! I'm Naufal,
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Web Developer
                </span>
              </h1>
            </div>

            <p className="text-gray-300 text-lg max-w-md">
              I build visually captivating, user-friendly websites & applications that deliver exceptional user
              experiences.
            </p>

            <div className="flex gap-4">
              <a href="/projects" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3">View My Projects</a>
              <a
                href="/contact"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 px-6 py-3 bg-transparent"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 gradient-purple rounded-full blur-3xl opacity-30 scale-100"></div>
            <div className="relative aspect-square rounded-full bg-gradient-to-br from-purple-600 to-pink-600 p-1">
              <div className="aspect-square bg-gray-900 rounded-full">
                <div className="relative aspect-square">
                <Image
                  src={'prof-pic.jpeg'}
                  alt="Naufal - Web Developer"
                  fill
                  className="rounded-full object-cover"
                  priority
                />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

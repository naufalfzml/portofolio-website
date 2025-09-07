"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, User, Code, Briefcase, Mail } from "lucide-react"

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Skills", href: "/skills", icon: Code },
  { name: "Projects", href: "/projects", icon: Briefcase },
  { name: "Contact", href: "/contact", icon: Mail },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col gap-3 fixed left-4 top-0 h-screen justify-center z-50">
      {navigation.map((item) => {
        const Icon = item.icon
        const isActive = pathname === item.href

        return (
          <Link
            key={item.name}
            href={item.href}
            className={`
              flex items-center space-x-3 px-4 py-3 rounded-lg 
              transition-all duration-150 ease-out
              min-h-[48px] w-full
              hover:scale-105 active:scale-95
              focus:outline-none focus:ring-2 focus:ring-purple-400
              cursor-pointer
              ${isActive 
                ? "bg-purple-600 text-white shadow-md" 
                : "text-gray-400 hover:text-white hover:bg-gray-700/90 bg-gray-800/50"
              }
            `}
            prefetch={true}
          >
            <Icon className="w-5 h-5 flex-shrink-0 pointer-events-none" />
            <span className="text-sm font-medium whitespace-nowrap select-none pointer-events-none">
              {item.name}
            </span>
          </Link>
        )
      })}
    </nav>
  )
}
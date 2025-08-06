"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Menu, X, Sun, Moon, Laptop } from "lucide-react"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [theme, setTheme] = useState("system")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "system"
    setTheme(savedTheme)
    applyTheme(savedTheme)
  }, [])

  const applyTheme = (theme) => {
    const root = window.document.documentElement
    if (theme === "dark") {
      root.classList.add("dark")
    } else if (theme === "light") {
      root.classList.remove("dark")
    } else {
      // System theme
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      if (isDark) root.classList.add("dark")
      else root.classList.remove("dark")
    }
  }

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    applyTheme(newTheme)
  }

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm border-b dark:border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
            John Doe
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? "text-blue-600 border-b-2 border-blue-600 dark:text-blue-400"
                    : "text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Theme toggle buttons */}
            <div className="flex items-center space-x-2">
              <button onClick={() => handleThemeChange("light")} className={`${theme === "light" ? "text-blue-600" : "text-gray-500 dark:text-gray-300"}`}>
                <Sun size={18} />
              </button>
              <button onClick={() => handleThemeChange("dark")} className={`${theme === "dark" ? "text-blue-600" : "text-gray-500 dark:text-gray-300"}`}>
                <Moon size={18} />
              </button>
              <button onClick={() => handleThemeChange("system")} className={`${theme === "system" ? "text-blue-600" : "text-gray-500 dark:text-gray-300"}`}>
                <Laptop size={18} />
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 dark:text-gray-300 hover:text-blue-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-800 border-t dark:border-gray-700">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    pathname === item.href
                      ? "text-blue-600 bg-blue-50 dark:bg-gray-700"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* Theme toggle buttons */}
              <div className="flex items-center gap-4 px-3 pt-3">
                <button onClick={() => handleThemeChange("light")} className={`${theme === "light" ? "text-blue-600" : "text-gray-500 dark:text-gray-300"}`}>
                  <Sun size={18} />
                </button>
                <button onClick={() => handleThemeChange("dark")} className={`${theme === "dark" ? "text-blue-600" : "text-gray-500 dark:text-gray-300"}`}>
                  <Moon size={18} />
                </button>
                <button onClick={() => handleThemeChange("system")} className={`${theme === "system" ? "text-blue-600" : "text-gray-500 dark:text-gray-300"}`}>
                  <Laptop size={18} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

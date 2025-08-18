"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Sun, Moon, Laptop } from "lucide-react"

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setTheme("light")}
        className={`p-2 rounded-md transition-colors ${
          theme === "light"
            ? "text-blue-600 bg-blue-50 dark:bg-blue-900/20"
            : "text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
        }`}
        aria-label="Light mode"
      >
        <Sun size={18} />
      </button>
      
      <button
        onClick={() => setTheme("dark")}
        className={`p-2 rounded-md transition-colors ${
          theme === "dark"
            ? "text-blue-600 bg-blue-50 dark:bg-blue-900/20"
            : "text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
        }`}
        aria-label="Dark mode"
      >
        <Moon size={18} />
      </button>
      
      <button
        onClick={() => setTheme("system")}
        className={`p-2 rounded-md transition-colors ${
          theme === "system"
            ? "text-blue-600 bg-blue-50 dark:bg-blue-900/20"
            : "text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
        }`}
        aria-label="System mode"
      >
        <Laptop size={18} />
      </button>
    </div>
  )
}
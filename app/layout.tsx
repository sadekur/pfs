import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "John Doe - Full Stack Developer",
    template: "%s | John Doe",
  },
  description:
    "Personal portfolio of John Doe - Full Stack Developer specializing in React, Next.js, and modern web technologies.",
  keywords: ["developer", "portfolio", "react", "nextjs", "web development"],
  authors: [{ name: "John Doe" }],
  creator: "John Doe",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

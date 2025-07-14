import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my latest thoughts on web development, technology, and programming.",
}

const blogPosts = [
  {
    slug: "getting-started-with-nextjs-14",
    title: "Getting Started with Next.js 14: A Complete Guide",
    excerpt:
      "Learn how to build modern web applications with Next.js 14, including the new App Router, Server Components, and more.",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Next.js",
  },
  {
    slug: "mastering-tailwind-css",
    title: "Mastering Tailwind CSS: Tips and Tricks",
    excerpt: "Discover advanced Tailwind CSS techniques to build beautiful and responsive user interfaces efficiently.",
    date: "2024-01-08",
    readTime: "6 min read",
    category: "CSS",
  },
  {
    slug: "react-performance-optimization",
    title: "React Performance Optimization: Best Practices",
    excerpt:
      "Learn essential techniques to optimize your React applications for better performance and user experience.",
    date: "2024-01-01",
    readTime: "10 min read",
    category: "React",
  },
  {
    slug: "typescript-for-beginners",
    title: "TypeScript for Beginners: Why You Should Make the Switch",
    excerpt: "Understanding the benefits of TypeScript and how it can improve your JavaScript development workflow.",
    date: "2023-12-25",
    readTime: "7 min read",
    category: "TypeScript",
  },
  {
    slug: "building-apis-with-nodejs",
    title: "Building RESTful APIs with Node.js and Express",
    excerpt:
      "A comprehensive guide to creating robust and scalable APIs using Node.js, Express, and modern best practices.",
    date: "2023-12-18",
    readTime: "12 min read",
    category: "Node.js",
  },
  {
    slug: "web-accessibility-guide",
    title: "Web Accessibility: Making the Web Inclusive for Everyone",
    excerpt:
      "Learn how to build accessible web applications that work for users with disabilities and improve overall UX.",
    date: "2023-12-11",
    readTime: "9 min read",
    category: "Accessibility",
  },
]

const categories = ["All", "Next.js", "React", "TypeScript", "CSS", "Node.js", "Accessibility"]

export default function BlogPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Thoughts, tutorials, and insights about web development, programming, and the latest technologies I'm
            working with.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button key={category} variant={category === "All" ? "default" : "outline"} size="sm" className="mb-2">
              {category}
            </Button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">{post.category}</span>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                </div>

                <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">{post.title}</h2>

                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>

                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/blog/${post.slug}`}>
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Posts
          </Button>
        </div>
      </div>
    </div>
  )
}

import { Metadata } from "next"
import Link from "next/link"
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react"
import { Button } from "../../../components/ui/button"

const getBlogPost = async (slug) => {
  return {
    title: "Getting Started with Next.js 14: A Complete Guide",
    content: `
      <p>Next.js 14 introduces several exciting features that make building React applications even more powerful and efficient. In this comprehensive guide, we'll explore the key features and how to get started.</p>
      
      <h2>What's New in Next.js 14</h2>
      <p>Next.js 14 brings significant improvements in performance, developer experience, and new features that streamline the development process.</p>
      
      <h3>Server Actions</h3>
      <p>Server Actions allow you to run server-side code directly from your React components, making form handling and data mutations much simpler.</p>
      
      <h3>Improved App Router</h3>
      <p>The App Router continues to evolve with better performance and more intuitive APIs for routing and layout management.</p>
      
      <h2>Getting Started</h2>
      <p>To create a new Next.js 14 project, run the following command:</p>
      
      <pre><code>npx create-next-app@latest my-app</code></pre>
      
      <p>This will set up a new Next.js project with all the latest features and best practices configured out of the box.</p>
      
      <h2>Conclusion</h2>
      <p>Next.js 14 represents a significant step forward in React development, offering improved performance, better developer experience, and powerful new features that make building modern web applications easier than ever.</p>
    `,
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Next.js",
    author: "John Doe",
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = await getBlogPost(slug)

  return {
    title: post.title,
    description: `Read about ${post.title} - ${post.readTime}`,
  }
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params
  const post = await getBlogPost(slug)

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">{post.category}</span>
            <div className="flex items-center text-sm text-gray-500">
              <Calendar className="h-4 w-4 mr-1" />
              {new Date(post.date).toLocaleDateString()}
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="h-4 w-4 mr-1" />
              {post.readTime}
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{post.title}</h1>

          <div className="flex items-center justify-between">
            <p className="text-gray-600">By {post.author}</p>
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>

        {/* Article Footer */}
        <footer className="mt-12 pt-8 border-t">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-600">Written by</p>
              <p className="font-semibold">{post.author}</p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/blog">More Articles</Link>
            </Button>
          </div>
        </footer>
      </div>
    </div>
  )
}

import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink, Calendar } from "lucide-react"
import { Button } from "../../components/ui/button"

export const metadata = {
  title: "Projects",
  description: "Explore my portfolio of web development projects and applications.",
}

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution built with Next.js, featuring user authentication, payment processing, and admin dashboard.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    date: "2024-01-15",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    date: "2023-11-20",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "A responsive weather dashboard that displays current conditions and forecasts with beautiful data visualizations.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Chart.js", "OpenWeather API", "CSS3"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    date: "2023-09-10",
  },
  {
    id: 4,
    title: "Blog Platform",
    description: "A modern blog platform with markdown support, SEO optimization, and content management system.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Next.js", "MDX", "Prisma", "SQLite", "Tailwind CSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    date: "2023-07-05",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "A responsive portfolio website showcasing projects and skills with smooth animations and modern design.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    date: "2023-05-12",
  },
  {
    id: 6,
    title: "Chat Application",
    description: "Real-time chat application with multiple rooms, file sharing, and user presence indicators.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Socket.io", "Express", "MongoDB", "JWT"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    date: "2023-03-18",
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">My Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here's a collection of projects I've worked on, ranging from web applications to mobile apps and everything
            in between.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(project.date).toLocaleDateString()}
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

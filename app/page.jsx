"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Download, Github, ExternalLink } from "lucide-react"
import { Button } from "../components/ui/button"
import sadekur from '../src/public/sadekur-rahman.jpg';
import placeholderImage from '../src/public/placeholder.svg';

export default function HomePage() {

  const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with Next.js and Tailwind CSS.",
    image: placeholderImage,
    tags: ["Next.js", "Tailwind"],
    github: "https://github.com/yourname/portfolio",
    live: "https://yourportfolio.com",
  },
  {
    title: "E-commerce Store",
    description: "A full-stack e-commerce app using React and Node.js.",
    image: placeholderImage,
    tags: ["React", "Node.js"],
    github: "https://github.com/yourname/store",
    live: "https://mystore.com",
  },
  {
    title: "Chat App",
    description: "A real-time chat application using Socket.IO.",
    image: placeholderImage,
    tags: ["Socket.IO", "MongoDB"],
    github: "https://github.com/yourname/chat-app",
    live: "https://chatapp.com",
  },
]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Hi, I'm <span className="text-blue-600 dark:text-blue-400">Sadekur Rahman</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Full Stack Developer passionate about creating amazing web experiences with React, Next.js, and modern
                technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link className="flex items-center" href="/projects">
                    View My Work <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src={sadekur}
                alt="Sadekur Rahman Profile"
                className="w-[400px] h-[400px] rounded-full mx-auto shadow-2xl dark:shadow-gray-800/50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I'm a passionate full-stack developer with 5+ years of experience building scalable web applications. I
              love turning complex problems into simple, beautiful designs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Fast Development</h3>
              <p className="text-gray-600 dark:text-gray-400">Quick turnaround times without compromising on quality or performance.</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Creative Solutions</h3>
              <p className="text-gray-600 dark:text-gray-400">Innovative approaches to solve complex technical challenges.</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-purple-100 dark:bg-purple-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">User Focused</h3>
              <p className="text-gray-600 dark:text-gray-400">Always keeping the end user in mind for the best experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Technologies</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "Tailwind CSS",
              "PostgreSQL",
              "MongoDB",
              "AWS",
              "Docker",
              "Git",
              "Figma",
              "Vercel",
            ].map((skill) => (
              <div key={skill} className="text-center">
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm hover:shadow-md dark:shadow-gray-900/20 transition-shadow">
                  <p className="font-medium text-gray-900 dark:text-white">{skill}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Here are some of my recent projects that I'm proud of.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-900/20 overflow-hidden hover:shadow-xl dark:hover:shadow-gray-900/40 transition-shadow">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button variant="ghost" size="sm" asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link className="flex items-center" href="/projects">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 dark:bg-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Work Together</h2>
          <p className="text-xl text-blue-100 dark:text-blue-200 mb-8 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link className="flex items-center" href="/contact">
              Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
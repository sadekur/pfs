import type { Metadata } from "next"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with me for project collaborations, job opportunities, or just to say hello.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together to
            bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Let's Connect</h2>
            <p className="text-gray-600 mb-8">
              Feel free to reach out through any of the following channels. I typically respond within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-600">john.doe@example.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Location</p>
                  <p className="text-gray-600">San Francisco, CA</p>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Current Availability</h3>
              <p className="text-gray-600">
                I'm currently available for freelance projects and full-time opportunities. My typical response time is
                within 24 hours.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Me a Message</h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" type="text" placeholder="John" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" type="text" placeholder="Doe" className="mt-1" />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" className="mt-1" />
              </div>

              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" type="text" placeholder="Project Collaboration" className="mt-1" />
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project or how I can help you..."
                  rows={6}
                  className="mt-1"
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>

            <p className="text-sm text-gray-500 mt-4">
              By sending this message, you agree to my privacy policy and terms of service.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">What's your typical project timeline?</h3>
              <p className="text-gray-600">
                Project timelines vary depending on scope and complexity. Simple websites typically take 2-4 weeks,
                while complex applications can take 2-6 months.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Do you work with international clients?</h3>
              <p className="text-gray-600">
                Yes! I work with clients worldwide and am comfortable with different time zones and communication
                preferences.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">What technologies do you specialize in?</h3>
              <p className="text-gray-600">
                I specialize in React, Next.js, TypeScript, Node.js, and modern web technologies. I'm always learning
                new tools and frameworks.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Do you provide ongoing maintenance?</h3>
              <p className="text-gray-600">
                Yes, I offer ongoing maintenance and support packages to keep your applications running smoothly and
                up-to-date.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

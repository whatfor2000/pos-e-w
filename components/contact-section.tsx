"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formState)
    setFormState({ name: "", email: "", message: "" })
    alert("Thank you for your message! We will get back to you soon.")
  }

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Get in Touch</h2>
            <p className="text-lg text-gray-300 mb-8">
              Have questions about our product or need help getting started? Our team is here to help you every step of
              the way.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-white mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-white mb-1">Email Us</h3>
                  <p className="text-gray-300">predpa.corn@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-6 w-6 text-white mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-white mb-1">Call Us</h3>
                  <p className="text-gray-300">+66 63 952 7764</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-white mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-white mb-1">Visit Us</h3>
                  <p className="text-gray-300">
                    6/293 Klongsam, Khlong Luang,
                    <br />
                    Pathum Thani 12120 Thailand
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-black rounded-xl shadow-lg p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full bg-gray-800 text-white border-gray-600"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full bg-gray-800 text-white border-gray-600"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    required
                    className="w-full bg-gray-800 text-white border-gray-600 min-h-[150px]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-white text-black hover:bg-gray-200"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

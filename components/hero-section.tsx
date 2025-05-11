import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Video } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Drive Your Store Online
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Transform your store with our all-in-one e-commerce solution. Manage sales, inventory, and customers seamlessly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-lg">
                Get Started
              </Button>
              <Button
                variant="outline"
                className="border-white text-white bg-transparent hover:bg-gray-800 hover:text-white px-8 py-6 text-lg"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gray-700 rounded-2xl blur-xl opacity-30 transform rotate-3"></div>
            <div className="relative bg-black rounded-xl shadow-xl overflow-hidden border border-gray-700">
              <video
                src="/hero-showcase.mp4"
                autoPlay
                loop
                muted
                controls
                width="1600"
                height="1200"
                className="w-full h-auto"
              >
              </video>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gray-700 rounded-full blur-xl opacity-50"></div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-black"></div>
    </section>
  )
}

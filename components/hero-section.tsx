import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 to-white z-0"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              Elevate Your Business Presence
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Create seamless experiences for your customers with our high-performance, beautifully designed platform.
              Stand out with clarity and sophistication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:from-violet-700 hover:to-indigo-700 px-8 py-6 text-lg">
                Get Started
              </Button>
              <Button
                variant="outline"
                className="border-violet-600 text-violet-600 hover:bg-violet-50 px-8 py-6 text-lg"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-violet-200 to-indigo-200 rounded-2xl blur-xl opacity-30 transform rotate-3"></div>
            <div className="relative bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Business Dashboard"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-full blur-xl opacity-50"></div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white"></div>
    </section>
  )
}

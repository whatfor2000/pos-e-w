import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function AboutSection() {
  const benefits = [
    "Increase customer satisfaction with seamless experiences",
    "Boost sales with an intuitive, high-performance platform",
    "Save time with automated workflows and processes",
    "Scale your business with a solution that grows with you",
  ]

  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-white rounded-2xl blur-xl opacity-10 transform -rotate-3"></div>
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="About Our Business"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About Our Product Solution</h2>
              <p className="text-lg text-gray-400 mb-6">
                Our solution is designed to empower your business with the tools you need to succeed in the digital age.
                From inventory management to customer engagement, we provide a comprehensive platform that meets all
                your e-commerce needs.
              </p>
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-white mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-400">{benefit}</p>
                  </div>
                ))}
              </div>
              <Button className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-lg">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

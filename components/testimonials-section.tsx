import Image from "next/image"
import { Star } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      content:
        "This platform has completely transformed how we manage our business. The seamless interface and powerful features have helped us increase our revenue by 30% in just three months.",
      author: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      content:
        "I've tried many business solutions, but this one stands out for its clean design and exceptional performance. Our customers love the experience, and our team finds it incredibly easy to use.",
      author: "Michael Chen",
      position: "Operations Director, Retail Plus",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      content:
        "The exotic alignment and seamless integration with our existing systems made the transition painless. The support team is responsive and helpful. Highly recommended!",
      author: "Jessica Williams",
      position: "CTO, Global Solutions",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 4,
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it. Here's what businesses like yours have experienced with our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 flex-grow">{testimonial.content}</p>
              <div className="flex items-center">
                <div className="mr-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

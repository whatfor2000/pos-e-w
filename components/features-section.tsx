import { Zap, Shield, BarChart4, Smartphone, Users, Clock } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-violet-600" />,
      title: "Lightning Fast",
      description: "Optimized for speed and performance, ensuring your customers have a seamless experience.",
    },
    {
      icon: <Shield className="h-8 w-8 text-violet-600" />,
      title: "Secure Transactions",
      description: "Enterprise-grade security for all your business transactions and customer data.",
    },
    {
      icon: <BarChart4 className="h-8 w-8 text-violet-600" />,
      title: "Detailed Analytics",
      description: "Gain insights into your business with comprehensive analytics and reporting.",
    },
    {
      icon: <Smartphone className="h-8 w-8 text-violet-600" />,
      title: "Mobile Optimized",
      description: "Fully responsive design that works flawlessly on all devices and screen sizes.",
    },
    {
      icon: <Users className="h-8 w-8 text-violet-600" />,
      title: "Team Collaboration",
      description: "Seamless collaboration tools for your entire team to work efficiently.",
    },
    {
      icon: <Clock className="h-8 w-8 text-violet-600" />,
      title: "24/7 Support",
      description: "Round-the-clock support to ensure your business never misses a beat.",
    },
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Powerful Features for Your Business</h2>
          <p className="text-lg text-gray-600">
            Everything you need to create a seamless, high-quality experience for your customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-5 inline-flex items-center justify-center w-16 h-16 rounded-lg bg-violet-50">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Zap, Shield, BarChart4, Smartphone, Users, Clock } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-white" />,
      title: "Lightning Fast",
      description: "Optimized for speed and performance, ensuring your customers have a seamless experience.",
    },
    {
      icon: <Shield className="h-8 w-8 text-white" />,
      title: "Secure Transactions",
      description: "Enterprise-grade security for all your store transactions and customer data.",
    },
    {
      icon: <BarChart4 className="h-8 w-8 text-white" />,
      title: "Detailed Analytics",
      description: "Gain insights into your store with comprehensive analytics and reporting.",
    },
    {
      icon: <Smartphone className="h-8 w-8 text-white" />,
      title: "Mobile/Tablet Optimized",
      description: "Fully responsive design that works flawlessly on all devices and screen sizes.",
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: "Team Collaboration",
      description: "Seamless collaboration tools for your entire team to work efficiently.",
    },
    {
      icon: <Clock className="h-8 w-8 text-white" />,
      title: "24/7 Support",
      description: "Round-the-clock support to ensure your store never misses a beat.",
    },
  ]

  return (
    <section id="features" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Powerful Features for Your Store</h2>
          <p className="text-lg text-gray-300">
            Everything you need to create a seamless, high-quality experience for your customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-xl border border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-5 inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gray-700">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "$49",
      description: "Perfect for small businesses just getting started",
      features: [
        "Up to 1,000 transactions/month",
        "Basic analytics",
        "2 team members",
        "Email support",
        "Mobile app access",
      ],
      highlighted: false,
      buttonText: "Get Started",
    },
    {
      name: "Professional",
      price: "$99",
      description: "Ideal for growing businesses with more needs",
      features: [
        "Up to 10,000 transactions/month",
        "Advanced analytics",
        "10 team members",
        "Priority email & chat support",
        "Mobile app access",
        "Custom integrations",
      ],
      highlighted: true,
      buttonText: "Get Started",
    },
    {
      name: "Enterprise",
      price: "$249",
      description: "For large businesses with complex requirements",
      features: [
        "Unlimited transactions",
        "Enterprise analytics",
        "Unlimited team members",
        "24/7 dedicated support",
        "Mobile app access",
        "Custom integrations",
        "Dedicated account manager",
      ],
      highlighted: false,
      buttonText: "Contact Sales",
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-300">
            Choose the plan that works best for your business. No hidden fees or long-term contracts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-gray-800 rounded-xl overflow-hidden ${
                plan.highlighted
                  ? "ring-2 ring-white shadow-lg transform md:-translate-y-4"
                  : "border border-gray-700 shadow-sm"
              }`}
            >
              {plan.highlighted && (
                <div className="bg-white text-black text-center py-2 font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-300 ml-2">/month</span>
                </div>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                <Button
                  className={`w-full ${
                    plan.highlighted
                      ? "bg-white text-black hover:bg-gray-200"
                      : "bg-gray-800 border border-white text-white hover:bg-gray-700"
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </div>
              <div className="border-t border-gray-700 p-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-white mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Pricing() {
  const plans = [
    {
      name: "Silver",
      price: "$29",
      period: "/month",
      description: "Perfect for small businesses starting their journey",
      features: [
        "Up to 100 customer inquiries/month",
        "Basic response automation",
        "Email & chat support",
        "Weekly analytics reports",
        "Standard onboarding",
      ],
      cta: "Start with Silver",
      highlighted: false,
    },
    {
      name: "Gold",
      price: "$79",
      period: "/month",
      description: "Ideal for growing businesses with moderate volume",
      features: [
        "Up to 1,000 customer inquiries/month",
        "Advanced response automation",
        "Multi-channel support",
        "Real-time analytics dashboard",
        "Priority support",
        "Custom templates",
        "Sentiment analysis",
      ],
      cta: "Go with Gold",
      highlighted: true,
    },
    {
      name: "Diamond",
      price: "$199",
      period: "/month",
      description: "Enterprise solution for high-volume operations",
      features: [
        "Unlimited customer inquiries",
        "Premium AI-powered responses",
        "All channels included",
        "Advanced analytics & reporting",
        "24/7 dedicated support",
        "Custom integrations",
        "Advanced sentiment analysis",
        "Team collaboration tools",
        "API access",
      ],
      cta: "Enterprise Growth",
      highlighted: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="w-full py-24 bg-white dark:bg-neutral-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="section-title">Simple, Transparent Pricing</h2>
          <p className="section-subtitle">
            Choose the plan that fits your business needs
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl transition-all duration-300 ${
                plan.highlighted
                  ? "md:scale-105 bg-gradient-to-br from-primary-50 to-primary-50 dark:from-primary-950/50 dark:to-primary-950/50 border-2 border-primary-500 dark:border-primary-400 shadow-2xl"
                  : "bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 hover:border-primary-300 dark:hover:border-primary-700 hover:shadow-xl"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary-600 to-primary-600 dark:from-primary-500 dark:to-primary-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-2">
                  {plan.name}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-8">
                  <span className="text-5xl font-bold bg-gradient-to-r from-primary-600 to-primary-600 dark:from-primary-400 dark:to-primary-400 bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  <span className="text-neutral-600 dark:text-neutral-400 ml-2">
                    {plan.period}
                  </span>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full mb-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.highlighted ? "btn-primary" : "btn-secondary"
                  }`}
                >
                  {plan.cta}
                </button>

                {/* Features List */}
                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="mt-16 text-center">
          <p className="text-neutral-600 dark:text-neutral-400 mb-4">
            All plans include 14-day free trial. No credit card required.
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            Need a custom solution?{" "}
            <a
              href="#contact"
              className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold"
            >
              Contact our team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

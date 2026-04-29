export default function Pricing() {
  const plans = [
    {
      name: "BASIC",
      price: "$9.99",
      description: "Perfect for small businesses starting their journey",
      features: [
        { text: "Lorem ipsum dolor sit amet", included: true },
        { text: "Consectetur adipiscing elit", included: true },
        { text: "Sed diam nonummy", included: true },
        { text: "Et eos modo ad posidonium", included: false },
        { text: "Eum cu tantas legere", included: false },
        { text: "Eius scripta intellegat", included: false },
      ],
      gradient: "from-cyan-400 to-cyan-500",
      buttonColor: "bg-cyan-400 hover:bg-cyan-500",
    },
    {
      name: "BUSINESS",
      price: "$21.99",
      description: "Ideal for growing businesses with moderate volume",
      features: [
        { text: "Lorem ipsum dolor sit amet", included: true },
        { text: "Consectetur adipiscing elit", included: true },
        { text: "Sed diam nonummy", included: true },
        { text: "Et eos modo ad posidonium", included: true },
        { text: "Eum cu tantas legere", included: false },
        { text: "Eius scripta intellegat", included: false },
      ],
      gradient: "from-purple-400 to-purple-500",
      buttonColor: "bg-purple-400 hover:bg-purple-500",
    },
    {
      name: "PREMIUM",
      price: "$41.99",
      description: "Enterprise solution for high-volume operations",
      features: [
        { text: "Lorem ipsum dolor sit amet", included: true },
        { text: "Consectetur adipiscing elit", included: true },
        { text: "Sed diam nonummy", included: true },
        { text: "Et eos modo ad posidonium", included: true },
        { text: "Eum cu tantas legere", included: true },
        { text: "Eius scripta intellegat", included: true },
      ],
      gradient: "from-pink-400 to-pink-500",
      buttonColor: "bg-pink-400 hover:bg-pink-500",
    },
  ];

  return (
    <section
      id="pricing"
      className="w-full py-24 bg-gradient-to-b from-neutral-100 to-white dark:from-neutral-950 dark:to-neutral-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="section-title">PRICING TABLE DESIGN</h2>
          <p className="section-subtitle">
            Choose the plan that fits your business needs
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="relative bg-white dark:bg-neutral-800/50 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
            >
              {/* Gradient Header */}
              <div
                className={`h-32 bg-gradient-to-br ${plan.gradient} relative`}
              >
                <div className="absolute top-4 left-6">
                  <h3 className="text-white text-lg font-bold tracking-wider">
                    {plan.name}
                  </h3>
                </div>
                <div className="absolute -bottom-8 left-6 bg-white dark:bg-neutral-800 rounded-2xl px-6 py-3 shadow-lg">
                  <span className="text-3xl font-bold text-neutral-800 dark:text-neutral-100">
                    {plan.price}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="pt-16 pb-8 px-6">
                {/* Features List */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      {feature.included ? (
                        <svg
                          className="w-5 h-5 text-green-500 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-5 h-5 text-red-500 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                      <span
                        className={`text-sm ${feature.included ? "text-neutral-700 dark:text-neutral-300" : "text-neutral-400 dark:text-neutral-500 line-through"}`}
                      >
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 rounded-full text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl ${plan.buttonColor}`}
                >
                  Get Started
                </button>
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

export default function Features() {
  const features = [
    {
      title: "Smart Response System",
      description:
        "Intelligently respond to all customer feedback. When negative feedback arrives, we respectfully apologize, understand concerns, and request opportunities to improve.",
      icon: "💬",
      gradient: "from-primary-500 to-purple-500",
    },
    {
      title: "Reputation Building",
      description:
        "Automatically encourage satisfied customers to share their positive experiences. Build authentic reviews that reflect your commitment to excellence.",
      icon: "⭐",
      gradient: "from-amber-500 to-orange-500",
    },
    {
      title: "24/7 Availability",
      description:
        "Your business never sleeps. Our automation ensures every customer inquiry is acknowledged and addressed promptly, even outside business hours.",
      icon: "🌙",
      gradient: "from-primary-500 to-blue-500",
    },
    {
      title: "Multi-Channel Support",
      description:
        "Manage inquiries across all platforms from a single dashboard. Unify your communication strategy across email, chat, and social media.",
      icon: "📱",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      title: "Analytics & Insights",
      description:
        "Comprehensive analytics to understand customer sentiment, track response rates, and identify opportunities for business growth.",
      icon: "📊",
      gradient: "from-primary-500 to-teal-500",
    },
    {
      title: "Scalable Infrastructure",
      description:
        "Built for growth. Our infrastructure scales seamlessly with your business, handling increased volume without performance degradation.",
      icon: "🚀",
      gradient: "from-cyan-500 to-sky-500",
    },
  ];

  return (
    <section
      id="features"
      className="w-full py-24 bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="section-title">Powerful Features</h2>
          <p className="section-subtitle">
            Everything you need to enhance your business profile and scale
            efficiently
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="card group">
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 mb-3">
                {feature.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button className="btn-accent">Explore All Features</button>
        </div>
      </div>
    </section>
  );
}

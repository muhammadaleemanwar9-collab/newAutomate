export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-neutral-50 via-primary-50/30 to-white dark:from-neutral-950 dark:via-primary-950/20 dark:to-neutral-950 transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary-400/20 dark:bg-primary-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-32 left-20 w-72 h-72 bg-primary-400/20 dark:bg-primary-600/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-4 py-2 bg-primary-100 dark:bg-primary-950/50 border border-primary-300 dark:border-primary-700 rounded-full text-primary-700 dark:text-primary-300 text-sm font-medium">
                  ✨ Smart Business Solutions
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-neutral-900 dark:text-neutral-50 leading-tight">
                Elevate Your
                <span className="block bg-gradient-to-r from-primary-600 via-primary-600 to-purple-600 dark:from-primary-400 dark:via-primary-400 dark:to-purple-400 bg-clip-text text-transparent">
                  Business Profile
                </span>
              </h1>
              <p className="text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl">
                Transform customer interactions with intelligent automation.
                Build stronger relationships by handling feedback thoughtfully
                and converting inquiries into lasting business growth.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="btn-primary flex items-center justify-center gap-2">
                Get Started Now
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
              <button className="btn-secondary flex items-center justify-center gap-2">
                Watch Demo
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>

            {/* Trust Signals */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-neutral-200 dark:border-neutral-800">
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-primary-600 dark:from-primary-400 dark:to-primary-400 bg-clip-text text-transparent">
                  500+
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-1">
                  Active Businesses
                </p>
              </div>
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-primary-600 dark:from-primary-400 dark:to-primary-400 bg-clip-text text-transparent">
                  98%
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-1">
                  Satisfaction Rate
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:flex items-center justify-center animate-slide-up">
            <div className="relative w-full h-[500px] bg-gradient-to-br from-primary-100 to-primary-100 dark:from-neutral-900 dark:to-neutral-800 rounded-3xl border border-neutral-200 dark:border-neutral-700 overflow-hidden flex items-center justify-center shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent dark:from-primary-500/5"></div>
              <div className="relative text-center p-8">
                <div className="inline-flex flex-col gap-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary-600 to-primary-600 dark:from-primary-500 dark:to-primary-500 rounded-2xl mx-auto flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-12 h-12 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                    </svg>
                  </div>
                  <p className="text-neutral-700 dark:text-neutral-300 font-medium text-lg">
                    AI-Powered Dashboard
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

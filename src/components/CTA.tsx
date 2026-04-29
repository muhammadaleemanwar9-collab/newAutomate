"use client";

import { useState } from "react";

export default function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", company: "", message: "" });
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="w-full py-24 bg-gradient-to-b from-white via-primary-50/30 to-white dark:from-neutral-950 dark:via-primary-950/10 dark:to-neutral-950 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title">Ready to Transform Your Business?</h2>
          <p className="section-subtitle">
            Get started today with a personalized demo tailored to your needs
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-8 md:p-12 shadow-xl">
          {submitted ? (
            <div className="text-center py-8 animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 dark:bg-emerald-950/50 rounded-full mb-4">
                <svg
                  className="w-8 h-8 text-emerald-600 dark:text-emerald-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-2">
                Thank you!
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                We&apos;ve received your message and will get back to you within
                24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-neutral-900 dark:text-neutral-50 font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-700 rounded-xl text-neutral-900 dark:text-neutral-50 placeholder-neutral-500 dark:placeholder-neutral-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-neutral-900 dark:text-neutral-50 font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-700 rounded-xl text-neutral-900 dark:text-neutral-50 placeholder-neutral-500 dark:placeholder-neutral-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-neutral-900 dark:text-neutral-50 font-medium mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-700 rounded-xl text-neutral-900 dark:text-neutral-50 placeholder-neutral-500 dark:placeholder-neutral-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label className="block text-neutral-900 dark:text-neutral-50 font-medium mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-700 rounded-xl text-neutral-900 dark:text-neutral-50 placeholder-neutral-500 dark:placeholder-neutral-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 resize-none transition-all"
                  placeholder="Tell us about your needs..."
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>

              <p className="text-center text-neutral-600 dark:text-neutral-400 text-sm">
                We respect your privacy. We&apos;ll never share your
                information.
              </p>
            </form>
          )}
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
            <div className="text-3xl mb-3">📞</div>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-1">
              Have questions?
            </p>
            <p className="text-neutral-900 dark:text-neutral-50 font-semibold">
              support@automate.io
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
            <div className="text-3xl mb-3">⏱️</div>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-1">
              Response time
            </p>
            <p className="text-neutral-900 dark:text-neutral-50 font-semibold">
              Within 24 hours
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
            <div className="text-3xl mb-3">🌍</div>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-1">
              Available worldwide
            </p>
            <p className="text-neutral-900 dark:text-neutral-50 font-semibold">
              24/7 Support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

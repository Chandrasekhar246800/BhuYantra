import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Have questions about BhuYantra? We&apos;d love to hear from you. Send us a message 
            and we&apos;ll respond as soon as possible.
          </p>
        </div>

        {/* Contact Form & Contact Information */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Form - Takes up 2 columns */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Send us a Message
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                    Organization (Optional)
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    placeholder="Your organization or farm name"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your farming needs and how we can help..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold px-8 py-4 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information & Social Media - Takes up 1 column */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-6">Contact Details</h4>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-xl mt-1">📧</span>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <a href="mailto:contact@bhuyantra.com" className="text-green-600 hover:text-green-700 font-medium text-sm">
                      contact@bhuyantra.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-xl mt-1">📞</span>
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <a href="tel:+919876543210" className="text-green-600 hover:text-green-700 font-medium text-sm">
                      +91 9876543210
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-xl mt-1">💬</span>
                  <div>
                    <p className="text-sm text-gray-600">WhatsApp</p>
                    <a href="https://wa.me/919876543210" className="text-green-600 hover:text-green-700 font-medium text-sm">
                      WhatsApp Support
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-xl mt-1">🌐</span>
                  <div>
                    <p className="text-sm text-gray-600">Website</p>
                    <a href="https://bhuyantra.vercel.app" className="text-green-600 hover:text-green-700 font-medium text-sm">
                      bhuyantra.vercel.app
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-6">Follow Us</h4>
              
              <div className="space-y-3">
                <a href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group">
                  <span className="text-lg">💼</span>
                  <div>
                    <p className="text-gray-900 font-medium group-hover:text-green-600 text-sm">LinkedIn</p>
                    <p className="text-xs text-gray-600">Connect professionally</p>
                  </div>
                </a>
                
                <a href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group">
                  <span className="text-lg">🐦</span>
                  <div>
                    <p className="text-gray-900 font-medium group-hover:text-green-600 text-sm">Twitter</p>
                    <p className="text-xs text-gray-600">Latest updates</p>
                  </div>
                </a>
                
                <a href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group">
                  <span className="text-lg">🔧</span>
                  <div>
                    <p className="text-gray-900 font-medium group-hover:text-green-600 text-sm">GitHub</p>
                    <p className="text-xs text-gray-600">Open source code</p>
                  </div>
                </a>
                
                <a href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group">
                  <span className="text-lg">📺</span>
                  <div>
                    <p className="text-gray-900 font-medium group-hover:text-green-600 text-sm">YouTube</p>
                    <p className="text-xs text-gray-600">Video tutorials</p>
                  </div>
                </a>
                
                <a 
                  href="/api/download" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <span className="text-lg">📄</span>
                  <div>
                    <p className="text-gray-900 font-medium group-hover:text-green-600 text-sm">Download PDF</p>
                    <p className="text-xs text-gray-600">Project overview</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Transform Your Agriculture?
          </h3>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of farmers who are already using BhuYantra to increase yields, 
            reduce costs, and build sustainable farming practices. Get started today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              Schedule a Demo
            </button>
            <button className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-green-600 transition-all duration-200">
              Contact Sales
            </button>
            <a 
              href="/api/download" 
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-green-600 transition-all duration-200 inline-flex items-center justify-center gap-2"
            >
              📄 Download Overview
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
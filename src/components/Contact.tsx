'use client'

import React, { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({
    type: null,
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus({
          type: 'success',
          message: data.message || 'Thank you! We\'ll get back to you within 24-48 hours.'
        })
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          organization: '',
          message: ''
        })
      } else {
        setStatus({
          type: 'error',
          message: data.error || 'Something went wrong. Please try again.'
        })
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      })
    } finally {
      setLoading(false)
    }
  }
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Have questions about BhuYanthra? We&apos;d love to hear from you. Send us a message 
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
              
              {/* Status Messages */}
              {status.type && (
                <div className={`mb-6 p-4 rounded-lg ${
                  status.type === 'success' 
                    ? 'bg-green-100 border border-green-400 text-green-700' 
                    : 'bg-red-100 border border-red-400 text-red-700'
                }`}>
                  <p className="font-medium">{status.message}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
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
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    placeholder="Your organization or farm name"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your farming needs and how we can help..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold px-8 py-4 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
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
                    <a href="mailto:bhuyantra2468@gmail.com" className="text-green-600 hover:text-green-700 font-medium text-sm">
                      bhuyantra2468@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-xl mt-1">📞</span>
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <a href="tel:+919876543210" className="text-green-600 hover:text-green-700 font-medium text-sm">
                      +91 7416559286
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-xl mt-1">💬</span>
                  <div>
                    <p className="text-sm text-gray-600">WhatsApp</p>
                    <a href="https://wa.me/917416559286" className="text-green-600 hover:text-green-700 font-medium text-sm">
                      +91 7416559286
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
                <a href="https://www.linkedin.com/in/chandra-sekhar-54040b232/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group">
                  <span className="text-lg">💼</span>
                  <div>
                    <p className="text-gray-900 font-medium group-hover:text-green-600 text-sm">LinkedIn</p>
                    <p className="text-xs text-gray-600">Connect professionally</p>
                  </div>
                </a>
                
               
                
                <a href="https://github.com/Chandrasekhar246800" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group">
                  <span className="text-lg">🔧</span>
                  <div>
                    <p className="text-gray-900 font-medium group-hover:text-green-600 text-sm">GitHub</p>
                    <p className="text-xs text-gray-600">Open source code</p>
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
            Join thousands of farmers who are already using BhuYanthra to increase yields, 
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
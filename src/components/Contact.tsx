import React from 'react'

export default function Contact() {
  const teamMembers = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Lead Agricultural Scientist",
      specialization: "Remote Sensing & Crop Monitoring",
      experience: "15+ years in agricultural research",
      education: "PhD in Agricultural Engineering, IIT Delhi",
      email: "rajesh@bhuyantra.com",
      avatar: "👨‍🔬"
    },
    {
      name: "Priya Sharma",
      role: "AI/ML Engineer",
      specialization: "Machine Learning & Computer Vision",
      experience: "10+ years in AI development",
      education: "M.Tech in Computer Science, IISc Bangalore",
      email: "priya@bhuyantra.com",
      avatar: "👩‍💻"
    },
    {
      name: "Amit Patel",
      role: "Full-Stack Developer",
      specialization: "Web & Mobile App Development",
      experience: "8+ years in software development",
      education: "B.Tech in Information Technology, NIT Surat",
      email: "amit@bhuyantra.com",
      avatar: "👨‍💻"
    },
    {
      name: "Dr. Sunita Reddy",
      role: "Agricultural Advisor",
      specialization: "Sustainable Farming Practices",
      experience: "20+ years in extension services",
      education: "PhD in Agronomy, University of Agricultural Sciences",
      email: "sunita@bhuyantra.com",
      avatar: "👩‍🌾"
    }
  ]

  const supportChannels = [
    {
      channel: "Technical Support",
      description: "Get help with platform usage, troubleshooting, and technical issues",
      contact: "support@bhuyantra.com",
      availability: "24/7",
      responseTime: "2-4 hours",
      icon: "🛠️"
    },
    {
      channel: "Agricultural Consultation",
      description: "Expert advice on crop monitoring, farming practices, and agricultural queries",
      contact: "experts@bhuyantra.com",
      availability: "Mon-Sat, 9 AM - 6 PM",
      responseTime: "4-8 hours",
      icon: "🌾"
    },
    {
      channel: "Partnership Inquiries",
      description: "Business partnerships, collaborations, and institutional tie-ups",
      contact: "partnerships@bhuyantra.com",
      availability: "Business Hours",
      responseTime: "1-2 business days",
      icon: "🤝"
    },
    {
      channel: "WhatsApp Support",
      description: "Quick support and notifications through WhatsApp messaging",
      contact: "+91 9876543210",
      availability: "24/7 (Automated)",
      responseTime: "Instant",
      icon: "📱"
    }
  ]

  const researchPartners = [
    "Indian Agricultural Research Institute (IARI)",
    "International Rice Research Institute (IRRI)",
    "Indian Institute of Science (IISc)",
    "National Remote Sensing Centre (NRSC)",
    "Agricultural Universities Network",
    "CGIAR Research Centers"
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Contact & Team Information
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Get in touch with the BhuYantra team for support, partnerships, or to learn more 
            about how our agricultural technology can transform your farming operations.
          </p>
        </div>

        {/* 1st - Core Team */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Meet Our Core Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 text-center hover:shadow-lg transition-shadow duration-200"
              >
                <div className="text-6xl mb-4">{member.avatar}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {member.name}
                </h4>
                <div className="text-blue-600 font-semibold mb-2">
                  {member.role}
                </div>
                <div className="text-sm text-gray-600 mb-3">
                  {member.specialization}
                </div>
                <div className="text-xs text-gray-500 mb-2">
                  {member.experience}
                </div>
                <div className="text-xs text-gray-500 mb-4">
                  {member.education}
                </div>
                <a
                  href={`mailto:${member.email}`}
                  className="text-blue-600 hover:underline text-sm"
                >
                  {member.email}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* 2nd - Support Channels */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Support & Assistance
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supportChannels.map((channel, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{channel.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {channel.channel}
                    </h4>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {channel.description}
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Contact:</span>
                        <span className="text-blue-600 font-medium">{channel.contact}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Available:</span>
                        <span className="text-gray-700">{channel.availability}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Response Time:</span>
                        <span className="text-green-600 font-medium">{channel.responseTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3rd - Research Partners */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Research & Academic Partners
          </h3>
          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {researchPartners.map((partner, index) => (
                <div
                  key={index}
                  className="text-sm text-gray-600 bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors duration-200 text-center"
                >
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4th - Contact Form & Social Media */}
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
                    <a href="https://bhuyantra.com" className="text-green-600 hover:text-green-700 font-medium text-sm">
                      bhuyantra.com
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
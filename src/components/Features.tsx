'use client'

import { useState } from 'react'

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      id: 1,
      title: "Real-time Crop Health Monitoring",
      description: "Monitor crop health using satellite-based NDVI and NDWI analysis with automated alerts for anomalies.",
      icon: "🛰️",
      details: [
        "15-day satellite imagery updates",
        "NDVI/NDWI index calculations",
        "Automated anomaly detection",
        "Historical trend analysis"
      ],
      image: "satellite-monitoring.jpg"
    },
    {
      id: 2,
      title: "Weather Integration & Forecasting",
      description: "Localized weather forecasts with agricultural recommendations based on upcoming conditions.",
      icon: "🌤️",
      details: [
        "7-day weather forecasts",
        "Rainfall and temperature alerts",
        "Frost and extreme weather warnings",
        "Irrigation timing recommendations"
      ],
      image: "weather-forecast.jpg"
    },
    {
      id: 3,
      title: "Pest & Disease Early Warning",
      description: "AI-powered pest and disease detection with preventive measures and treatment recommendations.",
      icon: "🐛",
      details: [
        "Early pest detection algorithms",
        "Disease probability mapping",
        "Treatment recommendations",
        "Preventive care schedules"
      ],
      image: "pest-detection.jpg"
    },
    {
      id: 4,
      title: "Multilingual Voice Interface",
      description: "Voice-based interaction in local languages with speech recognition and text-to-speech capabilities.",
      icon: "🗣️",
      details: [
        "Hindi, English, and regional languages",
        "Voice commands and queries",
        "Audio notifications and alerts",
        "Accessibility for illiterate farmers"
      ],
      image: "voice-interface.jpg"
    },
    {
      id: 5,
      title: "WhatsApp & SMS Integration",
      description: "Seamless communication through popular messaging platforms with automated updates and support.",
      icon: "📱",
      details: [
        "WhatsApp bot integration",
        "SMS notifications and alerts",
        "Image sharing for diagnosis",
        "Two-way communication support"
      ],
      image: "messaging-integration.jpg"
    },
    {
      id: 6,
      title: "Yield Prediction & Planning",
      description: "AI-based yield forecasting to help farmers plan harvesting, storage, and marketing strategies.",
      icon: "📈",
      details: [
        "Harvest time optimization",
        "Yield quantity predictions",
        "Market timing recommendations",
        "Storage planning assistance"
      ],
      image: "yield-prediction.jpg"
    },
    {
      id: 7,
      title: "Water Management System",
      description: "Smart irrigation recommendations based on soil moisture, weather, and crop water requirements.",
      icon: "💧",
      details: [
        "Soil moisture monitoring",
        "Irrigation scheduling",
        "Water usage optimization",
        "Drought stress alerts"
      ],
      image: "water-management.jpg"
    },
    {
      id: 8,
      title: "Market Price Integration",
      description: "Real-time market prices and trends to help farmers make informed selling decisions.",
      icon: "💰",
      details: [
        "Current market rates",
        "Price trend analysis",
        "Best selling time recommendations",
        "Nearby market information"
      ],
      image: "market-prices.jpg"
    },
    {
      id: 9,
      title: "Community & Expert Support",
      description: "Connect with agricultural experts and fellow farmers for knowledge sharing and support.",
      icon: "👥",
      details: [
        "Expert consultation booking",
        "Farmer community forums",
        "Knowledge sharing platform",
        "Peer-to-peer learning"
      ],
      image: "community-support.jpg"
    }
  ]

  const categories = [
    {
      name: "Monitoring & Analysis",
      features: [1, 2, 3],
      color: "green",
      icon: "📊"
    },
    {
      name: "Communication & Support",
      features: [4, 5, 9],
      color: "blue",
      icon: "💬"
    },
    {
      name: "Planning & Optimization",
      features: [6, 7, 8],
      color: "purple",
      icon: "🎯"
    }
  ]

  const getFeaturesByCategory = (categoryFeatures: number[]) => {
    return features.filter(feature => categoryFeatures.includes(feature.id))
  }

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Features
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            BhuYantra offers a complete suite of features designed to address every aspect 
            of modern crop monitoring and farm management, from satellite analysis to 
            community support.
          </p>
        </div>

        {/* Feature Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${
                category.color === 'green' ? 'from-green-50 to-emerald-50 border-green-200' :
                category.color === 'blue' ? 'from-blue-50 to-sky-50 border-blue-200' :
                'from-purple-50 to-violet-50 border-purple-200'
              } border rounded-2xl p-8 hover:shadow-lg transition-all duration-300`}
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {category.name}
                </h3>
                <div className="space-y-3">
                  {getFeaturesByCategory(category.features).map((feature, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-lg p-3 shadow-sm border border-gray-100"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">{feature.icon}</span>
                        <span className="text-sm font-medium text-gray-800">
                          {feature.title}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Showcase */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Feature Deep Dive
          </h3>
          
          {/* Feature Navigation */}
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-12">
            {features.map((feature, index) => (
              <button
                key={index}
                onClick={() => setActiveFeature(index)}
                className={`p-4 rounded-xl text-center transition-all duration-200 ${
                  activeFeature === index
                    ? 'bg-blue-500 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                }`}
              >
                <div className="text-2xl mb-2">{feature.icon}</div>
                <div className="text-xs font-medium leading-tight">
                  {feature.title.split(' ').slice(0, 2).join(' ')}
                </div>
              </button>
            ))}
          </div>

          {/* Active Feature Display */}
          <div className="bg-white rounded-xl p-8 border border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="text-5xl">{features[activeFeature].icon}</div>
                  <div>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-2">
                      Feature #{features[activeFeature].id}
                    </span>
                    <h4 className="text-2xl font-bold text-gray-900">
                      {features[activeFeature].title}
                    </h4>
                  </div>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {features[activeFeature].description}
                </p>
                <div className="space-y-4">
                  <h5 className="text-lg font-semibold text-gray-900">
                    Key Capabilities:
                  </h5>
                  <ul className="space-y-3">
                    {features[activeFeature].details.map((detail, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                          <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-100 to-blue-100 rounded-xl p-8 text-center">
                <div className="text-8xl mb-6">{features[activeFeature].icon}</div>
                <div className="text-lg font-medium text-gray-800 mb-4">
                  Interactive Feature Demo
                </div>
                <div className="text-gray-600 text-sm">
                  Experience {features[activeFeature].title.toLowerCase()} in action
                </div>
                <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-200">
                  Try Feature
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "9", label: "Core Features", icon: "⚡" },
            { number: "3", label: "Feature Categories", icon: "📂" },
            { number: "15+", label: "Integration Points", icon: "🔗" },
            { number: "24/7", label: "Availability", icon: "🕒" }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow duration-200">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
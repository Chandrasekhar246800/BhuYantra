export default function Solution() {
  const keyFeatures = [
    {
      title: "Real-time Crop Monitoring",
      description: "Satellite-based NDVI and NDWI analysis for continuous crop health assessment",
      icon: "🛰️",
      details: ["Live vegetation indices", "Water stress detection", "Growth pattern tracking"]
    },
    {
      title: "Multilingual Support",
      description: "Native language interface in Hindi, English, and regional languages",
      icon: "🌐",
      details: ["Voice-based inputs", "Local language alerts", "Cultural adaptation"]
    },
    {
      title: "Smart Notifications",
      description: "Proactive alerts for irrigation, pest control, and optimal harvest timing",
      icon: "📱",
      details: ["WhatsApp integration", "SMS alerts", "Voice calls"]
    },
    {
      title: "Weather Integration",
      description: "Localized weather forecasts and climate-based recommendations",
      icon: "🌤️",
      details: ["7-day forecasts", "Rainfall predictions", "Temperature alerts"]
    }
  ]

  const stakeholderBenefits = [
    {
      stakeholder: "Farmers",
      benefits: [
        "Increase crop yields by 15-25% through timely interventions",
        "Reduce water usage by 20-30% with precision irrigation",
        "Early pest and disease detection preventing major losses",
        "Simplified access to agricultural guidance in local language"
      ],
      icon: "👨‍🌾",
      color: "green"
    },
    {
      stakeholder: "Agricultural Officers",
      benefits: [
        "Monitor multiple farms simultaneously from a single dashboard",
        "Data-driven insights for better farmer advisory services",
        "Automated reporting and documentation capabilities",
        "Enhanced reach and impact measurement"
      ],
      icon: "👩‍💼",
      color: "blue"
    },
    {
      stakeholder: "Policymakers",
      benefits: [
        "Regional crop health monitoring and trend analysis",
        "Evidence-based agricultural policy formulation",
        "Resource allocation optimization across districts",
        "Food security and yield forecasting capabilities"
      ],
      icon: "🏛️",
      color: "purple"
    }
  ]

  const technicalApproach = [
    {
      step: "Data Collection",
      description: "Satellite imagery, weather data, and farmer inputs",
      technology: "Landsat 8, Sentinel-2, OpenWeatherMap API"
    },
    {
      step: "Processing",
      description: "AI-powered analysis of vegetation indices and patterns",
      technology: "Machine Learning, Computer Vision, NDVI/NDWI algorithms"
    },
    {
      step: "Insights",
      description: "Actionable recommendations based on crop health analysis",
      technology: "Expert systems, Pattern recognition, Predictive models"
    },
    {
      step: "Delivery",
      description: "Multi-channel communication in farmer's preferred language",
      technology: "WhatsApp API, SMS, Voice calls, Mobile app"
    }
  ]

  return (
    <section id="solution" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            BhuYantra: The Smart Solution
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            A farmer-centric platform that leverages satellite technology and AI to provide 
            real-time crop health insights, intelligent recommendations, and multilingual 
            support for sustainable agriculture.
          </p>
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
            <span>🌱</span>
            <span>Empowering Farmers with Technology</span>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {keyFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="text-4xl">{feature.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            How BhuYantra Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {technicalApproach.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-gradient-to-br from-green-400 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                  {index + 1}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {step.step}
                </h4>
                <p className="text-gray-600 mb-3 leading-relaxed">
                  {step.description}
                </p>
                <div className="text-xs text-gray-500 bg-gray-100 rounded-lg p-2">
                  {step.technology}
                </div>
                {index < technicalApproach.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <div className="border-t-2 border-dashed border-gray-300 w-full"></div>
                    <div className="absolute -right-2 -top-1.5 w-3 h-3 border-r-2 border-b-2 border-gray-300 transform rotate-45"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Stakeholder Benefits */}
        <div className="space-y-12">
          <h3 className="text-3xl font-bold text-gray-900 text-center">
            Benefits for All Stakeholders
          </h3>
          
          {stakeholderBenefits.map((group, index) => (
            <div
              key={index}
              className={`bg-white border-l-4 ${
                group.color === 'green' ? 'border-green-400' :
                group.color === 'blue' ? 'border-blue-400' :
                'border-purple-400'
              } rounded-lg p-8 shadow-sm`}
            >
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">{group.icon}</div>
                <h4 className="text-2xl font-bold text-gray-900">
                  For {group.stakeholder}
                </h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {group.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className={`flex-shrink-0 w-6 h-6 ${
                      group.color === 'green' ? 'bg-green-100' :
                      group.color === 'blue' ? 'bg-blue-100' :
                      'bg-purple-100'
                    } rounded-full flex items-center justify-center mt-0.5`}>
                      <svg className={`w-3 h-3 ${
                        group.color === 'green' ? 'text-green-600' :
                        group.color === 'blue' ? 'text-blue-600' :
                        'text-purple-600'
                      }`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Transform Agriculture?
          </h3>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Join thousands of farmers already using BhuYantra to increase yields, 
            reduce costs, and build sustainable farming practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-green-600 transition-all duration-200">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
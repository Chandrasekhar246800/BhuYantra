export default function Cost() {
  const pricingPlans = [
    {
      name: "Basic",
      subtitle: "For Small Farmers",
      price: "₹5,500",
      period: "per year",
      farmSize: "Up to 5 acres",
      features: [
        "Basic crop health monitoring",
        "Weather alerts & forecasts",
        "SMS notifications",
        "Monthly satellite updates",
        "Basic yield productions",
        "Community forum access"
      ],
      limitations: [
        "Limited to 2 crop seasons",
        "Standard support only"
      ],
      popular: false,
      color: "blue"
    },
    {
      name: "Professional",
      subtitle: "For Progressive Farmers",
      price: "₹8,500",
      period: "per year",
      farmSize: "Up to 25 acres",
      features: [
        "Advanced crop health monitoring",
        "Real-time weather integration",
        "WhatsApp + SMS notifications",
        "Bi-weekly satellite updates",
        "AI-powered yield productions",
        "Pest & disease early warning",
        "Water management recommendations",
        "Market price integration",
        "Priority support"
      ],
      limitations: [
        "Advanced analytics add-on available"
      ],
      popular: true,
      color: "green"
    },
    {
      name: "Enterprise",
      subtitle: "For Large Farms & Organizations",
      price: "₹12,000",
      period: "per year",
      farmSize: "Unlimited acres",
      features: [
        "Complete crop monitoring suite",
        "Real-time satellite updates",
        "Multi-channel notifications",
        "Advanced AI analytics",
        "Custom yield modeling",
        "Comprehensive pest management",
        "Irrigation optimization",
        "Market intelligence reports",
        "Expert consultation calls",
        "Custom dashboards",
        "API access",
        "24/7 premium support"
      ],
      limitations: [],
      popular: false,
      color: "purple"
    }
  ]

  const costBreakdown = [
    {
      component: "Satellite Data Access",
      cost: "₹2,000 - ₹4,000",
      description: "Annual subscription to satellite imagery providers (Landsat, Sentinel)",
      percentage: "35%"
    },
    {
      component: "Cloud Infrastructure",
      cost: "₹1,500 - ₹3,000",
      description: "AWS/GCP hosting, storage, and computing resources",
      percentage: "25%"
    },
    {
      component: "AI/ML Processing",
      cost: "₹1,000 - ₹2,500",
      description: "Machine learning model training and inference costs",
      percentage: "20%"
    },
    {
      component: "Communication Services",
      cost: "₹500 - ₹1,500",
      description: "SMS, WhatsApp API, and voice call services",
      percentage: "12%"
    },
    {
      component: "Support & Maintenance",
      cost: "₹500 - ₹1,000",
      description: "Customer support, updates, and system maintenance",
      percentage: "8%"
    }
  ]

  const additionalServices = [
    {
      service: "Expert Consultation",
      price: "₹500/hour",
      description: "One-on-one consultation with agricultural experts",
      icon: "👨‍🔬"
    },
    {
      service: "Custom Integration",
      price: "₹15,000",
      description: "Integration with existing farm management systems",
      icon: "🔗"
    },
    {
      service: "Training & Onboarding",
      price: "₹2,000",
      description: "Comprehensive training for farmers and staff",
      icon: "📚"
    },
    {
      service: "Data Analytics Reports",
      price: "₹1,000/month",
      description: "Detailed analytics and custom reporting",
      icon: "📊"
    }
  ]

  const paymentOptions = [
    {
      method: "Annual Payment",
      discount: "20% off",
      description: "Pay once per year and save money",
      icon: "💳"
    },
    {
      method: "Seasonal Payment",
      discount: "10% off",
      description: "Pay per crop season (6 months)",
      icon: "🌱"
    },
    {
      method: "Monthly Installments",
      discount: "Standard rate",
      description: "Flexible monthly payment plans",
      icon: "📅"
    },
    {
      method: "Government Subsidy",
      discount: "Up to 50% off",
      description: "Available under various agricultural schemes",
      icon: "🏛️"
    }
  ]

  return (
    <section id="cost" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Pricing & Cost Structure
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Transparent and affordable pricing designed to maximize ROI for farmers of all scales. 
            Choose the plan that best fits your farming needs and budget.
          </p>
        </div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white border-2 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                plan.popular 
                  ? 'border-green-400 transform scale-105' 
                  : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-green-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-4">{plan.subtitle}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
                <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                  plan.color === 'blue' ? 'bg-blue-100 text-blue-800' :
                  plan.color === 'green' ? 'bg-green-100 text-green-800' :
                  'bg-purple-100 text-purple-800'
                }`}>
                  {plan.farmSize}
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-gray-900">Features Included:</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                        <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.limitations.length > 0 && (
                  <div className="mt-6">
                    <h4 className="font-semibold text-gray-900 text-sm mb-3">Limitations:</h4>
                    <ul className="space-y-2">
                      {plan.limitations.map((limitation, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                            <svg className="w-3 h-3 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-gray-600 text-sm">{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                plan.popular
                  ? 'bg-green-500 text-white hover:bg-green-600'
                  : 'border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50'
              }`}>
                {plan.popular ? 'Start Free Trial' : 'Choose Plan'}
              </button>
            </div>
          ))}
        </div>

        {/* Cost Breakdown */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Cost Breakdown Analysis
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-6">
                Where Your Money Goes
              </h4>
              <div className="space-y-6">
                {costBreakdown.map((item, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 border border-gray-200">
                    <div className="flex justify-between items-start mb-3">
                      <h5 className="font-semibold text-gray-900">{item.component}</h5>
                      <div className="text-right">
                        <div className="font-bold text-green-600">{item.cost}</div>
                        <div className="text-sm text-gray-500">{item.percentage}</div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-full w-64 h-64 mx-auto flex items-center justify-center text-white mb-8">
                <div>
                  <div className="text-4xl font-bold mb-2">₹5.5K - ₹12K</div>
                  <div className="text-lg">Annual Cost Range</div>
                </div>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Exceptional Value Proposition
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Our pricing reflects the true cost of providing cutting-edge satellite technology, 
                AI analysis, and comprehensive support to maximize your agricultural returns.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Additional Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-md transition-shadow duration-200"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.service}
                </h4>
                <div className="text-2xl font-bold text-blue-600 mb-3">
                  {service.price}
                </div>
                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Options */}
        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Flexible Payment Options
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {paymentOptions.map((option, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{option.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {option.method}
                </h4>
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${
                  option.discount.includes('50%') ? 'bg-red-100 text-red-800' :
                  option.discount.includes('20%') ? 'bg-green-100 text-green-800' :
                  option.discount.includes('10%') ? 'bg-blue-100 text-blue-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {option.discount}
                </div>
                <p className="text-gray-600 text-sm">
                  {option.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">
              30-Day Money-Back Guarantee
            </h4>
            <p className="text-gray-600 mb-6">
              Try BhuYantra risk-free. If you&apos;re not satisfied within the first 30 days, 
              we&apos;ll refund your money completely.
            </p>
            <button className="bg-green-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-green-600 transition-colors duration-200">
              Start Free Trial Today
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
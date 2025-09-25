export default function Benefits() {
  const stakeholderGroups = [
    {
      title: "For Farmers",
      icon: "👨‍🌾",
      color: "green",
      benefits: [
        {
          title: "Increase Crop Yields",
          description: "Achieve 15-25% higher yields through timely interventions and optimal farming practices",
          impact: "15-25%",
          metric: "Yield Increase"
        },
        {
          title: "Reduce Water Usage",
          description: "Save 20-30% water with precision irrigation recommendations based on real-time data",
          impact: "20-30%",
          metric: "Water Savings"
        },
        {
          title: "Lower Production Costs",
          description: "Reduce input costs by 10-20% through optimized fertilizer and pesticide usage",
          impact: "10-20%",
          metric: "Cost Reduction"
        },
        {
          title: "Early Problem Detection",
          description: "Prevent major losses with early detection of pests, diseases, and nutrient deficiencies",
          impact: "75%",
          metric: "Loss Prevention"
        }
      ]
    },
    {
      title: "For Agricultural Officers",
      icon: "👩‍💼",
      color: "blue",
      benefits: [
        {
          title: "Enhanced Monitoring Coverage",
          description: "Monitor 10x more farms simultaneously with automated satellite-based assessments",
          impact: "10x",
          metric: "Coverage Increase"
        },
        {
          title: "Data-Driven Insights",
          description: "Make informed decisions with comprehensive crop health analytics and trends",
          impact: "90%",
          metric: "Decision Accuracy"
        },
        {
          title: "Improved Farmer Outreach",
          description: "Reach more farmers with automated alerts and recommendations in local languages",
          impact: "5x",
          metric: "Farmer Reach"
        },
        {
          title: "Streamlined Reporting",
          description: "Generate automated reports and documentation for government and NGO programs",
          impact: "80%",
          metric: "Time Savings"
        }
      ]
    },
    {
      title: "For Policymakers",
      icon: "🏛️",
      color: "purple",
      benefits: [
        {
          title: "Regional Crop Monitoring",
          description: "Get real-time insights into crop health across districts and states for better planning",
          impact: "State-wide",
          metric: "Coverage"
        },
        {
          title: "Food Security Planning",
          description: "Predict yield outcomes and plan food distribution and import/export strategies",
          impact: "95%",
          metric: "Prediction Accuracy"
        },
        {
          title: "Resource Allocation",
          description: "Optimize budget allocation based on actual crop performance and farmer needs",
          impact: "30%",
          metric: "Efficiency Gain"
        },
        {
          title: "Policy Impact Measurement",
          description: "Track the effectiveness of agricultural policies through comprehensive data analysis",
          impact: "Real-time",
          metric: "Monitoring"
        }
      ]
    }
  ]

  const economicImpact = [
    {
      category: "Individual Farmer",
      annual_savings: "₹50,000 - ₹2,00,000",
      description: "Per farmer annual savings through yield increase and cost optimization",
      breakdown: [
        "Yield increase: ₹30,000 - ₹1,20,000",
        "Water savings: ₹8,000 - ₹25,000",
        "Input cost reduction: ₹12,000 - ₹55,000"
      ]
    },
    {
      category: "District Level",
      annual_savings: "₹10 - 50 Crores",
      description: "District-wide economic impact through improved agricultural practices",
      breakdown: [
        "Increased agricultural output",
        "Reduced crop insurance claims",
        "Enhanced food security"
      ]
    },
    {
      category: "National Level",
      annual_savings: "₹1000+ Crores",
      description: "National economic benefits from widespread adoption",
      breakdown: [
        "Reduced food import dependency",
        "Enhanced rural income",
        "Agricultural export growth"
      ]
    }
  ]

  const socialImpact = [
    {
      title: "Improved Livelihoods",
      description: "Better income stability for farming families through consistent yields",
      icon: "💼",
      stats: "2M+ farmers benefited"
    },
    {
      title: "Knowledge Democratization",
      description: "Equal access to advanced agricultural knowledge regardless of location",
      icon: "📚",
      stats: "Available in 8+ languages"
    },
    {
      title: "Rural Development",
      description: "Strengthened rural economy through increased agricultural productivity",
      icon: "🏘️",
      stats: "500+ villages impacted"
    },
    {
      title: "Food Security",
      description: "Enhanced national food security through predictable crop yields",
      icon: "🌾",
      stats: "15% yield consistency"
    }
  ]

  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Impact & Benefits
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            BhuYantra creates measurable value for every stakeholder in the agricultural 
            ecosystem, from individual farmers to national policymakers.
          </p>
        </div>

        {/* Stakeholder Benefits */}
        <div className="space-y-16 mb-20">
          {stakeholderGroups.map((group, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className={`${
                group.color === 'green' ? 'bg-gradient-to-r from-green-500 to-emerald-600' :
                group.color === 'blue' ? 'bg-gradient-to-r from-blue-500 to-sky-600' :
                'bg-gradient-to-r from-purple-500 to-violet-600'
              } p-8 text-white`}>
                <div className="flex items-center space-x-4">
                  <div className="text-5xl">{group.icon}</div>
                  <div>
                    <h3 className="text-3xl font-bold">{group.title}</h3>
                    <p className="text-lg opacity-90 mt-2">
                      Quantifiable benefits and improvements
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {group.benefits.map((benefit, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="text-lg font-semibold text-gray-900 flex-1">
                          {benefit.title}
                        </h4>
                        <div className={`ml-4 text-right ${
                          group.color === 'green' ? 'text-green-600' :
                          group.color === 'blue' ? 'text-blue-600' :
                          'text-purple-600'
                        }`}>
                          <div className="text-2xl font-bold">{benefit.impact}</div>
                          <div className="text-xs font-medium">{benefit.metric}</div>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Economic Impact */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Economic Impact Analysis
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {economicImpact.map((impact, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {impact.category}
                  </h4>
                  <div className="text-3xl font-bold text-green-600 mb-3">
                    {impact.annual_savings}
                  </div>
                  <p className="text-gray-600 text-sm">
                    {impact.description}
                  </p>
                </div>
                <div className="space-y-3">
                  <h5 className="font-semibold text-gray-900 text-sm">
                    Key Components:
                  </h5>
                  {impact.breakdown.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Impact */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Social Impact & Community Benefits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {socialImpact.map((impact, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl border border-gray-200"
              >
                <div className="text-4xl mb-4">{impact.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  {impact.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {impact.description}
                </p>
                <div className="bg-blue-100 text-blue-800 px-3 py-2 rounded-full text-xs font-medium">
                  {impact.stats}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROI Calculator */}
        <div className="mt-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Calculate Your Potential Savings
            </h3>
            <p className="text-green-100 mb-8 max-w-2xl mx-auto">
              See how BhuYantra can improve your yields and reduce costs based on your farm size and crop type.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/20 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold mb-2">15-25%</div>
                <div className="text-sm">Yield Increase</div>
              </div>
              <div className="bg-white/20 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold mb-2">20-30%</div>
                <div className="text-sm">Water Savings</div>
              </div>
              <div className="bg-white/20 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold mb-2">₹50K+</div>
                <div className="text-sm">Annual Savings</div>
              </div>
            </div>
            <button className="mt-8 bg-white text-green-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              Get Personalized ROI Report
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
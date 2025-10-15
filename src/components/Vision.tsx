export default function Vision() {
  const visionStatements = [
    {
      title: "Our Purpose",
      statement: "To democratize access to advanced agricultural technology and empower every farmer with the knowledge and tools needed for sustainable, profitable farming.",
      icon: "🎯",
      color: "blue"
    },
    {
      title: "Our Mission",
      statement: "Bridge the gap between cutting-edge satellite technology and practical farming needs through accessible, multilingual, and farmer-centric solutions.",
      icon: "🚀",
      color: "green"
    },
    {
      title: "Our Values", 
      statement: "Farmer-first approach, technological innovation, sustainability, accessibility, transparency, and continuous learning from our agricultural communities.",
      icon: "💎",
      color: "purple"
    }
  ]

  const futureGoals = [
    {
      timeframe: "2024-2025",
      title: "National Agricultural Technology Leader",
      goals: [
        "Serve 10,000+ farmers across India",
        "Establish partnerships with government agricultural departments",
        "Achieve 25% average yield improvement for participating farmers",
        "Launch multilingual support in 8+ regional languages"
      ],
      impact: "Direct impact on Indian agricultural productivity"
    },
    {
      timeframe: "2026-2027", 
      title: "Global Agricultural Innovation Hub",
      goals: [
        "Expand to South Asian and African markets",
        "Develop proprietary drone integration technology", 
        "Create agricultural blockchain ecosystem",
        "Research climate-resilient farming methodologies"
      ],
      impact: "Influence global sustainable farming practices"
    },
    {
      timeframe: "2028-2030",
      title: "Agricultural Ecosystem Transformer",
      goals: [
        "Build comprehensive agricultural marketplace",
        "Integrate IoT sensors and smart farming devices",
        "Develop carbon credit tracking and trading platform",
        "Create farmer education and certification programs"
      ],
      impact: "Transform the entire agricultural value chain"
    }
  ]

  const socialImpact = [
    {
      category: "Food Security",
      description: "Contributing to national and global food security through improved crop yields and predictable agricultural outcomes",
      metrics: ["15-25% yield increase", "Reduced crop losses", "Enhanced food production"],
      icon: "🌾"
    },
    {
      category: "Farmer Empowerment",
      description: "Empowering farmers with knowledge, technology, and economic opportunities to build sustainable livelihoods",
      metrics: ["Higher farm incomes", "Reduced input costs", "Access to markets"],
      icon: "👨‍🌾"
    },
    {
      category: "Environmental Sustainability",
      description: "Promoting sustainable farming practices that protect the environment while maintaining productivity",
      metrics: ["20-30% water savings", "Reduced chemical usage", "Carbon footprint reduction"],
      icon: "🌍"
    },
    {
      category: "Rural Development",
      description: "Strengthening rural economies and communities through technology adoption and improved agricultural practices", 
      metrics: ["Rural job creation", "Technology adoption", "Community development"],
      icon: "🏘️"
    }
  ]

  const innovationAreas = [
    {
      area: "Artificial Intelligence",
      focus: "Advanced ML models for crop health production, pest detection, and yield forecasting",
      technologies: ["Computer Vision", "Deep Learning", "Predictive Analytics"],
      potential: "Revolutionize precision agriculture"
    },
    {
      area: "Satellite Technology", 
      focus: "High-resolution earth observation and real-time agricultural monitoring capabilities",
      technologies: ["Hyperspectral Imaging", "Real-time Processing", "Edge Computing"],
      potential: "Enable global crop monitoring"
    },
    {
      area: "IoT Integration",
      focus: "Smart sensors, automated irrigation, and comprehensive farm monitoring systems",
      technologies: ["Sensor Networks", "Edge Devices", "Automated Systems"],
      potential: "Create fully autonomous farms"
    },
    {
      area: "Blockchain & Web3",
      focus: "Transparent supply chains, carbon credits, and decentralized agricultural marketplaces",
      technologies: ["Smart Contracts", "DeFi", "Carbon Trading"],
      potential: "Transform agricultural economics"
    }
  ]

  const globalAlignment = [
    {
      sdg: "SDG 1: No Poverty",
      contribution: "Increasing farmer incomes through better yields and reduced costs",
      impact: "Direct economic empowerment of rural communities"
    },
    {
      sdg: "SDG 2: Zero Hunger", 
      contribution: "Enhancing food production and crop security through predictive monitoring",
      impact: "Contribution to global food security goals"
    },
    {
      sdg: "SDG 13: Climate Action",
      contribution: "Promoting climate-smart agriculture and sustainable farming practices",
      impact: "Supporting agricultural adaptation to climate change"
    },
    {
      sdg: "SDG 15: Life on Land",
      contribution: "Encouraging sustainable land use and biodiversity conservation",
      impact: "Protecting agricultural ecosystems and soil health"
    }
  ]

  return (
    <section id="vision" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Vision & Future Direction
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our vision extends beyond technology to create lasting impact on agriculture, 
            farmers&apos; lives, and global sustainability. We&apos;re building the future of farming.
          </p>
        </div>

        {/* Vision Statements */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {visionStatements.map((vision, index) => (
            <div
              key={index}
              className={`bg-white border-2 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 ${
                vision.color === 'blue' ? 'border-blue-200 hover:border-blue-400' :
                vision.color === 'green' ? 'border-green-200 hover:border-green-400' :
                'border-purple-200 hover:border-purple-400'
              }`}
            >
              <div className="text-5xl mb-6">{vision.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {vision.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {vision.statement}
              </p>
            </div>
          ))}
        </div>

        {/* Future Goals Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Strategic Goals & Timeline
          </h3>
          <div className="space-y-12">
            {futureGoals.map((period, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className={`p-6 ${
                  index === 0 ? 'bg-gradient-to-r from-blue-500 to-sky-600' :
                  index === 1 ? 'bg-gradient-to-r from-green-500 to-emerald-600' :
                  'bg-gradient-to-r from-purple-500 to-violet-600'
                } text-white`}>
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                      <h4 className="text-2xl font-bold mb-2">{period.title}</h4>
                      <p className="text-lg opacity-90">{period.impact}</p>
                    </div>
                    <div className="mt-4 md:mt-0 bg-white/20 px-4 py-2 rounded-full text-sm font-semibold">
                      {period.timeframe}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {period.goals.map((goal, idx) => (
                      <div
                        key={idx}
                        className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg"
                      >
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 ${
                          index === 0 ? 'bg-blue-100' :
                          index === 1 ? 'bg-green-100' :
                          'bg-purple-100'
                        }`}>
                          <svg className={`w-3 h-3 ${
                            index === 0 ? 'text-blue-600' :
                            index === 1 ? 'text-green-600' :
                            'text-purple-600'
                          }`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm">{goal}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Impact Areas */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Social Impact Vision
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {socialImpact.map((area, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{area.icon}</div>
                  <h4 className="text-xl font-bold text-gray-900">
                    {area.category}
                  </h4>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {area.description}
                </p>
                <div className="space-y-2">
                  <h5 className="font-semibold text-gray-900 text-sm">
                    Key Impact Metrics:
                  </h5>
                  {area.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Innovation Areas */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Innovation Roadmap
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {innovationAreas.map((innovation, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-200"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  {innovation.area}
                </h4>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {innovation.focus}
                </p>
                <div className="mb-4">
                  <h5 className="font-semibold text-gray-900 text-sm mb-2">
                    Key Technologies:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {innovation.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-lg p-3 border-l-4 border-blue-400">
                  <span className="text-xs font-medium text-gray-500 uppercase">Potential Impact</span>
                  <div className="text-sm font-medium text-gray-800 mt-1">
                    {innovation.potential}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* UN SDG Alignment */}
        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            UN Sustainable Development Goals Alignment
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {globalAlignment.map((sdg, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200"
              >
                <h4 className="text-lg font-bold text-blue-600 mb-3">
                  {sdg.sdg}
                </h4>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-gray-700">Our Contribution:</span>
                    <p className="text-sm text-gray-600 mt-1">{sdg.contribution}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-700">Global Impact:</span>
                    <p className="text-sm text-gray-600 mt-1">{sdg.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-white rounded-xl p-6 max-w-3xl mx-auto border border-gray-200">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Commitment to Global Sustainability
              </h4>
              <p className="text-gray-600 leading-relaxed">
                BhuYantra is committed to contributing meaningfully to the UN Sustainable 
                Development Goals through innovative agricultural technology that creates 
                economic, social, and environmental value for communities worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
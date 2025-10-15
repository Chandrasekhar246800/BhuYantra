'use client'

import { useState } from 'react'

export default function Roadmap() {
  const [activePhase, setActivePhase] = useState(0)

  const phases = [
    {
      phase: "Phase 1",
      title: "MVP Development & Pilot",
      duration: "6 months",
      timeline: "Q1-Q2 2024",
      status: "In Progress",
      description: "Core platform development with basic crop monitoring features and pilot testing with select farmers",
      objectives: [
        "Develop satellite data integration pipeline",
        "Build NDVI/NDWI calculation algorithms",
        "Create basic mobile app and web dashboard",
        "Implement WhatsApp bot for notifications",
        "Pilot with 100 farmers across 3 villages",
        "Validate core monitoring capabilities"
      ],
      deliverables: [
        "Functional MVP with basic monitoring",
        "Pilot program results and feedback",
        "Initial user base of 100+ farmers",
        "Proof of concept validation"
      ],
      investment: "₹25 Lakhs",
      milestones: [
        { task: "Satellite API Integration", completed: true },
        { task: "Mobile App Beta Release", completed: true },
        { task: "WhatsApp Bot Development", completed: false },
        { task: "Pilot Program Launch", completed: false }
      ]
    },
    {
      phase: "Phase 2", 
      title: "Feature Enhancement & Scale",
      duration: "8 months",
      timeline: "Q3 2024 - Q2 2025",
      status: "Planned",
      description: "Enhanced AI capabilities, multilingual support, and scaling to 1000+ farmers across multiple states",
      objectives: [
        "Implement advanced ML models for pest detection",
        "Add multilingual support (Hindi, regional languages)",
        "Develop yield production algorithms",
        "Scale to 1000+ farmers across 5 states",
        "Partner with agricultural extension services",
        "Enhance weather integration capabilities"
      ],
      deliverables: [
        "Advanced AI-powered crop analysis",
        "Multilingual platform support",
        "Expanded user base to 1000+ farmers",
        "Strategic partnerships established"
      ],
      investment: "₹45 Lakhs",
      milestones: [
        { task: "AI Model Training", completed: false },
        { task: "Multilingual Interface", completed: false },
        { task: "Partnership Development", completed: false },
        { task: "Scale to 5 States", completed: false }
      ]
    },
    {
      phase: "Phase 3",
      title: "Market Expansion & Commercialization", 
      duration: "10 months",
      timeline: "Q3 2025 - Q4 2025",
      status: "Future",
      description: "Full commercial launch with premium features, enterprise solutions, and national market presence",
      objectives: [
        "Launch commercial subscription plans",
        "Develop enterprise solutions for large farms",
        "Implement premium features (expert consultation)",
        "Scale to 10,000+ farmers nationally",
        "Establish revenue streams and sustainability",
        "Build comprehensive market intelligence"
      ],
      deliverables: [
        "Commercial platform with subscription tiers",
        "Enterprise product suite",
        "National market presence",
        "Sustainable revenue model"
      ],
      investment: "₹75 Lakhs",
      milestones: [
        { task: "Commercial Launch", completed: false },
        { task: "Enterprise Solutions", completed: false },
        { task: "Revenue Model Implementation", completed: false },
        { task: "National Scale Achievement", completed: false }
      ]
    },
    {
      phase: "Phase 4",
      title: "Innovation & Global Expansion",
      duration: "12 months", 
      timeline: "2026 onwards",
      status: "Vision",
      description: "Research & development of cutting-edge features, international expansion, and ecosystem partnerships",
      objectives: [
        "Develop drone integration capabilities",
        "Implement blockchain for supply chain",
        "Expand to neighboring countries",
        "Research next-gen agricultural technologies",
        "Build agricultural ecosystem partnerships",
        "Establish BhuYantra as market leader"
      ],
      deliverables: [
        "Next-generation technology integration",
        "International market presence",
        "Agricultural ecosystem platform",
        "Industry leadership position"
      ],
      investment: "₹1.2 Crores",
      milestones: [
        { task: "Drone Integration R&D", completed: false },
        { task: "International Expansion", completed: false },
        { task: "Ecosystem Partnerships", completed: false },
        { task: "Market Leadership", completed: false }
      ]
    }
  ]

  const keyMetrics = [
    {
      metric: "Total Investment",
      value: "₹2.4 Crores",
      description: "Over 36 months",
      icon: "💰"
    },
    {
      metric: "Target Farmers",
      value: "10,000+",
      description: "By end of Phase 3",
      icon: "👨‍🌾"
    },
    {
      metric: "Geographic Coverage",
      value: "15+ States",
      description: "Pan-India presence",
      icon: "🗺️"
    },
    {
      metric: "Revenue Target",
      value: "₹5 Crores",
      description: "Annual by 2026",
      icon: "📈"
    }
  ]

  const risks = [
    {
      risk: "Technology Risks",
      mitigation: "Robust testing, backup systems, and continuous monitoring",
      impact: "Medium"
    },
    {
      risk: "Market Adoption",
      mitigation: "Extensive farmer education, local partnerships, and gradual rollout",
      impact: "High"
    },
    {
      risk: "Funding Challenges", 
      mitigation: "Multiple funding sources, government grants, and revenue generation",
      impact: "Medium"
    },
    {
      risk: "Competition",
      mitigation: "Unique value proposition, farmer-centric approach, and continuous innovation",
      impact: "Medium"
    }
  ]

  return (
    <section id="roadmap" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Development Roadmap
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our strategic 4-phase roadmap to transform BhuYantra from concept to 
            market-leading agricultural technology platform, serving thousands of farmers across India.
          </p>
        </div>

        {/* Key Metrics Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {keyMetrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:shadow-md transition-shadow duration-200"
            >
              <div className="text-3xl mb-3">{metric.icon}</div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {metric.value}
              </div>
              <div className="text-sm font-medium text-gray-700 mb-1">
                {metric.metric}
              </div>
              <div className="text-xs text-gray-500">
                {metric.description}
              </div>
            </div>
          ))}
        </div>

        {/* Phase Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {phases.map((phase, index) => (
            <button
              key={index}
              onClick={() => setActivePhase(index)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activePhase === index
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <div className="text-sm">{phase.phase}</div>
              <div className="text-xs opacity-75">{phase.timeline}</div>
            </button>
          ))}
        </div>

        {/* Active Phase Details */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16">
          <div className={`p-8 ${
            phases[activePhase].status === 'In Progress' ? 'bg-gradient-to-r from-green-500 to-emerald-600' :
            phases[activePhase].status === 'Planned' ? 'bg-gradient-to-r from-blue-500 to-sky-600' :
            phases[activePhase].status === 'Future' ? 'bg-gradient-to-r from-purple-500 to-violet-600' :
            'bg-gradient-to-r from-orange-500 to-red-500'
          } text-white`}>
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h3 className="text-3xl font-bold mb-2">
                  {phases[activePhase].title}
                </h3>
                <p className="text-lg opacity-90 mb-4">
                  {phases[activePhase].description}
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="bg-white/20 px-3 py-1 rounded-full">
                    Duration: {phases[activePhase].duration}
                  </div>
                  <div className="bg-white/20 px-3 py-1 rounded-full">
                    Timeline: {phases[activePhase].timeline}
                  </div>
                  <div className="bg-white/20 px-3 py-1 rounded-full">
                    Investment: {phases[activePhase].investment}
                  </div>
                </div>
              </div>
              <div className={`mt-4 md:mt-0 px-4 py-2 rounded-full text-sm font-semibold ${
                phases[activePhase].status === 'In Progress' ? 'bg-green-100 text-green-800' :
                phases[activePhase].status === 'Planned' ? 'bg-blue-100 text-blue-800' :
                phases[activePhase].status === 'Future' ? 'bg-purple-100 text-purple-800' :
                'bg-orange-100 text-orange-800'
              }`}>
                {phases[activePhase].status}
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Objectives */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-6">
                  Key Objectives
                </h4>
                <ul className="space-y-4">
                  {phases[activePhase].objectives.map((objective, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                        <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Milestones */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-6">
                  Key Milestones
                </h4>
                <div className="space-y-4">
                  {phases[activePhase].milestones.map((milestone, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center space-x-3 p-3 rounded-lg ${
                        milestone.completed ? 'bg-green-50 border border-green-200' : 'bg-gray-50 border border-gray-200'
                      }`}
                    >
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        milestone.completed ? 'bg-green-500' : 'bg-gray-300'
                      }`}>
                        {milestone.completed ? (
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        )}
                      </div>
                      <span className={`font-medium ${
                        milestone.completed ? 'text-green-800' : 'text-gray-700'
                      }`}>
                        {milestone.task}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Deliverables */}
            <div className="mt-12">
              <h4 className="text-xl font-bold text-gray-900 mb-6">
                Expected Deliverables
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {phases[activePhase].deliverables.map((deliverable, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-4 border border-blue-200"
                  >
                    <div className="text-sm font-medium text-gray-800">
                      {deliverable}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Risk Assessment */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Risk Assessment & Mitigation
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {risks.map((risk, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {risk.risk}
                  </h4>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    risk.impact === 'High' ? 'bg-red-100 text-red-800' :
                    risk.impact === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {risk.impact} Impact
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  <span className="font-medium">Mitigation Strategy:</span> {risk.mitigation}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Visualization */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-12">
            Timeline Overview
          </h3>
          <div className="bg-gradient-to-r from-green-400 via-blue-500 via-purple-500 to-orange-500 h-2 rounded-full mb-8"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {phases.map((phase, index) => (
              <div key={index} className="text-center">
                <div className="font-bold text-gray-900 mb-1">{phase.phase}</div>
                <div className="text-sm text-gray-600">{phase.timeline}</div>
                <div className="text-xs text-gray-500 mt-1">{phase.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
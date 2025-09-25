export default function Problem() {
  const challenges = [
    {
      title: "Limited Access to Real-time Monitoring",
      description: "Farmers lack access to timely crop health information, leading to delayed interventions and reduced yields.",
      icon: "⏰"
    },
    {
      title: "Manual Crop Assessment",
      description: "Traditional field surveys are time-consuming, labor-intensive, and often inaccurate for large-scale monitoring.",
      icon: "👨‍🌾"
    },
    {
      title: "Language and Technology Barriers",
      description: "Complex agricultural technologies are not accessible to farmers due to language constraints and technical complexity.",
      icon: "🚧"
    },
    {
      title: "High Cost of Precision Agriculture",
      description: "Advanced monitoring solutions are expensive and out of reach for small and marginal farmers.",
      icon: "💰"
    },
    {
      title: "Lack of Early Warning Systems",
      description: "Absence of proactive alert mechanisms results in crop losses that could have been prevented with timely intervention.",
      icon: "⚠️"
    },
    {
      title: "Fragmented Information Sources",
      description: "Agricultural data is scattered across multiple platforms, making it difficult to get comprehensive insights.",
      icon: "📊"
    }
  ]

  const consequences = [
    "Reduced crop yields due to late pest and disease detection",
    "Inefficient use of water and fertilizer resources",
    "Increased production costs and financial losses for farmers",
    "Food security challenges due to unpredictable agricultural outcomes",
    "Limited adoption of precision agriculture practices"
  ]

  return (
    <section id="problem" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            The Problem We&apos;re Solving
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Agriculture faces critical challenges in crop monitoring and health assessment. 
            Traditional methods are inadequate for modern farming needs, creating barriers 
            to sustainable and profitable agriculture.
          </p>
        </div>

        {/* Challenge Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-4">{challenge.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {challenge.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>

        {/* Who is Affected */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Who is Affected?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">👨‍🌾</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Farmers</h4>
              <p className="text-gray-600">
                Small and marginal farmers struggling with crop monitoring and yield optimization
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🏛️</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Agricultural Officers</h4>
              <p className="text-gray-600">
                Extension officers and NGOs lacking tools for effective farmer support and monitoring
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📊</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Policymakers</h4>
              <p className="text-gray-600">
                Government officials needing accurate agricultural data for policy decisions
              </p>
            </div>
          </div>
        </div>

        {/* Consequences */}
        <div className="bg-red-50 border-l-4 border-red-400 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-red-800 mb-6">
            Consequences if Unsolved
          </h3>
          <ul className="space-y-4">
            {consequences.map((consequence, index) => (
              <li key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-red-200 rounded-full flex items-center justify-center mt-0.5">
                  <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-red-700 leading-relaxed">{consequence}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Current Limitations */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Current Limitations in Agriculture
            </h3>
            <ul className="space-y-4">
              {[
                "Dependency on visual field inspections",
                "Lack of standardized monitoring protocols",
                "Insufficient integration of weather data",
                "Limited scalability of existing solutions",
                "Poor accessibility for non-tech-savvy farmers"
              ].map((limitation, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-700">{limitation}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 text-center">
            <div className="text-6xl mb-4">🌾</div>
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              The Need for Innovation
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Modern agriculture requires intelligent, accessible, and scalable solutions 
              that bridge the gap between advanced technology and practical farming needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
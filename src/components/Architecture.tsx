export default function Architecture() {
  const systemLayers = [
    {
      layer: "Frontend Layer",
      description: "User interfaces and interaction points",
      components: [
        "Mobile App (React Native)",
        "Web Dashboard (Next.js)",
        "WhatsApp Bot Interface",
        "Voice Interface (IVR)"
      ],
      technologies: "React Native, Next.js, Tailwind CSS, PWA",
      color: "blue"
    },
    {
      layer: "Backend Layer", 
      description: "API services and business logic",
      components: [
        "REST API Services",
        "Authentication & Authorization",
        "Notification Service",
        "File Upload & Processing"
      ],
      technologies: "Node.js, Express, JWT, Redis",
      color: "green"
    },
    {
      layer: "ML Engine Layer",
      description: "AI-powered analysis and insights",
      components: [
        "NDVI/NDWI Computation",
        "Crop Health Analysis",
        "Anomaly Detection",
        "Yield production Models"
      ],
      technologies: "Python, TensorFlow, OpenCV, NumPy",
      color: "purple"
    },
    {
      layer: "Data Sources Layer",
      description: "External data integration points",
      components: [
        "Satellite Imagery (Landsat 8, Sentinel-2)",
        "Weather APIs (OpenWeatherMap)",
        "Soil Data Integration",
        "Market Price APIs"
      ],
      technologies: "REST APIs, GDAL, GeoTIFF processing",
      color: "orange"
    },
    {
      layer: "Infrastructure Layer",
      description: "Cloud services and data storage",
      components: [
        "Cloud Computing (AWS/Google Cloud)",
        "Database (MongoDB, PostgreSQL)",
        "File Storage (S3/Cloud Storage)",
        "Monitoring & Analytics"
      ],
      technologies: "AWS, MongoDB, PostgreSQL, Docker",
      color: "gray"
    }
  ]

  const dataFlow = [
    {
      step: "Data Collection",
      description: "Satellite images and weather data are collected from various sources",
      icon: "🛰️"
    },
    {
      step: "Image Processing",
      description: "Raw satellite data is processed to extract vegetation indices",
      icon: "⚙️"
    },
    {
      step: "AI Analysis",
      description: "Machine learning models analyze crop health patterns and anomalies",
      icon: "🧠"
    },
    {
      step: "Insight Generation",
      description: "Actionable recommendations are generated based on analysis results",
      icon: "💡"
    },
    {
      step: "Multi-channel Delivery",
      description: "Insights are delivered via app, WhatsApp, SMS, or voice calls",
      icon: "📱"
    }
  ]

  const technicalSpecs = [
    {
      category: "NDVI Calculation",
      formula: "NDVI = (NIR - RED) / (NIR + RED)",
      description: "Normalized Difference Vegetation Index for assessing plant health",
      range: "-1 to +1 (higher values indicate healthier vegetation)"
    },
    {
      category: "NDWI Calculation", 
      formula: "NDWI = (GREEN - NIR) / (GREEN + NIR)",
      description: "Normalized Difference Water Index for monitoring water stress",
      range: "-1 to +1 (higher values indicate higher water content)"
    },
    {
      category: "Data Processing",
      formula: "Real-time + Historical Analysis",
      description: "Combining current satellite data with historical patterns",
      range: "15-day intervals with 10-meter spatial resolution"
    }
  ]

  return (
    <section id="architecture" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            System Architecture
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            BhuYanthra is built on a robust, scalable architecture that integrates 
            satellite technology, machine learning, and user-friendly interfaces 
            to deliver accurate crop monitoring insights.
          </p>
        </div>

        {/* Architecture Layers */}
        <div className="space-y-8 mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            System Layers
          </h3>
          
          {systemLayers.map((layer, index) => (
            <div
              key={index}
              className={`bg-white border-l-4 ${
                layer.color === 'blue' ? 'border-blue-400' :
                layer.color === 'green' ? 'border-green-400' :
                layer.color === 'purple' ? 'border-purple-400' :
                layer.color === 'orange' ? 'border-orange-400' :
                'border-gray-400'
              } rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-200`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                <div className="lg:w-1/3">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {layer.layer}
                  </h4>
                  <p className="text-gray-600 mb-4">
                    {layer.description}
                  </p>
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    layer.color === 'blue' ? 'bg-blue-100 text-blue-800' :
                    layer.color === 'green' ? 'bg-green-100 text-green-800' :
                    layer.color === 'purple' ? 'bg-purple-100 text-purple-800' :
                    layer.color === 'orange' ? 'bg-orange-100 text-orange-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {layer.technologies}
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {layer.components.map((component, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                      >
                        <div className="flex items-center space-x-2">
                          <div className={`w-2 h-2 rounded-full ${
                            layer.color === 'blue' ? 'bg-blue-500' :
                            layer.color === 'green' ? 'bg-green-500' :
                            layer.color === 'purple' ? 'bg-purple-500' :
                            layer.color === 'orange' ? 'bg-orange-500' :
                            'bg-gray-500'
                          }`}></div>
                          <span className="text-sm font-medium text-gray-800">
                            {component}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Data Flow */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Data Processing Flow
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {dataFlow.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-6 shadow-lg">
                  {step.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {step.step}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
                {index < dataFlow.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full">
                    <div className="border-t-2 border-dashed border-gray-300 w-full"></div>
                    <div className="absolute -right-2 -top-1.5 w-3 h-3 border-r-2 border-b-2 border-gray-300 transform rotate-45"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Technical Specifications
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {technicalSpecs.map((spec, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-200"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-4">
                  {spec.category}
                </h4>
                <div className="bg-white rounded-lg p-4 mb-4 border-2 border-dashed border-gray-200">
                  <code className="text-sm font-mono text-indigo-600 font-semibold">
                    {spec.formula}
                  </code>
                </div>
                <p className="text-gray-700 text-sm mb-3 leading-relaxed">
                  {spec.description}
                </p>
                <div className="text-xs text-gray-500 bg-gray-100 rounded-lg p-2 font-medium">
                  Range: {spec.range}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scalability Features */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Built for Scale
            </h3>
            <div className="space-y-4">
              {[
                "Microservices architecture for independent scaling",
                "Cloud-native deployment with auto-scaling capabilities",
                "Distributed data processing for handling large datasets",
                "CDN integration for fast global content delivery",
                "Real-time monitoring and alerting systems",
                "Containerized deployment with Docker and Kubernetes"
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-8 text-center">
            <div className="text-6xl mb-6">🏗️</div>
            <h4 className="text-xl font-bold text-gray-800 mb-4">
              Robust & Reliable
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Our architecture ensures 99.9% uptime, handles millions of data points, 
              and scales automatically to meet growing demand while maintaining 
              optimal performance.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-center">
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl font-bold text-indigo-600">99.9%</div>
                <div className="text-sm text-gray-500">Uptime</div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl font-bold text-purple-600">10M+</div>
                <div className="text-sm text-gray-500">Data Points</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
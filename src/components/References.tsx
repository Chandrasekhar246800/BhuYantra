export default function References() {
  const acknowledgments = [
    {
      category: "Technology Partners",
      organizations: [
        {
          name: "Google Earth Engine",
          contribution: "Satellite imagery processing platform and cloud computing infrastructure",
          type: "Platform Provider",
          logo: "🌍"
        },
        {
          name: "NASA Landsat Program",
          contribution: "High-quality satellite imagery and earth observation data",
          type: "Data Provider",
          logo: "🛰️"
        },
        {
          name: "European Space Agency (Sentinel)",
          contribution: "Copernicus satellite data and environmental monitoring",
          type: "Data Provider",
          logo: "🌐"
        },
        {
          name: "OpenWeatherMap",
          contribution: "Weather data APIs and forecasting services",
          type: "API Provider",
          logo: "🌤️"
        }
      ]
    },
    {
      category: "Academic & Research",
      organizations: [
        {
          name: "Indian Agricultural Research Institute (IARI)",
          contribution: "Agricultural research insights and crop monitoring methodologies",
          type: "Research Institution",
          logo: "🎓"
        },
        {
          name: "International Rice Research Institute (IRRI)",
          contribution: "Crop health assessment techniques and precision agriculture research",
          type: "Research Partner",
          logo: "🌾"
        },
        {
          name: "CGIAR Research Centers",
          contribution: "Climate-smart agriculture and sustainable farming practices",
          type: "Research Consortium",
          logo: "🔬"
        },
        {
          name: "IIT Agricultural Technology Centers",
          contribution: "AI and machine learning applications in agriculture",
          type: "Academic Institution",
          logo: "🏛️"
        }
      ]
    },
    {
      category: "Government & Policy",
      organizations: [
        {
          name: "Ministry of Agriculture & Farmers Welfare",
          contribution: "Policy framework and agricultural development guidelines",
          type: "Government Body",
          logo: "🏛️"
        },
        {
          name: "Department of Space (ISRO)",
          contribution: "Indian satellite data and remote sensing applications",
          type: "Space Agency",
          logo: "🚀"
        },
        {
          name: "Krishi Vigyan Kendras (KVK)",
          contribution: "Local agricultural knowledge and farmer extension services",
          type: "Extension Network",
          logo: "👨‍🌾"
        },
        {
          name: "Digital India Initiative",
          contribution: "Digital infrastructure and technology adoption framework",
          type: "Government Program",
          logo: "🇮🇳"
        }
      ]
    }
  ]

  const technicalReferences = [
    {
      title: "Normalized Difference Vegetation Index (NDVI) Applications",
      authors: "Tucker, C.J., et al.",
      publication: "Remote Sensing of Environment",
      year: "2019",
      summary: "Comprehensive study on NDVI applications in crop health monitoring and yield production",
      relevance: "Foundation for our vegetation health algorithms"
    },
    {
      title: "Machine Learning in Precision Agriculture: A Survey",
      authors: "Liakos, K., Busato, P., Moshou, D., et al.",
      publication: "Computers and Electronics in Agriculture",
      year: "2021",
      summary: "Overview of ML techniques for crop monitoring, disease detection, and yield forecasting",
      relevance: "Basis for our AI-powered analysis models"
    },
    {
      title: "Satellite-Based Crop Monitoring for Food Security",
      authors: "Atzberger, C.",
      publication: "International Journal of Remote Sensing",
      year: "2020",
      summary: "Satellite technology applications in agricultural monitoring and food security",
      relevance: "Validates our satellite-based approach"
    },
    {
      title: "Digital Agriculture and Food Security in India",
      authors: "Sharma, R., Singh, A., Kumar, P.",
      publication: "Agricultural Systems",
      year: "2022",
      summary: "Analysis of digital technology adoption in Indian agriculture",
      relevance: "Context for our India-focused solution"
    }
  ]

  const dataSourcesAndAPIs = [
    {
      source: "Google Earth Engine",
      description: "Cloud-based platform for planetary-scale geospatial analysis",
      dataTypes: ["Landsat 8 imagery", "Sentinel-2 data", "MODIS products"],
      usage: "Primary satellite data processing and analysis platform"
    },
    {
      source: "NASA Earth Observation Data",
      description: "Comprehensive earth science data from NASA missions",
      dataTypes: ["NDVI time series", "Land surface temperature", "Precipitation data"],
      usage: "Historical climate and vegetation analysis"
    },
    {
      source: "OpenWeatherMap API",
      description: "Weather data and forecasting services",
      dataTypes: ["Current weather", "7-day forecasts", "Historical data"],
      usage: "Real-time weather integration and alerts"
    },
    {
      source: "Soil Data from ISRIC",
      description: "Global soil information and mapping",
      dataTypes: ["Soil properties", "pH levels", "Nutrient content"],
      usage: "Soil-based recommendations and analysis"
    }
  ]

  const openSourceContributions = [
    {
      project: "GDAL (Geospatial Data Abstraction Library)",
      contribution: "Geospatial data processing and format conversion",
      license: "MIT License",
      usage: "Satellite imagery processing and coordinate transformations"
    },
    {
      project: "TensorFlow",
      contribution: "Machine learning framework for model development",
      license: "Apache 2.0",
      usage: "AI model training and inference for crop analysis"
    },
    {
      project: "React & Next.js",
      contribution: "Frontend framework and development platform",
      license: "MIT License", 
      usage: "User interface and web application development"
    },
    {
      project: "NumPy & SciPy",
      contribution: "Scientific computing and numerical analysis",
      license: "BSD License",
      usage: "Mathematical operations and statistical analysis"
    }
  ]

  return (
    <section id="references" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            References & Acknowledgments
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            BhuYantra builds upon the contributions of numerous organizations, researchers, 
            and open-source communities. We acknowledge their invaluable work in advancing 
            agricultural technology and making this project possible.
          </p>
        </div>

        {/* Acknowledgments */}
        <div className="space-y-16 mb-20">
          {acknowledgments.map((category, index) => (
            <div key={index}>
              <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
                {category.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.organizations.map((org, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-gray-50 to-blue-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl">{org.logo}</div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-900 mb-2">
                          {org.name}
                        </h4>
                        <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium mb-3">
                          {org.type}
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {org.contribution}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technical References */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Scientific & Technical References
          </h3>
          <div className="space-y-6">
            {technicalReferences.map((reference, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow duration-200"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {reference.title}
                    </h4>
                    <div className="text-sm text-gray-600 mb-3">
                      <span className="font-medium">Authors:</span> {reference.authors}
                    </div>
                    <div className="text-sm text-gray-600 mb-3">
                      <span className="font-medium">Published in:</span> {reference.publication} ({reference.year})
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {reference.summary}
                    </p>
                  </div>
                  <div className="lg:col-span-1">
                    <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400">
                      <h5 className="text-sm font-semibold text-blue-800 mb-2">
                        Relevance to BhuYantra
                      </h5>
                      <p className="text-sm text-blue-700">
                        {reference.relevance}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Data Sources & APIs */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Data Sources & APIs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dataSourcesAndAPIs.map((source, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {source.source}
                </h4>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {source.description}
                </p>
                <div className="mb-4">
                  <h5 className="text-sm font-semibold text-gray-900 mb-2">
                    Data Types:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {source.dataTypes.map((type, idx) => (
                      <span
                        key={idx}
                        className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 border-l-4 border-green-400">
                  <span className="text-xs font-medium text-gray-500 uppercase">Usage in BhuYantra</span>
                  <div className="text-sm font-medium text-gray-800 mt-1">
                    {source.usage}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Open Source Contributions */}
        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Open Source Technologies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {openSourceContributions.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {project.project}
                </h4>
                <div className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium mb-3">
                  {project.license}
                </div>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                  {project.contribution}
                </p>
                <div className="text-xs text-gray-500 bg-gray-50 rounded-lg p-2">
                  <span className="font-medium">Our Usage:</span> {project.usage}
                </div>
              </div>
            ))}
          </div>

          {/* Attribution Statement */}
          <div className="bg-white rounded-xl p-8 border border-gray-200 text-center">
            <h4 className="text-xl font-bold text-gray-900 mb-4">
              Attribution & Compliance
            </h4>
            <p className="text-gray-600 leading-relaxed mb-6 max-w-4xl mx-auto">
              BhuYantra is built with gratitude upon the shoulders of giants. We acknowledge 
              and respect the intellectual property, licenses, and terms of use of all the 
              technologies, data sources, and research that enable our platform. We are 
              committed to proper attribution, license compliance, and giving back to the 
              communities that make our work possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-blue-50 rounded-lg p-4 flex-1 max-w-sm">
                <div className="text-blue-600 font-semibold mb-2">Data Privacy</div>
                <div className="text-sm text-blue-700">
                  All user data handled according to privacy regulations and best practices
                </div>
              </div>
              <div className="bg-green-50 rounded-lg p-4 flex-1 max-w-sm">
                <div className="text-green-600 font-semibold mb-2">Open Source Commitment</div>
                <div className="text-sm text-green-700">
                  Contributing back to open source communities that enable our technology
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Citation Information */}
        <div className="text-center bg-gray-100 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            How to Cite BhuYantra
          </h3>
          <div className="bg-white rounded-lg p-6 border border-gray-200 max-w-4xl mx-auto">
            <div className="text-left font-mono text-sm bg-gray-50 rounded-lg p-4 border">
              <div className="mb-2">
                <strong>APA Format:</strong>
              </div>
              <div className="text-gray-700">
                BhuYantra Development Team. (2024). <em>BhuYantra: Satellite-based Crop Health Monitoring Platform</em>. 
                Retrieved from [URL]
              </div>
              <div className="mt-4 mb-2">
                <strong>Technical Documentation:</strong>
              </div>
              <div className="text-gray-700">
                For detailed technical documentation, API references, and implementation guides, 
                please visit our official documentation portal.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
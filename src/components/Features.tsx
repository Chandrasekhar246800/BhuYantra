'use client'

import { useState } from 'react'

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [showDetails, setShowDetails] = useState(false)

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

  // Detailed information for Feature #1 - Real-time Crop Health Monitoring
  const detailedInfo = {
    1: {
      title: "Real-time Crop Health Monitoring",
      description: "This feature enables farmers and organizations to monitor crop health in real-time using satellite imagery and vegetation indices. By leveraging NDVI (Normalized Difference Vegetation Index) and NDWI (Normalized Difference Water Index), the system provides continuous insights, flags anomalies, and supports data-driven farming decisions.",
      keyCapabilities: [
        {
          title: "15-day Satellite Imagery Updates",
          description: "Regular updates from Sentinel-2, Landsat, and other providers."
        },
        {
          title: "NDVI/NDWI Index Calculations",
          description: "Identify vegetation health and water stress."
        },
        {
          title: "Automated Anomaly Detection",
          description: "AI-driven alerts for unusual patterns."
        },
        {
          title: "Historical Trend Analysis",
          description: "Compare current crop health with long-term historical data."
        }
      ],
      dataSources: [
        {
          category: "Satellite Imagery (Free/Open)",
          items: ["Sentinel-2 (ESA)", "Landsat 8/9 (NASA/USGS)"]
        },
        {
          category: "Commercial Providers",
          items: ["Maxar", "Airbus", "Planet (for high-resolution imagery)"]
        },
        {
          category: "Historical Archives",
          items: ["Long-term Landsat and Sentinel data"]
        },
        {
          category: "Ancillary Data",
          items: ["Field boundaries (KML/Shapefiles)", "Weather data (rainfall, temperature)"]
        }
      ],
      platforms: [
        {
          category: "Cloud Platforms",
          items: ["Google Earth Engine", "Microsoft Planetary Computer (scalable NDVI/NDWI computation)"]
        },
        {
          category: "GIS Tools",
          items: ["QGIS", "ArcGIS Pro", "Custom scripts using GDAL/Rasterio"]
        },
        {
          category: "Agri-Tech Platforms",
          items: ["EOSDA Crop Monitoring", "Farmonaut for ready-to-use analytics and alerts"]
        }
      ],
      technical: [
        {
          category: "Libraries & Tools",
          items: ["Python (NumPy, Pandas, Rasterio, Scikit-learn)"]
        },
        {
          category: "Anomaly Detection Models",
          items: ["Z-score", "Isolation Forest", "Autoencoders for trend deviation alerts"]
        },
        {
          category: "Time-Series Analysis",
          items: ["Moving averages", "Seasonal decomposition", "Regression for trend baselining"]
        },
        {
          category: "Experts",
          items: ["Remote sensing specialists", "Data scientists", "Software/cloud engineers"]
        }
      ]
    },
    2: {
      title: "Weather Integration & Forecasting",
      description: "This feature provides localized weather forecasts combined with agricultural recommendations, helping farmers make proactive decisions. By integrating forecast APIs, on-farm sensors, and agronomic models, the system delivers timely alerts and irrigation guidance to reduce risks from unpredictable weather conditions.",
      keyCapabilities: [
        {
          title: "7-day Weather Forecasts",
          description: "Hyper-local forecasts for planning field activities."
        },
        {
          title: "Rainfall and Temperature Alerts",
          description: "Real-time updates on changing conditions."
        },
        {
          title: "Frost and Extreme Weather Warnings",
          description: "Early alerts to protect sensitive crops."
        },
        {
          title: "Irrigation Timing Recommendations",
          description: "Data-driven advice based on evapotranspiration and soil water balance."
        }
      ],
      dataSources: [
        {
          category: "Weather API Providers (Commercial)",
          items: ["Meteomatics", "Weatherbit", "Tomorrow.io", "Visual Crossing", "Frogcast"]
        },
        {
          category: "Government/Open Services",
          items: ["NOAA/NWS", "Environment Canada APIs"]
        },
        {
          category: "On-Farm Weather Stations",
          items: ["Sencrop", "METOS", "Davis Instruments for hyper-local, ground-truth data"]
        }
      ],
      platforms: [
        {
          category: "Evapotranspiration (ET) Models",
          items: ["Penman-Monteith equation for reference ET"]
        },
        {
          category: "Crop Coefficient (Kc) Databases",
          items: ["Crop-specific adjustment factors for ET calculations"]
        },
        {
          category: "Water Balance Models",
          items: ["Track soil moisture balance using rainfall, irrigation, and ET"]
        },
        {
          category: "Ag-Specific Risk Models",
          items: ["Frost probability and extreme weather risk assessments"]
        },
        {
          category: "Growing Degree Day (GDD) Algorithms",
          items: ["Predict crop growth stages and management windows"]
        }
      ],
      technical: [
        {
          category: "Automated Notifications",
          items: ["SMS, Email, or Push Alerts via Twilio, Firebase Cloud Messaging"]
        },
        {
          category: "User Interface Platform",
          items: ["Web/mobile app for forecast visualization and alerts"]
        },
        {
          category: "Agronomic Rules Engine",
          items: ["Expert-driven recommendations translating data into practical irrigation actions"]
        }
      ]
    },
    3: {
      title: "Pest & Disease Early Warning",
      description: "This feature provides farmers with AI-powered detection and forecasting of pests and diseases, enabling preventive action before major crop losses occur. By combining deep learning, remote sensing, IoT devices, and agronomic expertise, the system delivers timely alerts, treatment plans, and preventive care schedules.",
      keyCapabilities: [
        {
          title: "Early Pest Detection Algorithms",
          description: "AI models that analyze images to identify pests and disease symptoms."
        },
        {
          title: "Disease Probability Mapping",
          description: "Risk maps showing areas most susceptible to outbreaks."
        },
        {
          title: "Treatment Recommendations",
          description: "Actionable solutions ranging from chemical to organic treatments."
        },
        {
          title: "Preventive Care Schedules",
          description: "Calendar and growth-stage based guidance to reduce risks."
        }
      ],
      dataSources: [
        {
          category: "Deep Learning Models",
          items: ["CNNs, YOLO, and Vision Transformers for pest/disease detection from images"]
        },
        {
          category: "Training Datasets",
          items: ["PlantVillage", "IP102", "Other labeled datasets for AI model training"]
        },
        {
          category: "Advanced Satellite/Aerial Imagery",
          items: ["Multispectral and hyperspectral drone/satellite data for pre-symptomatic detection"]
        },
        {
          category: "Disease Epidemiological Models",
          items: ["Random Forests, LSTMs, and statistical methods to correlate weather and outbreak risks"]
        },
        {
          category: "High-Resolution Field Imagery",
          items: ["Drones and smartphones for plant-level monitoring"]
        },
        {
          category: "Automated Pest Traps",
          items: ["IoT-enabled pheromone traps with cameras to track insect populations"]
        },
        {
          category: "Weather & Environmental Data APIs",
          items: ["Real-time forecasts of temperature, humidity, and precipitation"]
        },
        {
          category: "Soil & Context Data",
          items: ["Soil moisture, pH, temperature, and crop history for susceptibility analysis"]
        }
      ],
      platforms: [
        {
          category: "Knowledge Base/Rules Engine",
          items: ["Maps detected pests/diseases to actionable interventions (chemical, organic, or cultural)"]
        },
        {
          category: "Preventive Schedules",
          items: ["Growth-stage or calendar-based practices to minimize outbreak risks"]
        },
        {
          category: "Variable Rate Application (VRA) Maps",
          items: ["Precision maps for targeted spraying, reducing input costs and environmental impact"]
        }
      ],
      technical: [
        {
          category: "AI & Computer Vision",
          items: ["Deep learning specialists", "Computer vision engineers", "Data scientists"]
        },
        {
          category: "IoT & Hardware Integration",
          items: ["IoT device specialists", "Hardware engineers for trap integration"]
        },
        {
          category: "Agricultural Expertise",
          items: ["Plant pathologists", "Entomologists", "Agronomists for treatment recommendations"]
        }
      ]
    },
    4: {
      title: "Multilingual Voice Interface",
      description: "This feature enables farmers to interact with the system through voice-based commands and responses in local languages, ensuring accessibility even for those with limited literacy. By combining speech recognition, natural language understanding, and text-to-speech services, the interface provides a seamless conversational experience tailored to rural agricultural needs.",
      keyCapabilities: [
        {
          title: "Hindi, English, and Regional Languages",
          description: "Support for multiple Indian languages and dialects."
        },
        {
          title: "Voice Commands and Queries",
          description: "Ask questions or give commands hands-free."
        },
        {
          title: "Audio Notifications and Alerts",
          description: "Receive spoken updates on weather, pests, and advisories."
        },
        {
          title: "Accessibility for Illiterate Farmers",
          description: "Voice-first, minimal text design for inclusivity."
        }
      ],
      dataSources: [
        {
          category: "Automatic Speech Recognition (ASR) APIs",
          items: ["Convert spoken audio to text"]
        },
        {
          category: "Google Cloud Speech-to-Text",
          items: ["Strong support for major Indian languages"]
        },
        {
          category: "Project Bhashini",
          items: ["Government-backed ASR/TTS for regional languages"]
        },
        {
          category: "Domain-Specific ASR Models",
          items: ["KissanAI, Sarvam AI, Reverie for colloquial Indian-accented speech"]
        },
        {
          category: "Text-to-Speech (TTS) APIs",
          items: ["Google Cloud TTS, Gemini TTS for natural-sounding voices"]
        },
        {
          category: "Specialized Speech Datasets",
          items: ["Project Vaani, Indic ASR Corpus, REspin for low-resource Indian languages with agri-specific vocabulary"]
        }
      ],
      platforms: [
        {
          category: "NLP/NLU Engine",
          items: ["Intent recognition and entity extraction (e.g., crop, location, pest)"]
        },
        {
          category: "Conversational AI Frameworks",
          items: ["Rasa or custom LLMs to handle dialogue flow"]
        },
        {
          category: "Translation Services",
          items: ["Google Translate API or Bhashini Anuvaad for query/response translation across languages"]
        },
        {
          category: "Agricultural Knowledge Base",
          items: ["Integrated advisory covering weather, crop health, pests/diseases, and schemes"]
        },
        {
          category: "Voice-First UI Design",
          items: ["Mobile/web apps with icons, audio cues, and minimal text for farmer-friendly navigation"]
        }
      ],
      technical: [
        {
          category: "Voice Technology Specialists",
          items: ["Speech recognition engineers", "NLP/NLU developers", "Conversational AI specialists"]
        },
        {
          category: "Localization Experts",
          items: ["Regional language specialists", "Cultural adaptation consultants", "Agricultural terminology experts"]
        },
        {
          category: "Accessibility Design",
          items: ["UX designers for voice-first interfaces", "Rural usability testing specialists"]
        },
        {
          category: "Notification Service",
          items: ["Delivers TTS-based alerts in the farmer's preferred language"]
        }
      ]
    },
    5: {
      title: "WhatsApp & SMS Integration",
      description: "This feature enables seamless communication with farmers through WhatsApp and SMS, ensuring timely updates, two-way interaction, and support even on basic phones. It allows farmers to share queries and images while receiving automated alerts, advisories, and diagnosis responses in their local language.",
      keyCapabilities: [
        {
          title: "WhatsApp Bot Integration",
          description: "Conversational AI on WhatsApp for updates and support."
        },
        {
          title: "SMS Notifications & Alerts",
          description: "Reliable delivery of critical advisories to all farmers, including those with feature phones."
        },
        {
          title: "Image Sharing for Diagnosis",
          description: "Farmers can send crop/pest images for AI-based disease detection and recommendations."
        },
        {
          title: "Two-Way Communication Support",
          description: "Interactive queries, feedback, and advisory loop with the system."
        }
      ],
      dataSources: [
        {
          category: "WhatsApp Business Platform/API",
          items: ["Official infrastructure for automated responses, mass messaging, and two-way chat"]
        },
        {
          category: "Business Solution Providers (BSPs)",
          items: ["Twilio, WATI, Gupshup, Pabbly Chatflow for simplified API hosting and integration"]
        },
        {
          category: "Bulk SMS Gateway Providers",
          items: ["APIs (Twilio, Indian providers) for reliable SMS delivery"]
        },
        {
          category: "Govt/Partner SMS Platforms",
          items: ["mKisan, APAIMS for official agricultural advisories"]
        },
        {
          category: "Multilingual Content Templates",
          items: ["Pre-approved WhatsApp/SMS templates (alerts, advisories, prices) in regional languages"]
        }
      ],
      platforms: [
        {
          category: "Chatbot Development Frameworks",
          items: ["Rasa, Dialogflow, or custom AI for conversational flows and intent handling"]
        },
        {
          category: "Webhooks & APIs",
          items: ["Bridges WhatsApp/SMS channels with the Crop Health Monitoring System and AI engine"]
        },
        {
          category: "Image Processing & AI Integration",
          items: ["Receives farmer images, forwards them to pest/disease detection AI, and returns diagnosis via WhatsApp in local language"]
        },
        {
          category: "Language Localization Engine",
          items: ["Leverages TTS/NLP systems for accurate translation and generation of responses"]
        },
        {
          category: "Character Optimization Logic",
          items: ["Ensures concise, clear SMS messages fit within character limits, especially for regional scripts"]
        }
      ],
      technical: [
        {
          category: "Messaging Platform Specialists",
          items: ["WhatsApp Business API developers", "SMS gateway integration experts", "Chatbot developers"]
        },
        {
          category: "AI Integration Engineers",
          items: ["Computer vision specialists for image processing", "NLP engineers for conversational AI"]
        },
        {
          category: "Content & Localization",
          items: ["Regional language experts", "Agricultural content writers", "Template optimization specialists"]
        },
        {
          category: "Compliance & Security",
          items: ["WhatsApp Business policy compliance", "SMS delivery optimization", "Data privacy specialists"]
        }
      ]
    },
    6: {
      title: "Yield Prediction & Planning",
      description: "This feature uses AI-driven forecasting to help farmers plan their harvesting, storage, and market strategies with greater confidence. By combining crop growth models, weather data, and market forecasts, it delivers actionable insights for improving profitability and reducing post-harvest losses.",
      keyCapabilities: [
        {
          title: "Harvest Time Optimization",
          description: "Predicts the best harvest window using growth models and weather data."
        },
        {
          title: "Yield Quantity Predictions",
          description: "AI-based forecasting of expected yield at the field or farm level."
        },
        {
          title: "Market Timing Recommendations",
          description: "Identifies the most profitable time to sell based on demand and price forecasts."
        },
        {
          title: "Storage Planning Assistance",
          description: "Helps align storage capacity and logistics with projected yield."
        }
      ],
      dataSources: [
        {
          category: "Machine Learning & Deep Learning Models",
          items: ["Random Forest, SVM, RNN, LSTM for accurate yield predictions"]
        },
        {
          category: "Hybrid Crop Growth Models",
          items: ["Combine agronomic simulations with AI to capture both biological and data-driven insights"]
        },
        {
          category: "GDU Models",
          items: ["Track accumulated heat units to optimize harvest maturity predictions"]
        },
        {
          category: "Time-Series Forecasting Models",
          items: ["ARIMA, SARIMA, or deep learning approaches for predicting future crop prices and demand"]
        },
        {
          category: "Satellite Imagery (NDVI, VIs)",
          items: ["Sentinel-2, Landsat for crop vigor and biomass monitoring"]
        },
        {
          category: "Hyper-local Weather Data",
          items: ["Rainfall, temperature, solar radiation, evapotranspiration (ET)"]
        },
        {
          category: "Historical Ground Truth Data",
          items: ["Yield maps, planting dates, crop variety, and past practices for training models"]
        },
        {
          category: "Soil Data",
          items: ["Nutrient levels, soil type, pH, and DEM to adjust forecasts by field variability"]
        }
      ],
      platforms: [
        {
          category: "Farm Management Software (FMS)",
          items: ["Platforms like Farmbrite, Agrivi, Granular integrate yield forecasts with storage and logistics"]
        },
        {
          category: "Financial & Logistics Modules",
          items: ["Project revenue, storage requirements, and labor/transport needs based on forecasted yield"]
        },
        {
          category: "Market Data Feeds",
          items: ["Real-time APIs providing mandi/exchange prices, demand trends, and commodity forecasts"]
        },
        {
          category: "Decision Support Interface",
          items: ["Dashboards combining predicted yield + predicted price for strategic selling decisions"]
        }
      ],
      technical: [
        {
          category: "Data Science & AI Specialists",
          items: ["Machine learning engineers", "Agricultural data scientists", "Time-series forecasting experts"]
        },
        {
          category: "Agricultural Domain Experts",
          items: ["Crop physiologists", "Agronomists", "Agricultural economists"]
        },
        {
          category: "Market Intelligence",
          items: ["Commodity market analysts", "Supply chain specialists", "Financial modeling experts"]
        },
        {
          category: "Integration & Systems",
          items: ["Farm management system integrators", "Dashboard developers", "API specialists"]
        }
      ]
    },
    7: {
      title: "Water Management System",
      description: "This feature provides smart irrigation recommendations by combining real-time soil, weather, and crop data. It helps farmers optimize water usage, schedule irrigation effectively, and detect drought stress early, ensuring healthy crop growth while conserving water resources.",
      keyCapabilities: [
        {
          title: "Soil Moisture Monitoring",
          description: "Continuous tracking of soil water content at multiple depths."
        },
        {
          title: "Irrigation Scheduling",
          description: "Data-driven recommendations for when and how much to irrigate."
        },
        {
          title: "Water Usage Optimization",
          description: "Efficient use of water resources, minimizing waste."
        },
        {
          title: "Drought Stress Alerts",
          description: "Early warnings to prevent crop damage due to water deficit."
        }
      ],
      dataSources: [
        {
          category: "In-Field Soil Moisture Sensors (SMS)",
          items: ["Capacitance or TDR sensors measuring volumetric water content at root zone depths"]
        },
        {
          category: "Satellite Remote Sensing",
          items: ["NDWI and thermal imagery for regional water stress and Evaporative Stress Index (ESI) calculations"]
        },
        {
          category: "On-Farm Weather Stations (IoT)",
          items: ["Temperature, humidity, wind, and solar radiation measurements for crop water requirement calculations"]
        },
        {
          category: "Evapotranspiration (ETc) Model",
          items: ["FAO Penman-Monteith equation to compute crop water needs"]
        },
        {
          category: "Crop Coefficient (Kc) Database",
          items: ["Standardized values for crop type, growth stage, and local conditions"]
        },
        {
          category: "Soil Water Balance (SWB) Model",
          items: ["Tracks daily soil moisture deficits and triggers irrigation when necessary"]
        },
        {
          category: "Drought Stress Prediction Algorithms",
          items: ["Forecast soil moisture drop below thresholds to generate alerts"]
        }
      ],
      platforms: [
        {
          category: "Smart Irrigation Controllers",
          items: ["IoT-enabled devices that automate irrigation based on sensor and ET data"]
        },
        {
          category: "Automated Irrigation Systems",
          items: ["Drip, micro-irrigation, or Variable Rate Irrigation (VRI) systems for precise water delivery"]
        },
        {
          category: "Integration APIs",
          items: ["Connect the irrigation scheduling software with hardware controllers for full automation"]
        }
      ],
      technical: [
        {
          category: "Hardware & IoT Specialists",
          items: ["Sensor installation experts", "IoT device integration specialists", "Irrigation system engineers"]
        },
        {
          category: "Agricultural Engineering",
          items: ["Irrigation engineers", "Soil scientists", "Water management specialists"]
        },
        {
          category: "Data & Modeling Experts",
          items: ["Hydrological modeling specialists", "Evapotranspiration calculation experts", "Drought prediction specialists"]
        },
        {
          category: "Automation & Control",
          items: ["Control system developers", "API integration specialists", "Farm automation experts"]
        }
      ]
    },
    8: {
      title: "Market Price Integration",
      description: "This feature provides real-time commodity prices and trend analysis, helping farmers make informed decisions about when and where to sell their crops. By combining government data, commercial APIs, AI forecasts, and localized market information, it ensures farmers maximize profits while minimizing post-harvest risks.",
      keyCapabilities: [
        {
          title: "Current Market Rates",
          description: "Up-to-date pricing for commodities in local and nearby markets."
        },
        {
          title: "Price Trend Analysis",
          description: "Predictive insights based on historical and real-time data."
        },
        {
          title: "Best Selling Time Recommendations",
          description: "AI-driven guidance on the optimal time to sell."
        },
        {
          title: "Nearby Market Information",
          description: "Location-based details of mandis and trading centers."
        }
      ],
      dataSources: [
        {
          category: "Government Portals (India-Specific)",
          items: ["AGMARKNET, e-NAM, OGD Platform India for reliable mandi prices and updates"]
        },
        {
          category: "Commercial Commodity Data APIs",
          items: ["APIFarmer, Fastmarkets, and similar services for standardized and real-time global/local prices"]
        },
        {
          category: "Geospatial Data",
          items: ["Database of local mandis with GPS coordinates to determine nearby markets"]
        },
        {
          category: "Historical Price Archives",
          items: ["Long-term datasets for robust trend analysis and forecasting"]
        },
        {
          category: "Time-Series Forecasting Models",
          items: ["ARIMA, LSTM, and other ML models to predict short-term price trends"]
        },
        {
          category: "Econometric/Supply-Side Models",
          items: ["Integrate yield forecasts, expected arrivals, and weather impacts for refined predictions"]
        }
      ],
      platforms: [
        {
          category: "Optimization Algorithms / Rules Engine",
          items: ["Combines yield, market forecast, and storage costs to recommend the best selling window"]
        },
        {
          category: "Multilingual Interface",
          items: ["Use Voice Interface and WhatsApp/SMS systems to deliver recommendations in local languages"]
        },
        {
          category: "Visualization Tools",
          items: ["Interactive charts and graphs to compare current, historical, and forecasted prices"]
        },
        {
          category: "Alert System Integration",
          items: ["Automated notifications for threshold-based alerts or optimal selling windows"]
        },
        {
          category: "GPS/Location Services",
          items: ["Provide farmers with nearby market details based on real-time location"]
        }
      ],
      technical: [
        {
          category: "Data Integration Specialists",
          items: ["Government API integration experts", "Commercial data feed specialists", "Real-time data processing engineers"]
        },
        {
          category: "AI & Analytics Experts",
          items: ["Time-series forecasting specialists", "Econometric modeling experts", "Optimization algorithm developers"]
        },
        {
          category: "Market Intelligence",
          items: ["Agricultural commodity analysts", "Market trend specialists", "Supply chain economists"]
        },
        {
          category: "User Experience & Delivery",
          items: ["Data visualization developers", "Mobile/web interface designers", "Location-based service specialists"]
        }
      ]
    },
    9: {
      title: "Community & Expert Support",
      description: "This feature connects farmers with agricultural experts and fellow farmers, fostering a collaborative knowledge-sharing environment. It enables peer-to-peer learning, expert consultations, and access to verified agronomic information to improve decision-making on the farm.",
      keyCapabilities: [
        {
          title: "Expert Consultation Booking",
          description: "Schedule one-on-one sessions with verified agricultural professionals."
        },
        {
          title: "Farmer Community Forums",
          description: "Structured discussion threads for sharing experiences and advice."
        },
        {
          title: "Knowledge Sharing Platform",
          description: "Curated resources including guides, videos, research summaries, and FAQs."
        },
        {
          title: "Peer-to-Peer Learning",
          description: "Virtual sessions, webinars, and interactive group learning among farmers."
        }
      ],
      dataSources: [
        {
          category: "Forum/Community Software (Custom)",
          items: ["Web or in-app discussion boards (Discourse, phpBB, or custom-built)"]
        },
        {
          category: "Social Media/Chat Integration",
          items: ["WhatsApp Groups or private Facebook Groups for real-time interaction"]
        },
        {
          category: "Content Management System (CMS)",
          items: ["Host verified content like videos, guides, and FAQs for farmers"]
        },
        {
          category: "Peer-to-Peer Training Framework",
          items: ["Virtual learning sessions via Zoom, Google Meet, or similar platforms"]
        },
        {
          category: "Curated Agronomic Expert Network",
          items: ["Verified agronomists, horticulturists, veterinarians, and agri-business consultants for consultation and forum moderation"]
        }
      ],
      platforms: [
        {
          category: "Scheduling & Booking Software",
          items: ["Enables farmers to view expert availability and book consultation slots"]
        },
        {
          category: "Video/Audio Conferencing Tools",
          items: ["Platforms like Twilio Video or Agora SDK for consultation sessions, including voice-only options"]
        },
        {
          category: "Expert Vetting & Rating System",
          items: ["Tracks expert performance and feedback to maintain trust and quality"]
        },
        {
          category: "User Profile & Contextual Data",
          items: ["Matches farmers with relevant experts or discussion groups based on crop type, location, and field history"]
        },
        {
          category: "Moderation & AI-Powered Tagging",
          items: ["NLP/AI tools categorize posts and highlight urgent issues for faster expert response"]
        }
      ],
      technical: [
        {
          category: "Community Platform Specialists",
          items: ["Forum software developers", "Social media integration experts", "Content management specialists"]
        },
        {
          category: "Communication & Conferencing",
          items: ["Video conferencing integration specialists", "Real-time communication developers", "Voice interface specialists"]
        },
        {
          category: "Expert Network Management",
          items: ["Agricultural expert recruiters", "Quality assurance specialists", "Rating system developers"]
        },
        {
          category: "AI & Matching Systems",
          items: ["NLP specialists for content categorization", "Recommendation system developers", "User matching algorithm experts"]
        }
      ]
    }
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
                  Advanced Agriculture Technology
                </div>
                <div className="text-gray-600 text-sm">
                  Explore cutting-edge {features[activeFeature].title.toLowerCase()} capabilities
                </div>
                <button 
                  onClick={() => {
                    if (features[activeFeature].id >= 1 && features[activeFeature].id <= 9) {
                      setShowDetails(!showDetails)
                    }
                  }}
                  className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-200"
                >
                  {(features[activeFeature].id >= 1 && features[activeFeature].id <= 9) ? (showDetails ? 'Hide Details' : 'View Details') : 'Coming Soon'}
                </button>
              </div>
            </div>
          </div>

          {/* Detailed Information Section */}
          {showDetails && (features[activeFeature].id >= 1 && features[activeFeature].id <= 9) && detailedInfo[features[activeFeature].id as keyof typeof detailedInfo] && (
            <div className="mt-8 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8 border border-green-200">
              <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center space-x-4 mb-6">
                    <div className="text-6xl">{features[activeFeature].icon}</div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">
                        {detailedInfo[features[activeFeature].id as keyof typeof detailedInfo].title}
                      </h3>
                      <div className="text-green-600 font-semibold">Comprehensive Technical Overview</div>
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                    {detailedInfo[features[activeFeature].id as keyof typeof detailedInfo].description}
                  </p>
                </div>

                {/* Key Capabilities Section */}
                <div className="mb-12">
                  <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center">Key Capabilities</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {detailedInfo[features[activeFeature].id as keyof typeof detailedInfo].keyCapabilities.map((capability: any, index: number) => (
                      <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
                        <h5 className="text-lg font-semibold text-green-600 mb-3">
                          {capability.title}
                        </h5>
                        <p className="text-gray-700">
                          {capability.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Resources Used Section */}
                <div className="mb-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center">Resources Used</h4>
                  
                  {/* Data Sources */}
                  <div className="mb-10">
                    <h5 className="text-xl font-semibold text-blue-600 mb-6 flex items-center">
                      <span className="text-2xl mr-3">📊</span>
                      Data Sources
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {detailedInfo[features[activeFeature].id as keyof typeof detailedInfo].dataSources.map((source: any, index: number) => (
                        <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-blue-200">
                          <h6 className="font-semibold text-blue-800 mb-3 text-sm">
                            {source.category}
                          </h6>
                          <ul className="space-y-2">
                            {source.items.map((item: string, idx: number) => (
                              <li key={idx} className="text-gray-700 text-sm flex items-start">
                                <span className="text-green-500 mr-2 mt-1">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Processing & Analysis Platforms */}
                  <div className="mb-10">
                    <h5 className="text-xl font-semibold text-purple-600 mb-6 flex items-center">
                      <span className="text-2xl mr-3">⚙️</span>
                      Processing & Analysis Platforms
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {detailedInfo[features[activeFeature].id as keyof typeof detailedInfo].platforms.map((platform: any, index: number) => (
                        <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-purple-200">
                          <h6 className="font-semibold text-purple-800 mb-3 text-sm">
                            {platform.category}
                          </h6>
                          <ul className="space-y-2">
                            {platform.items.map((item: string, idx: number) => (
                              <li key={idx} className="text-gray-700 text-sm flex items-start">
                                <span className="text-green-500 mr-2 mt-1">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technical Expertise & Algorithms */}
                  <div>
                    <h5 className="text-xl font-semibold text-orange-600 mb-6 flex items-center">
                      <span className="text-2xl mr-3">🔬</span>
                      Technical Expertise & Algorithms
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {detailedInfo[features[activeFeature].id as keyof typeof detailedInfo].technical.map((tech: any, index: number) => (
                        <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-orange-200">
                          <h6 className="font-semibold text-orange-800 mb-3 text-sm">
                            {tech.category}
                          </h6>
                          <ul className="space-y-2">
                            {tech.items.map((item: string, idx: number) => (
                              <li key={idx} className="text-gray-700 text-sm flex items-start">
                                <span className="text-green-500 mr-2 mt-1">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
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
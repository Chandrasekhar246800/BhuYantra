'use client'

import { useState } from 'react'

export default function Hardware() {
  const [activeComponent, setActiveComponent] = useState(0)

  const hardwareComponents = [
    {
      id: 1,
      name: "Soil Sensor Unit",
      icon: "🌱",
      description: "Autonomous soil monitoring system with moisture, pH, and optional NPK sensing capabilities",
      workingFlow: [
        {
          step: "Sensing",
          description: "Measures soil moisture, pH, and optionally NPK using embedded sensors"
        },
        {
          step: "Processing",
          description: "Microcontroller (ESP32/Arduino Nano) reads and formats the sensor data"
        },
        {
          step: "Transmission",
          description: "Data is sent wirelessly (WiFi/LoRa) to the IoT gateway"
        },
        {
          step: "Power",
          description: "Solar-charged Li-ion battery keeps system autonomous"
        },
        {
          step: "Deployment",
          description: "Housed in waterproof enclosure, installed in the field"
        }
      ],
      parts: [
        { name: "ESP32/Arduino Nano", cost: "400–900" },
        { name: "Capacitive moisture sensor", cost: "200–600" },
        { name: "Analog pH sensor w/ amp", cost: "850–1,800" },
        { name: "(Optional) NPK sensor", cost: "2,500–4,500" },
        { name: "Solar panel + charger PCB (5–10W)", cost: "800–1,500" },
        { name: "18650 Li-ion battery", cost: "300–600" },
        { name: "IP65 enclosure", cost: "350–1,000" },
        { name: "PCB/connectors/assembly", cost: "300–1,000" }
      ],
      costBasic: "3,200–5,500",
      costEnhanced: "6,000–9,000",
      enhancedLabel: "with NPK sensor"
    },
    {
      id: 2,
      name: "Mini Weather Station",
      icon: "🌤️",
      description: "Comprehensive weather monitoring station with multiple environmental sensors",
      workingFlow: [
        {
          step: "Sensing",
          description: "Measures temperature, humidity, rain, light, optionally wind speed/direction"
        },
        {
          step: "Processing",
          description: "Processor (Raspberry Pi Zero/ESP32) processes sensor signals"
        },
        {
          step: "Transmission",
          description: "Sends weather data to IoT gateway via WiFi/LoRa/GSM"
        },
        {
          step: "Power",
          description: "Operates using solar energy + battery backup"
        },
        {
          step: "Deployment",
          description: "Mounted outdoors in a robust, weatherproof enclosure"
        }
      ],
      parts: [
        { name: "Raspberry Pi Zero W/ESP32", cost: "400–2,000" },
        { name: "DHT22/AM2302 sensor", cost: "300–500" },
        { name: "Rain gauge (tipping-bucket)", cost: "1,400–2,500" },
        { name: "Light sensor (LDR/BME280)", cost: "250–700" },
        { name: "Wind vane/anemometer (opt.)", cost: "2,000–5,500" },
        { name: "Solar + battery (10W+)", cost: "2,000–4,000" },
        { name: "GSM/LoRa module (opt.)", cost: "900–3,000" },
        { name: "Enclosure/mount", cost: "700–2,000" },
        { name: "PCB/connectors/assembly", cost: "800–1,500" }
      ],
      costBasic: "7,000–12,000",
      costEnhanced: "20,000–55,000",
      enhancedLabel: "enhanced/rugged"
    },
    {
      id: 3,
      name: "Imaging Drone (NDVI/Multispectral)",
      icon: "🚁",
      description: "Advanced aerial imaging system for crop health assessment and precision agriculture",
      workingFlow: [
        {
          step: "Aerial Mapping",
          description: "Drone flies over field, takes multispectral/NDVI or regular images"
        },
        {
          step: "Processing",
          description: "Images processed onboard or after flight for plant health assessment"
        },
        {
          step: "Transmission",
          description: "Data sent/loaded to IoT gateway/cloud"
        },
        {
          step: "Output",
          description: "Delivers crop stress maps, disease detection, yield estimation"
        }
      ],
      parts: [
        { name: "Quadcopter frame + controller", cost: "20,000–45,000" },
        { name: "Motor/ESCs/props", cost: "8,000–16,000" },
        { name: "Flight control board (GPS/IMU)", cost: "12,000–30,000" },
        { name: "NDVI/multispectral camera", cost: "35,000–2,10,000" },
        { name: "High-capacity LiPo battery", cost: "6,000–12,000" },
        { name: "Ground station/controller (opt.)", cost: "18,000–45,000" },
        { name: "Assembly/calibration/misc", cost: "8,000–20,000" }
      ],
      costBasic: "60,000–1,20,000",
      costEnhanced: "1,50,000–5,00,000",
      enhancedLabel: "high-end NDVI drone"
    },
    {
      id: 4,
      name: "IoT Gateway / Mobile Hub",
      icon: "📡",
      description: "Central hub for data collection, aggregation, and cloud transmission",
      workingFlow: [
        {
          step: "Collection",
          description: "Receives all field sensor and imaging data wirelessly"
        },
        {
          step: "Aggregation/Preprocessing",
          description: "Assembles and formats for cloud upload"
        },
        {
          step: "Transmission",
          description: "Sends full dataset via 4G/LTE, WiFi, or LAN to cloud"
        },
        {
          step: "Output",
          description: "Provides data to farmer's dashboard/app, supports alerts, can work offline temporarily"
        }
      ],
      parts: [
        { name: "Raspberry Pi 4/ESP32", cost: "400–7,500" },
        { name: "4G/LTE dongle", cost: "1,200–4,000" },
        { name: "Solar panel + battery", cost: "2,000–5,000" },
        { name: "LCD/TFT display (opt.)", cost: "800–2,000" },
        { name: "LoRa/BLE/WiFi module", cost: "700–2,500" },
        { name: "Rugged enclosure/mount", cost: "500–1,500" },
        { name: "PCB/connectors/assembly", cost: "400–1,200" }
      ],
      costBasic: "9,000–18,000",
      costEnhanced: "16,000–30,000",
      enhancedLabel: "enhanced/rugged"
    }
  ]

  return (
    <section id="hardware" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Hardware Components
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Complete breakdown of IoT devices and sensors that power BhuYantra&apos;s real-time 
            monitoring capabilities, from field-level sensors to advanced aerial imaging systems.
          </p>
        </div>

        {/* Component Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {hardwareComponents.map((component, index) => (
            <button
              key={component.id}
              onClick={() => setActiveComponent(index)}
              className={`p-6 rounded-xl text-center transition-all duration-300 ${
                activeComponent === index
                  ? 'bg-gradient-to-br from-green-500 to-blue-600 text-white shadow-xl transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-50 hover:shadow-md border border-gray-200'
              }`}
            >
              <div className="text-4xl mb-3">{component.icon}</div>
              <div className="font-semibold text-sm leading-tight">
                {component.name}
              </div>
            </button>
          ))}
        </div>

        {/* Active Component Details */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          {/* Component Header */}
          <div className="bg-gradient-to-r from-green-500 to-blue-600 p-8 text-white">
            <div className="flex items-center space-x-4 mb-4">
              <div className="text-6xl">{hardwareComponents[activeComponent].icon}</div>
              <div>
                <h3 className="text-3xl font-bold mb-2">
                  {hardwareComponents[activeComponent].name}
                </h3>
                <p className="text-green-100">
                  {hardwareComponents[activeComponent].description}
                </p>
              </div>
            </div>
          </div>

          <div className="p-8">
            {/* Working Flow */}
            <div className="mb-10">
              <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">⚙️</span>
                Working Flow
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {hardwareComponents[activeComponent].workingFlow.map((flow, index) => (
                  <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-5 border border-green-200">
                    <div className="flex items-center mb-3">
                      <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mr-3">
                        {index + 1}
                      </div>
                      <h5 className="font-bold text-gray-900">{flow.step}</h5>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {flow.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Main Parts & Cost */}
            <div className="mb-10">
              <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">🔧</span>
                Main Parts & Typical Cost
              </h4>
              <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
                      <th className="text-left py-4 px-6 font-semibold">Part</th>
                      <th className="text-right py-4 px-6 font-semibold">Cost (₹)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {hardwareComponents[activeComponent].parts.map((part, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="py-3 px-6 text-gray-800">{part.name}</td>
                        <td className="py-3 px-6 text-right font-medium text-gray-900">{part.cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Total Cost Summary */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-xl p-6 border-2 border-green-300">
                <div className="text-green-700 font-semibold mb-2 flex items-center">
                  <span className="text-2xl mr-2">💰</span>
                  Basic Configuration
                </div>
                <div className="text-3xl font-bold text-green-900">
                  ₹{hardwareComponents[activeComponent].costBasic}
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl p-6 border-2 border-blue-300">
                <div className="text-blue-700 font-semibold mb-2 flex items-center">
                  <span className="text-2xl mr-2">⭐</span>
                  Enhanced ({hardwareComponents[activeComponent].enhancedLabel})
                </div>
                <div className="text-3xl font-bold text-blue-900">
                  ₹{hardwareComponents[activeComponent].costEnhanced}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hardware Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "4", label: "Hardware Units", icon: "🔧" },
            { number: "Solar", label: "Powered", icon: "☀️" },
            { number: "IP65", label: "Weatherproof", icon: "💧" },
            { number: "Wireless", label: "Connectivity", icon: "📡" }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:shadow-md transition-shadow duration-200">
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

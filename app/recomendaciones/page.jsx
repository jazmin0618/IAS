// app/inteligencia-artificial/page.js
"use client"
import { useState } from 'react'

export default function InteligenciaArtificial() {
  const [activeTab, setActiveTab] = useState('que-es')

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Inteligencia Artificial
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre el fascinante mundo de la IA y cómo está transformando nuestra vida cotidiana
          </p>
        </div>

        {/* Tabs de Navegación */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {[
            { id: 'que-es', label: '¿Qué es la IA?' },
            { id: 'tipos', label: 'Tipos de IA' },
            { id: 'aplicaciones', label: 'Aplicaciones' },
            { id: 'futuro', label: 'Futuro' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Contenido de los Tabs */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          
          {activeTab === 'que-es' && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">¿Qué es la Inteligencia Artificial?</h2>
              <p className="text-lg text-gray-600">
                La Inteligencia Artificial (IA) se refiere a la simulación de procesos de inteligencia humana 
                por parte de máquinas, especialmente sistemas informáticos.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-blue-800">🧠 IA Débil (Narrow AI)</h3>
                  <p className="text-gray-700">
                    Diseñada para realizar tareas específicas (como reconocimiento facial, asistentes virtuales). 
                    Es la IA que usamos actualmente.
                  </p>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-purple-800">🚀 IA Fuerte (General AI)</h3>
                  <p className="text-gray-700">
                    IA que igualaría o superaría la inteligencia humana en cualquier tarea. 
                    Todavía es teórica y en desarrollo.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tipos' && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Tipos de IA Disponibles</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">ChatGPT (OpenAI)</h3>
                  <p className="text-gray-600 mt-2">
                    Modelo de lenguaje para conversación, escritura creativa, programación y análisis de texto.
                  </p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">Midjourney / DALL-E</h3>
                  <p className="text-gray-600 mt-2">
                    IA generativa de imágenes a partir de descripciones textuales.
                  </p>
                </div>
                
                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">Google Bard</h3>
                  <p className="text-gray-600 mt-2">
                    Asistente de IA integrado con la búsqueda de Google, ideal para investigación.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">Claude (Anthropic)</h3>
                  <p className="text-gray-600 mt-2">
                    Especializado en análisis de documentos largos y conversaciones éticas.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'aplicaciones' && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Aplicaciones en la Vida Real</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-green-800">🎓 Educación</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Tutores personalizados 24/7</li>
                    <li>Generación de material de estudio</li>
                    <li>Corrección de trabajos</li>
                    <li>Explicaciones adaptadas</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-blue-800">💼 Trabajo</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Automatización de tareas repetitivas</li>
                    <li>Análisis de datos</li>
                    <li>Generación de informes</li>
                    <li>Asistencia en customer service</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-purple-800">🎨 Creatividad</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Generación de imágenes y arte</li>
                    <li>Escritura creativa</li>
                    <li>Composición musical</li>
                    <li>Diseño gráfico</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-orange-800">🔬 Investigación</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Análisis de papers científicos</li>
                    <li>Extracción de información</li>
                    <li>Generación de hipótesis</li>
                    <li>Resumen de documentos largos</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'futuro' && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">El Futuro de la IA</h2>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">🤖 IA más Especializada</h3>
                  <p>Modelos específicos para medicina, derecho, educación, etc.</p>
                </div>
                
                <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">🔍 Mayor Integración</h3>
                  <p>IA integrada en todas las aplicaciones y dispositivos que usamos.</p>
                </div>
                
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">🎯 Personalización</h3>
                  <p>Asistentes que aprenden de nuestros hábitos y preferencias.</p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            ¿No sabes qué IA es la mejor para ti?
          </p>
          <a 
            href="/recomendador-ia" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition"
          >
            Descúbrelo con nuestro Recomendador
          </a>
        </div>

      </div>
    </div>
  )
}
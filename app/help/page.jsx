// app/ayuda/page.js - PÁGINA COMPLETA DEL CHATBOT
"use client"
import { useState, useRef, useEffect } from 'react'

export default function AyudaPage() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "¡Hola! Soy tu asistente de IA especializado. ¿En qué puedo ayudarte hoy sobre inteligencia artificial?",
      isBot: true
    }
  ])
  const [inputText, setInputText] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

  // Base de conocimiento expandida
  const knowledgeBase = {
    'hola': '¡Hola! 👋 Soy tu experto en IA. Puedo ayudarte con:\n• Conceptos de IA\n• Recomendaciones de herramientas\n• Tutoriales y guías\n• Resolución de dudas\n\n¿Por dónde quieres empezar?',
    'qué es la ia': '🤖 **Inteligencia Artificial (IA)**\n\nEs la simulación de procesos de inteligencia humana por máquinas, especialmente sistemas informáticos. Incluye:\n\n• **Aprendizaje automático**\n• **Procesamiento de lenguaje natural**\n• **Visión por computadora**\n• **Robótica**\n\n¿Te interesa algún área específica?',
    'tipos de ia': '🧠 **Tipos de IA:**\n\n• **IA Débil**: Especializada en tareas específicas (reconocimiento facial, chatbots)\n• **IA Fuerte**: Inteligencia general como humanos (aún en desarrollo)\n• **Machine Learning**: Aprende de datos\n• **Deep Learning**: Redes neuronales profundas\n• **IA Generativa**: Crea contenido nuevo (ChatGPT, Midjourney)',
    'machine learning': '📊 **Machine Learning**\n\nSubcampo de IA donde las máquinas aprenden de datos sin programación explícita.\n\n**Tipos:**\n• Supervisado (con etiquetas)\n• No supervisado (sin etiquetas)\n• Por refuerzo (aprende de recompensas)\n\n¿Quieres saber sobre algoritmos específicos?',
    'chatgpt': '💬 **ChatGPT**\n\nModelo de lenguaje de OpenAI basado en GPT-4.\n\n**Usos:**\n• Escritura y edición\n• Programación\n• Análisis de datos\n• Creatividad\n• Tutorías\n\n**Alternativas:** Claude, Bard, Copilot',
    'python': '🐍 **Python para IA**\n\nLenguaje más popular por:\n• Sintaxis simple\n• Librerías poderosas\n• Gran comunidad\n\n**Librerías clave:**\n• TensorFlow/Keras (redes neuronales)\n• PyTorch (investigación)\n• Scikit-learn (ML tradicional)\n• Pandas (análisis de datos)',
    'recomendación': '🚀 **Recomendaciones para empezar:**\n\n1. **Python** como primer lenguaje\n2. **Scikit-learn** para ML básico\n3. **TensorFlow** para redes neuronales\n4. **OpenAI API** para IA generativa\n5. **Kaggle** para practicar con datos reales\n\n¿Qué te interesa aprender primero?',
    'curso': '📚 **Rutas de aprendizaje:**\n\n**Principiante:**\n• Python básico\n• Matemáticas para IA\n• Introducción a ML\n\n**Intermedio:**\n• Redes neuronales\n• Procesamiento de lenguaje\n• Visión computacional\n\n**Avanzado:**\n• Transformers\n• RL (Aprendizaje por refuerzo)\n• IA generativa',
    'herramientas': '🛠️ **Herramientas populares:**\n\n• **Desarrollo**: Python, Jupyter, VS Code\n• **ML**: Scikit-learn, TensorFlow, PyTorch\n• **Datos**: Pandas, NumPy, Matplotlib\n• **Nube**: AWS, Google Cloud, Azure\n• **IA Gen**: ChatGPT, Midjourney, Stable Diffusion',
    'gracias': '¡De nada! 😊 ¿Hay algo más en lo que pueda ayudarte sobre IA? Estoy aquí para resolver todas tus dudas.',
    'adiós': '¡Hasta luego! 👋 Fue un gusto ayudarte en tu journey de IA. ¡Vuelve cuando quieras!'
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = async () => {
    if (!inputText.trim()) return

    const userMessage = {
      id: Date.now(),
      text: inputText,
      isBot: false
    }

    setMessages(prev => [...prev, userMessage])
    setInputText('')
    setIsLoading(true)

    // Simular "pensamiento" de la IA
    setTimeout(() => {
      const userText = inputText.toLowerCase()
      let response = "🤔 Interesante pregunta. Como asistente especializado en IA, te recomiendo:\n\n• Investigar más sobre ese tema\n• Probar con herramientas prácticas\n• Unirte a comunidades de IA\n\n¿Hay algo específico sobre inteligencia artificial que te gustaría explorar?"

      // Buscar respuesta en la base de conocimiento
      for (const [key, value] of Object.entries(knowledgeBase)) {
        if (userText.includes(key)) {
          response = value
          break
        }
      }

      const botMessage = {
        id: Date.now() + 1,
        text: response,
        isBot: true
      }

      setMessages(prev => [...prev, botMessage])
      setIsLoading(false)
    }, 1500)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const clearChat = () => {
    setMessages([
      {
        id: 1,
        text: "¡Hola! Soy tu asistente de IA especializado. ¿En qué puedo ayudarte hoy sobre inteligencia artificial?",
        isBot: true
      }
    ])
  }

  const quickQuestions = [
    "¿Qué es la IA?",
    "Recomiéndame herramientas",
    "¿Cómo empezar en IA?",
    "Tipos de Machine Learning"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Header de la página */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Centro de Ayuda con IA
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Chatea con nuestro asistente especializado en Inteligencia Artificial. 
            Resuelve tus dudas y obtén recomendaciones personalizadas.
          </p>
        </div>

        {/* Chatbot en página completa */}
        <div className="bg-black rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          
          {/* Header del chat */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl">🤖</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Asistente IA</h2>
                  <p className="text-blue-100">Especialista en Inteligencia Artificial</p>
                </div>
              </div>
              <button
                onClick={clearChat}
                className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition"
              >
                Nuevo Chat
              </button>
            </div>
          </div>

          {/* Preguntas rápidas */}
          <div className="p-4 bg-gray-50 border-b">
            <p className="text-sm text-gray-600 mb-3">Preguntas frecuentes:</p>
            <div className="flex flex-wrap gap-2">
              {quickQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => setInputText(question)}
                  className="bg-white border border-gray-300 text-gray-700 px-3 py-2 rounded-lg text-sm hover:bg-gray-50 transition"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          {/* Área de mensajes */}
          <div className="h-96 p-6 overflow-y-auto bg-white">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-6 ${message.isBot ? 'text-left' : 'text-right'}`}
              >
                <div className={`inline-block max-w-[80%] p-4 rounded-2xl ${
                  message.isBot
                    ? 'bg-blue-50 border border-blue-100 text-gray-800 rounded-bl-none'
                    : 'bg-blue-500 text-white rounded-br-none'
                }`}>
                  <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.text}</p>
                </div>
                <div className={`text-xs text-gray-500 mt-2 ${message.isBot ? 'text-left' : 'text-right'}`}>
                  {message.isBot ? 'Asistente IA' : 'Tú'}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="text-left mb-6">
                <div className="inline-block max-w-[80%] p-4 rounded-2xl bg-blue-50 border border-blue-100 rounded-bl-none">
                  <div className="flex space-x-2 items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <span className="text-sm text-blue-600 ml-2">Escribiendo...</span>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Área de input */}
          <div className="p-6 border-t border-gray-200 bg-gray-50">
            <div className="flex space-x-4">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Escribe tu pregunta sobre IA..."
                className="flex-1 border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                disabled={isLoading}
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || !inputText.trim()}
                className="bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition font-semibold"
              >
                Enviar
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-3 text-center">
              Asistente especializado • Respuestas en segundos • Base de conocimiento actualizada
            </p>
          </div>
        </div>

        {/* Información adicional */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="font-semibold text-gray-800 mb-2">💡 Consejos</h3>
            <p className="text-sm text-gray-600">Pregunta sobre conceptos específicos para respuestas más precisas</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="font-semibold text-gray-800 mb-2">🚀 Temas Populares</h3>
            <p className="text-sm text-gray-600">Machine Learning, Deep Learning, IA Generativa, Herramientas</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="font-semibold text-gray-800 mb-2">⏱️ Respuestas Rápidas</h3>
            <p className="text-sm text-gray-600">Obtén ayuda instantánea las 24/7</p>
          </div>
        </div>
      </div>
    </div>
  )
}
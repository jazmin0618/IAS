// components/SimpleChatbot.js
"use client"
import { useState, useRef, useEffect } from 'react'

export default function SimpleChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "¡Hola! Soy tu asistente de IA. ¿En qué puedo ayudarte sobre inteligencia artificial?",
      isBot: true
    }
  ])
  const [inputText, setInputText] = useState('')
  const messagesEndRef = useRef(null)

  // Base de conocimiento de respuestas
  const knowledgeBase = {
    'hola': '¡Hola! ¿Cómo estás? Soy tu asistente de IA. ¿En qué puedo ayudarte?',
    'qué es la ia': 'La Inteligencia Artificial (IA) es la simulación de procesos de inteligencia humana por máquinas, especialmente sistemas informáticos.',
    'tipos de ia': 'Existen varios tipos de IA: IA débil (específica), IA fuerte (general), machine learning, deep learning, y más.',
    'machine learning': 'Machine Learning es un subset de IA que permite a las máquinas aprender de datos sin ser programadas explícitamente.',
    'chatgpt': 'ChatGPT es un modelo de lenguaje de IA desarrollado por OpenAI, especializado en conversación y generación de texto.',
    'python': 'Python es el lenguaje de programación más popular para IA y machine learning por su simplicidad y poderosas librerías.',
    'recomendación': 'Te recomiendo empezar con Python para IA, luego aprender machine learning con scikit-learn, y después deep learning con TensorFlow.',
    'gracias': '¡De nada! ¿Hay algo más en lo que pueda ayudarte sobre IA?',
    'adiós': '¡Hasta luego! Fue un gusto ayudarte. ¡Vuelve pronto!'
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = () => {
    if (!inputText.trim()) return

    const userMessage = {
      id: Date.now(),
      text: inputText,
      isBot: false
    }

    setMessages(prev => [...prev, userMessage])
    setInputText('')

    // Simular "pensamiento" de la IA
    setTimeout(() => {
      const userText = inputText.toLowerCase()
      let response = "Interesante pregunta. Como asistente de IA, te recomiendo investigar más sobre ese tema. ¿Hay algo específico sobre IA que te gustaría saber?"

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
    }, 1000)
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
        text: "¡Hola! Soy tu asistente de IA. ¿En qué puedo ayudarte sobre inteligencia artificial?",
        isBot: true
      }
    ])
  }

  return (
    <>
      {/* Botón flotante */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-green-500 to-blue-500 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform z-50"
      >
        <span className="text-xl">🤖</span>
      </button>

      {/* Ventana del chat */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 h-96 bg-white rounded-lg shadow-xl border flex flex-col z-50">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-3 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className="text-lg">🤖</span>
              <span className="font-semibold">Asistente IA</span>
            </div>
            <div className="flex space-x-2">
              <button onClick={clearChat} className="text-white hover:text-gray-200">🔄</button>
              <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">✕</button>
            </div>
          </div>

          {/* Mensajes */}
          <div className="flex-1 p-3 overflow-y-auto bg-gray-50">
            {messages.map((message) => (
              <div key={message.id} className={`mb-2 ${message.isBot ? 'text-left' : 'text-right'}`}>
                <div className={`inline-block max-w-[90%] p-2 rounded-lg ${
                  message.isBot ? 'bg-back border text-gray-800' : 'bg-blue-500 text-white'
                }`}>
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Pregunta sobre IA..."
                className="flex-1 border border-black-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button
                onClick={sendMessage}
                className="bg-blue-500 text-black px-4 rounded hover:bg-blue-600"
              >
                ➤
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
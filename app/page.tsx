import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen"> 
      
        {/* Título principal con estilo vintage */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold pb-4 mb-6 border-b-4 border-amber-600 inline-block text-amber-100 font-serif">
            Un poco sobre la IA
          </h1>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Primer recuadro - Qué es la IA */}
        <div className="w-full bg-gradient-to-br from-gray-800 to-gray-700 py-12 px-8 my-12 rounded-2xl shadow-2xl border border-amber-900/30 hover:shadow-amber-900/20 transition-all duration-300">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="w-3 h-12 bg-amber-500 mr-4 rounded-full"></div>
              <h2 className="text-4xl font-bold text-amber-100 font-serif">¿Qué es la Inteligencia Artificial?</h2>
            </div>
            
            <div className="space-y-6 text-amber-50/90 leading-relaxed">
              <p className="text-xl">
                La <span className="text-amber-300 font-semibold">Inteligencia Artificial (IA)</span> es un campo de la informática que se enfoca 
                en la creación de sistemas o máquinas que pueden realizar tareas que normalmente 
                requieren inteligencia humana.
              </p>
              
              <p className="text-lg">
                En esencia, la IA busca <span className="text-amber-300">simular, replicar y mejorar</span> procesos de la inteligencia humana como:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-gray-750 p-6 rounded-xl border border-amber-800/30">
                  <h4 className="text-amber-300 text-xl font-bold mb-3">🧠 Aprendizaje</h4>
                  <p className="text-amber-100/80">Adquirir información y reglas para el uso de la información.</p>
                </div>
                
                <div className="bg-gray-750 p-6 rounded-xl border border-amber-800/30">
                  <h4 className="text-amber-300 text-xl font-bold mb-3">💭 Razonamiento</h4>
                  <p className="text-amber-100/80">Usar reglas para llegar a conclusiones aproximadas o definitivas.</p>
                </div>
                
                <div className="bg-gray-750 p-6 rounded-xl border border-amber-800/30">
                  <h4 className="text-amber-300 text-xl font-bold mb-3">🎯 Resolución de problemas</h4>
                  <p className="text-amber-100/80">Aplicar el conocimiento y el razonamiento para alcanzar un objetivo.</p>
                </div>
                
                <div className="bg-gray-750 p-6 rounded-xl border border-amber-800/30">
                  <h4 className="text-amber-300 text-xl font-bold mb-3">👁️ Percepción</h4>
                  <p className="text-amber-100/80">Interpretar datos sensoriales para comprender el entorno.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

    

        {/* Segundo recuadro - ¿Es necesario usar IA? */}
        <div className="w-full bg-gradient-to-br from-gray-800 to-gray-700 py-12 px-8 my-12 rounded-2xl shadow-2xl border border-amber-900/30 hover:shadow-amber-900/20 transition-all duration-300">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="w-3 h-12 bg-amber-500 mr-4 rounded-full"></div>
              <h2 className="text-4xl font-bold text-amber-100 font-serif">¿Es necesario usar IA?</h2>
            </div>
            
            <div className="space-y-8 text-amber-50/90">
              {/* Cita destacada */}
              <div className="bg-amber-900/20 border-l-4 border-amber-500 pl-6 py-4 rounded-r-xl">
                <p className="text-xl italic text-amber-200 leading-relaxed">
                  "La respuesta es <span className="text-amber-300 font-semibold">sí</span>, es cada vez más necesario y, en muchos campos, 
                  <span className="text-amber-300 font-semibold"> indispensable</span> para seguir siendo competitivo e innovador."
                </p>
              </div>

              {/* Ámbito Empresarial */}
              <div className="mt-12">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-amber-100 font-bold text-sm">1</span>
                  </div>
                  <h3 className="text-2xl font-bold text-amber-200">En el Ámbito Empresarial y Laboral</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-750 p-6 rounded-xl border border-amber-800/30">
                    <h4 className="text-amber-300 text-lg font-bold mb-3">⚡ Automatización</h4>
                    <p className="text-amber-100/80 text-sm leading-relaxed">
                      Libera a los empleados de tareas repetitivas para enfocarse en trabajo creativo y estratégico.
                    </p>
                  </div>
                  
                  <div className="bg-gray-750 p-6 rounded-xl border border-amber-800/30">
                    <h4 className="text-amber-300 text-lg font-bold mb-3">📊 Optimización</h4>
                    <p className="text-amber-100/80 text-sm leading-relaxed">
                      Analiza grandes volúmenes de datos para mejores decisiones y predicciones de mercado.
                    </p>
                  </div>
                  
                  <div className="bg-gray-750 p-6 rounded-xl border border-amber-800/30">
                    <h4 className="text-amber-300 text-lg font-bold mb-3">🎯 Personalización</h4>
                    <p className="text-amber-100/80 text-sm leading-relaxed">
                      Recomendaciones personalizadas que aumentan la satisfacción del cliente y ventas.
                    </p>
                  </div>
                  
                  <div className="bg-gray-750 p-6 rounded-xl border border-amber-800/30">
                    <h4 className="text-amber-300 text-lg font-bold mb-3">🚀 Innovación</h4>
                    <p className="text-amber-100/80 text-sm leading-relaxed">
                      Desarrollo de nuevos productos y servicios que transforman industrias completas.
                    </p>
                  </div>
                </div>
              </div>

              {/* Investigación y Sociedad */}
              <div className="mt-12">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-amber-100 font-bold text-sm">2</span>
                  </div>
                  <h3 className="text-2xl font-bold text-amber-200">En la Investigación y la Sociedad</h3>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gray-750 p-6 rounded-xl border border-amber-800/30">
                    <h4 className="text-amber-300 text-lg font-bold mb-3">🏥 Medicina</h4>
                    <p className="text-amber-100/80 text-sm leading-relaxed">
                      Diagnóstico temprano y descubrimiento acelerado de fármacos.
                    </p>
                  </div>
                  
                  <div className="bg-gray-750 p-6 rounded-xl border border-amber-800/30">
                    <h4 className="text-amber-300 text-lg font-bold mb-3">🔬 Ciencia</h4>
                    <p className="text-amber-100/80 text-sm leading-relaxed">
                      Simulación de procesos complejos y análisis de datos a gran escala.
                    </p>
                  </div>
                  
                  <div className="bg-gray-750 p-6 rounded-xl border border-amber-800/30">
                    <h4 className="text-amber-300 text-lg font-bold mb-3">🌆 Eficiencia</h4>
                    <p className="text-amber-100/80 text-sm leading-relaxed">
                      Ciudades inteligentes con tráfico y energía optimizados.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
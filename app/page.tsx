import React from 'react';

export default function Home() {
  return (
    <div>
      <main style={{
        padding: '32px',
        background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)',
        minHeight: '100vh',
        fontFamily: 'Georgia, Times New Roman, serif'
      }}>
      
        {/* Título principal con estilo vintage */}
        <div style={{
          textAlign: 'center',
          marginBottom: '48px'
        }}>
          <h1 style={{
            fontSize: '60px',
            fontWeight: 'bold',
            paddingBottom: '16px',
            marginBottom: '24px',
            borderBottom: '4px solid #d97706',
            display: 'inline-block',
            color: '#fef3c7',
            fontFamily: 'Georgia, serif'
          }}>
            Un poco sobre la IA
          </h1>
          <div style={{
            width: '96px',
            height: '4px',
            backgroundColor: '#d97706',
            margin: '16px auto 0',
            borderRadius: '9999px'
          }}></div>
        </div>

        {/* Primer recuadro - Qué es la IA */}
        <div style={{
          width: '100%',
          background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)',
          padding: '48px 32px',
          margin: '48px 0',
          borderRadius: '16px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          border: '1px solid rgba(146, 64, 14, 0.3)',
          transition: 'all 0.3s ease'
        }}>
          <div style={{
            maxWidth: '1152px',
            margin: '0 auto'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '32px'
            }}>
              <div style={{
                width: '12px',
                height: '48px',
                backgroundColor: '#d97706',
                marginRight: '16px',
                borderRadius: '9999px'
              }}></div>
              <h2 style={{
                fontSize: '36px',
                fontWeight: 'bold',
                color: '#fef3c7',
                fontFamily: 'Georgia, serif'
              }}>¿Qué es la Inteligencia Artificial?</h2>
            </div>
            
            <div style={{
              color: 'rgba(254, 243, 199, 0.9)',
              lineHeight: '1.75'
            }}>
              <p style={{
                fontSize: '20px',
                marginBottom: '24px'
              }}>
                La <span style={{color: '#fcd34d', fontWeight: '600'}}>Inteligencia Artificial (IA)</span> es un campo de la informática que se enfoca 
                en la creación de sistemas o máquinas que pueden realizar tareas que normalmente 
                requieren inteligencia humana.
              </p>
              
              <p style={{
                fontSize: '18px',
                marginBottom: '32px'
              }}>
                En esencia, la IA busca <span style={{color: '#fcd34d', fontWeight: '600'}}>simular, replicar y mejorar</span> procesos de la inteligencia humana como:
              </p>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '24px',
                marginTop: '32px'
              }}>
                <div style={{
                  backgroundColor: '#4b5563',
                  padding: '24px',
                  borderRadius: '12px',
                  border: '1px solid rgba(146, 64, 14, 0.3)'
                }}>
                  <h4 style={{
                    color: '#fcd34d',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    marginBottom: '12px'
                  }}>🧠 Aprendizaje</h4>
                  <p style={{
                    color: 'rgba(254, 243, 199, 0.8)'
                  }}>Adquirir información y reglas para el uso de la información.</p>
                </div>
                
                <div style={{
                  backgroundColor: '#4b5563',
                  padding: '24px',
                  borderRadius: '12px',
                  border: '1px solid rgba(146, 64, 14, 0.3)'
                }}>
                  <h4 style={{
                    color: '#fcd34d',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    marginBottom: '12px'
                  }}>💭 Razonamiento</h4>
                  <p style={{
                    color: 'rgba(254, 243, 199, 0.8)'
                  }}>Usar reglas para llegar a conclusiones aproximadas o definitivas.</p>
                </div>
                
                <div style={{
                  backgroundColor: '#4b5563',
                  padding: '24px',
                  borderRadius: '12px',
                  border: '1px solid rgba(146, 64, 14, 0.3)'
                }}>
                  <h4 style={{
                    color: '#fcd34d',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    marginBottom: '12px'
                  }}>🎯 Resolución de problemas</h4>
                  <p style={{
                    color: 'rgba(254, 243, 199, 0.8)'
                  }}>Aplicar el conocimiento y el razonamiento para alcanzar un objetivo.</p>
                </div>
                
                <div style={{
                  backgroundColor: '#4b5563',
                  padding: '24px',
                  borderRadius: '12px',
                  border: '1px solid rgba(146, 64, 14, 0.3)'
                }}>
                  <h4 style={{
                    color: '#fcd34d',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    marginBottom: '12px'
                  }}>👁️ Percepción</h4>
                  <p style={{
                    color: 'rgba(254, 243, 199, 0.8)'
                  }}>Interpretar datos sensoriales para comprender el entorno.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Segundo recuadro - ¿Es necesario usar IA? */}
        <div style={{
          width: '100%',
          background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)',
          padding: '48px 32px',
          margin: '48px 0',
          borderRadius: '16px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          border: '1px solid rgba(146, 64, 14, 0.3)',
          transition: 'all 0.3s ease'
        }}>
          <div style={{
            maxWidth: '1152px',
            margin: '0 auto'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '32px'
            }}>
              <div style={{
                width: '12px',
                height: '48px',
                backgroundColor: '#d97706',
                marginRight: '16px',
                borderRadius: '9999px'
              }}></div>
              <h2 style={{
                fontSize: '36px',
                fontWeight: 'bold',
                color: '#fef3c7',
                fontFamily: 'Georgia, serif'
              }}>¿Es necesario usar IA?</h2>
            </div>
            
            <div style={{
              color: 'rgba(254, 243, 199, 0.9)',
              lineHeight: '1.75'
            }}>
              {/* Cita destacada */}
              <div style={{
                backgroundColor: 'rgba(180, 83, 9, 0.2)',
                borderLeft: '4px solid #d97706',
                paddingLeft: '24px',
                paddingTop: '16px',
                paddingBottom: '16px',
                borderRadius: '0 12px 12px 0',
                marginBottom: '32px'
              }}>
                <p style={{
                  fontSize: '20px',
                  fontStyle: 'italic',
                  color: '#fef3c7',
                  lineHeight: '1.75'
                }}>
                  "La respuesta es <span style={{color: '#fcd34d', fontWeight: '600'}}>sí</span>, es cada vez más necesario y, en muchos campos, 
                  <span style={{color: '#fcd34d', fontWeight: '600'}}> indispensable</span> para seguir siendo competitivo e innovador."
                </p>
              </div>

              {/* Ámbito Empresarial */}
              <div style={{marginTop: '48px'}}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '24px'
                }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    backgroundColor: '#d97706',
                    borderRadius: '9999px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '12px'
                  }}>
                    <span style={{
                      color: '#fef3c7',
                      fontWeight: 'bold',
                      fontSize: '14px'
                    }}>1</span>
                  </div>
                  <h3 style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: '#fde68a'
                  }}>En el Ámbito Empresarial y Laboral</h3>
                </div>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '24px'
                }}>
                  <div style={{
                    backgroundColor: '#4b5563',
                    padding: '24px',
                    borderRadius: '12px',
                    border: '1px solid rgba(146, 64, 14, 0.3)'
                  }}>
                    <h4 style={{
                      color: '#fcd34d',
                      fontSize: '18px',
                      fontWeight: 'bold',
                      marginBottom: '12px'
                    }}>⚡ Automatización</h4>
                    <p style={{
                      color: 'rgba(254, 243, 199, 0.8)',
                      fontSize: '14px',
                      lineHeight: '1.75'
                    }}>
                      Libera a los empleados de tareas repetitivas para enfocarse en trabajo creativo y estratégico.
                    </p>
                  </div>
                  
                  <div style={{
                    backgroundColor: '#4b5563',
                    padding: '24px',
                    borderRadius: '12px',
                    border: '1px solid rgba(146, 64, 14, 0.3)'
                  }}>
                    <h4 style={{
                      color: '#fcd34d',
                      fontSize: '18px',
                      fontWeight: 'bold',
                      marginBottom: '12px'
                    }}>📊 Optimización</h4>
                    <p style={{
                      color: 'rgba(254, 243, 199, 0.8)',
                      fontSize: '14px',
                      lineHeight: '1.75'
                    }}>
                      Analiza grandes volúmenes de datos para mejores decisiones y predicciones de mercado.
                    </p>
                  </div>
                  
                  <div style={{
                    backgroundColor: '#4b5563',
                    padding: '24px',
                    borderRadius: '12px',
                    border: '1px solid rgba(146, 64, 14, 0.3)'
                  }}>
                    <h4 style={{
                      color: '#fcd34d',
                      fontSize: '18px',
                      fontWeight: 'bold',
                      marginBottom: '12px'
                    }}>🎯 Personalización</h4>
                    <p style={{
                      color: 'rgba(254, 243, 199, 0.8)',
                      fontSize: '14px',
                      lineHeight: '1.75'
                    }}>
                      Recomendaciones personalizadas que aumentan la satisfacción del cliente y ventas.
                    </p>
                  </div>
                  
                  <div style={{
                    backgroundColor: '#4b5563',
                    padding: '24px',
                    borderRadius: '12px',
                    border: '1px solid rgba(146, 64, 14, 0.3)'
                  }}>
                    <h4 style={{
                      color: '#fcd34d',
                      fontSize: '18px',
                      fontWeight: 'bold',
                      marginBottom: '12px'
                    }}>🚀 Innovación</h4>
                    <p style={{
                      color: 'rgba(254, 243, 199, 0.8)',
                      fontSize: '14px',
                      lineHeight: '1.75'
                    }}>
                      Desarrollo de nuevos productos y servicios que transforman industrias completas.
                    </p>
                  </div>
                </div>
              </div>

              {/* Investigación y Sociedad */}
              <div style={{marginTop: '48px'}}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '24px'
                }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    backgroundColor: '#d97706',
                    borderRadius: '9999px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '12px'
                  }}>
                    <span style={{
                      color: '#fef3c7',
                      fontWeight: 'bold',
                      fontSize: '14px'
                    }}>2</span>
                  </div>
                  <h3 style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: '#fde68a'
                  }}>En la Investigación y la Sociedad</h3>
                </div>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '24px'
                }}>
                  <div style={{
                    backgroundColor: '#4b5563',
                    padding: '24px',
                    borderRadius: '12px',
                    border: '1px solid rgba(146, 64, 14, 0.3)'
                  }}>
                    <h4 style={{
                      color: '#fcd34d',
                      fontSize: '18px',
                      fontWeight: 'bold',
                      marginBottom: '12px'
                    }}>🏥 Medicina</h4>
                    <p style={{
                      color: 'rgba(254, 243, 199, 0.8)',
                      fontSize: '14px',
                      lineHeight: '1.75'
                    }}>
                      Diagnóstico temprano y descubrimiento acelerado de fármacos.
                    </p>
                  </div>
                  
                  <div style={{
                    backgroundColor: '#4b5563',
                    padding: '24px',
                    borderRadius: '12px',
                    border: '1px solid rgba(146, 64, 14, 0.3)'
                  }}>
                    <h4 style={{
                      color: '#fcd34d',
                      fontSize: '18px',
                      fontWeight: 'bold',
                      marginBottom: '12px'
                    }}>🔬 Ciencia</h4>
                    <p style={{
                      color: 'rgba(254, 243, 199, 0.8)',
                      fontSize: '14px',
                      lineHeight: '1.75'
                    }}>
                      Simulación de procesos complejos y análisis de datos a gran escala.
                    </p>
                  </div>
                  
                  <div style={{
                    backgroundColor: '#4b5563',
                    padding: '24px',
                    borderRadius: '12px',
                    border: '1px solid rgba(146, 64, 14, 0.3)'
                  }}>
                    <h4 style={{
                      color: '#fcd34d',
                      fontSize: '18px',
                      fontWeight: 'bold',
                      marginBottom: '12px'
                    }}>🌆 Eficiencia</h4>
                    <p style={{
                      color: 'rgba(254, 243, 199, 0.8)',
                      fontSize: '14px',
                      lineHeight: '1.75'
                    }}>
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
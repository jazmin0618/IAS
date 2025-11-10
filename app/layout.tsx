"use client";

import Link from "next/link";
import { FaTwitter, FaEnvelope, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { TranslationProvider, useTranslation } from "./hooks/useTranslation";
import SimpleChatbot from "./chatbot/page";
import { ReactNode } from "react";

function LayoutContent({ children }: { children: ReactNode }) {
  const { language, setLanguage, isTranslating } = useTranslation();

  return (
    <html lang={language}>
      <body
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          margin: 0,
          fontFamily: "system-ui, sans-serif",
          backgroundColor: "#0a0a0a",
          color: "#fff",
        }}
      >
        {/* Header con imagen de banner */}
        <header>
          <div>
            <img
              src="/iaimagen.png"
              alt="Inteligencia Artificial"
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        </header>

        {/* Selector de idioma */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#1f2937",
            padding: "10px 0",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span>🌐</span>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              disabled={isTranslating}
              style={{
                backgroundColor: "white",
                color: "#111",
                padding: "6px 10px",
                borderRadius: "6px",
                border: "none",
                fontWeight: "bold",
              }}
            >
              <option value="es">Español</option>
              <option value="en">English</option>
              <option value="fr">Français</option>
            </select>
            {isTranslating && (
              <div
                style={{
                  width: "16px",
                  height: "16px",
                  border: "2px solid white",
                  borderTop: "2px solid transparent",
                  borderRadius: "50%",
                  animation: "spin 1s linear infinite",
                }}
              />
            )}
          </div>
        </div>

        {/* Menú de navegación */}
        <nav
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "24px 0",
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "10px",
              backgroundColor: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)",
              borderRadius: "20px",
              padding: "10px",
            }}
          >
            {[
              { href: "/", label: "Inicio" },
              { href: "/recomendaciones", label: "Recomendaciones IA" },
              { href: "/help", label: "Ayuda" },
              { href: "/contact", label: "Contáctanos" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  padding: "12px 24px",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "18px",
                  borderRadius: "12px",
                  textDecoration: "none",
                  border: "1px solid transparent",
                  transition:
                    "all 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  const target = e.currentTarget;
                  target.style.backgroundColor = "white";
                  target.style.color = "#2563eb";
                  target.style.transform = "scale(1.05)";
                  target.style.boxShadow = "0 0 20px rgba(255,255,255,0.3)";
                  target.style.border = "1px solid rgba(255,255,255,0.3)";
                }}
                onMouseLeave={(e) => {
                  const target = e.currentTarget;
                  target.style.backgroundColor = "transparent";
                  target.style.color = "white";
                  target.style.transform = "scale(1)";
                  target.style.boxShadow = "none";
                  target.style.border = "1px solid transparent";
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Contenido principal */}
        <main style={{ flexGrow: 1 }}>{children}</main>

        {/* Footer */}
        <footer
          style={{
            backgroundColor: "#1f2937",
            color: "white",
            padding: "40px 20px",
            textAlign: "center",
          }}
        >
          <p style={{ marginBottom: "16px" }}>
            Síguenos en nuestras redes sociales
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "24px",
              marginBottom: "10px",
            }}
          >
            <a
              href="https://twitter.com/tu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#d1d5db", transition: "transform 0.2s ease" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#3b82f6";
                e.currentTarget.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#d1d5db";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <FaTwitter size={24} />
            </a>

            <a
              href="mailto:tu-email@gmail.com"
              style={{ color: "#d1d5db", transition: "transform 0.2s ease" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#ef4444";
                e.currentTarget.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#d1d5db";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <FaEnvelope size={24} />
            </a>

            <a
              href="https://linkedin.com/in/tu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#d1d5db", transition: "transform 0.2s ease" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#2563eb";
                e.currentTarget.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#d1d5db";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <FaLinkedin size={24} />
            </a>

            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#d1d5db", transition: "transform 0.2s ease" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#22c55e";
                e.currentTarget.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#d1d5db";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <FaWhatsapp size={24} />
            </a>
          </div>

          <p style={{ color: "#9ca3af", fontSize: "14px" }}>
            © {new Date().getFullYear()} Mi Empresa. Todos los derechos
            reservados.
          </p>
        </footer>

        <SimpleChatbot />
      </body>
    </html>
  );
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <TranslationProvider>
      <LayoutContent>{children}</LayoutContent>
    </TranslationProvider>
  );
}

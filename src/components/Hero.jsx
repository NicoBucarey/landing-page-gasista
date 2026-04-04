import { useState, useEffect } from 'react'

export default function Hero() {

  const phone = "5492995284941"

  const whatsappLink = `https://wa.me/${phone}?text=Hola,%20te%20contacto%20por%20los%20servicios`

  const backgroundImages = [
    "/images/agua1.png",
    "/images/agua2.png",
    "/images/agua3.png",
    "/images/gas2.png",
    "/images/gas3.png",
    "/images/plomeria1.png",
    "/images/plomeria2.png",
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [backgroundImages.length])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">

      {/* Fondo con imágenes que cambian */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Fondo"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-2xl w-full text-center">

        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          <span className="text-white">Servicios de</span> <span className="text-emerald-400">Gas, Agua y Plomería</span>
        </h1>

        <p className="text-xl text-slate-200 mb-2 font-semibold">
          Gasista Matriculado
        </p>

        <p className="text-slate-300 mb-8 text-lg">
          Trabajos en viviendas, comercios e instituciones • Atención en Neuquén y alrededores
        </p>

        <a
          href={whatsappLink}
          className="inline-block bg-emerald-500 hover:bg-emerald-600 transition-colors px-8 py-4 rounded-xl font-semibold text-lg text-white shadow-lg hover:shadow-xl"
        >
          💬 Contactar por WhatsApp
        </a>

      </div>

    </section>
  )
}
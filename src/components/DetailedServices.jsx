export default function DetailedServices() {
  const services = [
    {
      title: "Trámites ante Camuzzi",
      description: "Gestión de habilitaciones, inspecciones y documentación requerida por Camuzzi Gas.",
      icon: "📋"
    },
    {
      title: "Baterías de medidores de gas",
      description: "Instalación de baterías de medidores utilizando epoxi y termofusión.",
      icon: "⚙️"
    },
    {
      title: "Trabajos en epoxi y termofusión",
      description: "Instalaciones y reparaciones utilizando ambos sistemas.",
      icon: "🔧"
    },
    {
      title: "Instalaciones y mantenimiento de gas",
      description: "Trabajos domiciliarios, comerciales e institucionales realizados por gasista matriculado.",
      icon: "🏠"
    }
  ]

  return (
    <section className="py-20 px-6 bg-slate-50">

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-3">
            Nuestros Servicios Especializados 🛠️
          </h2>
          <p className="text-slate-600 text-lg">Soluciones integrales con experiencia profesional</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border border-slate-200 hover:border-blue-400 flex flex-col items-center text-center"
            >
              <div className="text-5xl mb-3 flex justify-center w-full">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900 !text-slate-900">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>

    </section>
  )
}

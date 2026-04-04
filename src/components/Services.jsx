export default function Services() {

  const services = [
    {
      title: "Gasista",
      description: "Instalación de artefactos, detección de pérdidas y mantenimiento.",
      icon: "🔥"
    },
    {
      title: "Plomería",
      description: "Reparación de pérdidas, instalación de grifería y cañerías.",
      icon: "🔧"
    },
    {
      title: "Destapaciones",
      description: "Destapación de cañerías, piletas y desagües.",
      icon: "💧"
    },
    {
      title: "Reparaciones",
      description: "Mantenimiento y arreglos generales en el hogar.",
      icon: "🛠️"
    }
  ]

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-slate-50 to-slate-100">

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-3">
            Nuestros Servicios ⚙️
          </h2>
          <p className="text-slate-600 text-lg">Soluciones completas en gas y plomería</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition border border-slate-200 hover:border-emerald-300"
          >
            <div className="text-6xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-slate-900">
              {service.title}
            </h3>

            <p className="text-slate-600">
              {service.description}
            </p>
          </div>
        ))}

      </div>      </div>
    </section>
  )
}
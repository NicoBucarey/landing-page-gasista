export default function Gallery() {
  const works = [
    { id: 1, url: "https://images.unsplash.com/photo-1581578731548-c64695cc6952", title: "Instalación" },
    { id: 2, url: "https://images.unsplash.com/photo-1621905251918-48416bd8575a", title: "Reparación" },
    { id: 3, url: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39", title: "Mantenimiento" },
    { id: 4, url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64", title: "Trabajo" },
  ]

  return (
    <section className="py-20 px-6 bg-slate-900">

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-3 !text-white">
            Trabajos Realizados 📸
          </h2>
          <p className="text-slate-400">Algunos de nuestros proyectos completados con éxito</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {works.map((work) => (
            <div key={work.id} className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition group">
              <img
                src={work.url}
                alt={work.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition flex items-end">
                <p className="text-white font-semibold p-4">{work.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
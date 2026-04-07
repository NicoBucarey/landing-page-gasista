export default function Location() {
  const address = "San Ignacio 4310, Valentina Sur, Neuquén Capital"
  const latitude = -38.9516
  const longitude = -68.0591
  const mapsUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.5!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961a7d1a1a1a1a1d%3A0x1a1a1a1a1a1a1a1a!2sChoele%20Choel%20%26%20El%20Dorado!5e0!3m2!1ses!2sar!4v1234567890`

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-3">
            Nuestra Ubicación 📍
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          
          {/* Información de dirección */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-4 !text-slate-900">Dirección</h3>
            <p className="text-lg text-slate-700 mb-2">
              <span className="font-semibold">San Ignacio 4310, Valentina Sur, Neuquén Capital</span>
            </p>
            <p className="text-slate-700 mb-6">
              Valentina Sur, Neuquén Capital
            </p>
            
         
          </div>

          {/* Mapa */}
          <div className="rounded-lg overflow-hidden shadow-lg h-96">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2589.071494913924!2d-68.12207592462788!3d-38.968780700927745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a3320262c19a1%3A0x7112a557f1dedee6!2sSan%20Ignacio%204310%2C%20Q8300BQL%20Neuqu%C3%A9n!5e1!3m2!1ses!2sar!4v1775531403939!5m2!1ses!2sar"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  )
}

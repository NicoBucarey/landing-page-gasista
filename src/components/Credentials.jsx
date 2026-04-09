export default function Credentials() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-emerald-50 to-blue-50">

      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 dark:text-white !text-slate-900">
            Carlos Barros - Gasista Matriculado 🔧
          </h2>
          <p className="text-lg text-slate-600">
            Profesional habilitado con experiencia en instalaciones y reparaciones de gas según normativa vigente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-emerald-100 p-6 rounded-lg border-l-4 border-emerald-600 shadow-md">
            <h3 className="font-semibold text-slate-900 mb-3 !text-slate-900">Servicios de Gas</h3>
            <ul className="space-y-2 text-slate-700">
              <li>✓ Instalaciones de gas natural</li>
              <li>✓ Detección de pérdidas</li>
              <li>✓ Colocación de artefactos</li>
            </ul>
          </div>

          <div className="bg-blue-100 p-6 rounded-lg border-l-4 border-blue-600 shadow-md">
            <h3 className="font-semibold text-slate-900 mb-3 !text-slate-900">Experiencia</h3>
            <ul className="space-y-2 text-slate-700">
              <li>✓ Viviendas unifamiliares</li>
              <li>✓ Edificios y comercios</li>
              <li>✓ Instituciones públicas</li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-amber-100 p-6 rounded-lg border-l-4 border-amber-600 shadow-md">
            <h3 className="font-semibold text-slate-900 mb-2 !text-slate-900">🛡️ Trabajos con Garantía</h3>
            <p className="text-slate-700">Realizamos todos nuestros trabajos con garantía de calidad y profesionalismo.</p>
          </div>

          <div className="bg-purple-100 p-6 rounded-lg border-l-4 border-purple-600 shadow-md">
            <h3 className="font-semibold text-slate-900 mb-2 !text-slate-900">💰 Presupuesto sin Cargo</h3>
            <p className="text-slate-700">Consultanos sin compromiso. Realizamos presupuestos sin cargo para todos nuestros servicios.</p>
          </div>
        </div>

      </div>

    </section>
  )
}
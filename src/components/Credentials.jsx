export default function Credentials() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-emerald-50 to-blue-50">

      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 dark:text-white">
            Carlos Barros - Gasista Matriculado 🔧
          </h2>
          <p className="text-lg text-slate-600">
            Profesional habilitado con experiencia en instalaciones y reparaciones de gas según normativa vigente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-500">
            <h3 className="font-semibold text-slate-900 mb-3">Servicios de Gas</h3>
            <ul className="space-y-2 text-slate-700">
              <li>✓ Instalaciones de gas natural</li>
              <li>✓ Detección de pérdidas</li>
              <li>✓ Colocación de artefactos</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="font-semibold text-slate-900 mb-3">Experiencia</h3>
            <ul className="space-y-2 text-slate-700">
              <li>✓ Viviendas unifamiliares</li>
              <li>✓ Edificios y comercios</li>
              <li>✓ Instituciones públicas</li>
            </ul>
          </div>
        </div>

      </div>

    </section>
  )
}
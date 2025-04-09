import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ura | Lääkärikompassi',
  description: 'Tutustu Lääkärikompassin uramahdollisuuksiin. Tarjoamme mielenkiintoisia työpaikkoja ja urakehitysmahdollisuuksia.',
}

export default function CareerPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Ura
          </h1>
          
          <p className="text-gray-600 leading-relaxed mb-12">
            Lääkärikompassissa tarjoamme mielenkiintoisia uramahdollisuuksia 
            ammattilaisille, jotka haluavat kehittyä ja vaikuttaa lääketeollisuuden 
            ja terveydenhuollon tulevaisuuteen.
          </p>

          {/* Why Join Us Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Miksi Lääkärikompassi?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <div className="text-primary mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Kasvumahdollisuudet
                </h3>
                <p className="text-gray-600">
                  Tarjoamme selkeät urakehityspolut ja koulutusmahdollisuudet 
                  henkilökohtaiseen kasvuun.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6">
                <div className="text-primary mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Joustavat työajat
                </h3>
                <p className="text-gray-600">
                  Uskomme työn ja vapaa-ajan tasapainoon ja tarjoamme joustavia 
                  työaikoja.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6">
                <div className="text-primary mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Inspiroiva tiimi
                </h3>
                <p className="text-gray-600">
                  Työskentelet ammattitaitoisen ja inspiroivan tiimin parissa.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6">
                <div className="text-primary mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Kilpailukykyinen palkkaus
                </h3>
                <p className="text-gray-600">
                  Tarjoamme kilpailukykyisen palkkauksen ja hyvinvointiedut.
                </p>
              </div>
            </div>
          </div>

          {/* Open Positions */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Avoimet työpaikat
            </h2>
            <div className="space-y-4">
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Asiantuntija
                </h3>
                <p className="text-gray-600 mb-4">
                  Etsimme kokemusta asiantuntijaa lääketeollisuuden palveluihin.
                </p>
                <button className="bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300">
                  Lue lisää
                </button>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Projektipäällikkö
                </h3>
                <p className="text-gray-600 mb-4">
                  Etsimme kokemusta projektipäällikköä johtamaan monimutkaisia projekteja.
                </p>
                <button className="bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300">
                  Lue lisää
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 
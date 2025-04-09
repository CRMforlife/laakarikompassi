import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tietoa meistä | Lääkärikompassi',
  description: 'Lääkärikompassi on asiantuntijapalveluyritys, joka erikoistuu lääketeollisuuden, rekrytoinnin ja toimistojen palveluihin.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Tietoa meistä
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed mb-8">
              Lääkärikompassi on asiantuntijapalveluyritys, joka erikoistuu lääketeollisuuden, 
              rekrytoinnin ja toimistojen palveluihin. Tarjoamme korkealaatuisia palveluja 
              asiakkaidemme tarpeisiin.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Visio
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Olemme lääketeollisuuden ja terveydenhuollon johtava asiantuntijapalveluyritys, 
              joka auttaa asiakkaitaan kehittämään toimintaansa ja saavuttamaan tavoitteitaan.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Arvot
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start space-x-4">
                <div className="text-primary mt-1">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Ammattitaito</h3>
                  <p className="text-gray-600">Tarjoamme korkealaatuisia palveluja asiantuntemuksella</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="text-primary mt-1">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Luotettavuus</h3>
                  <p className="text-gray-600">Olemme luotettava kumppani asiakkaillemme</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="text-primary mt-1">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Innovaatio</h3>
                  <p className="text-gray-600">Kehitämme jatkuvasti palveluitamme ja toimintatapojamme</p>
                </div>
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Historia
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Lääkärikompassi perustettiin vuonna 2020 vastaamaan lääketeollisuuden ja 
              terveydenhuollon kasvavia tarpeita. Vuosien varrella olemme kasvaneet ja 
              kehittyneet, mutta perusarvojemme pysyvyys on pysynyt muuttumattomana.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
} 
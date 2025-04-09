import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import OptimizedImage from '@/components/OptimizedImage'
import Hero from '@/components/Hero'

export const metadata: Metadata = {
  title: 'Lääkärikompassi | Asiantuntijapalvelut lääketeollisuudelle',
  description: 'Yhdistämme lääkeyritykset, rekrytoijat ja lääkärikunnan. Tavoita lääkärit vaikuttavasti ja vastuullisesti.',
}

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      {/* Target Group Selector */}
      <section className="py-20 bg-neutral-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-neutral-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Kohderyhmämme
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Tarjoamme erikoistuneita palveluja eri kohderyhmille lääketeollisuuden ja terveydenhuollon alalla.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Lääketeollisuus */}
            <div className="card group hover:shadow-lg transition-all duration-300 bg-white rounded-2xl overflow-hidden border border-neutral-100">
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center mr-4">
                    <span className="text-2xl">🧪</span>
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900">
                    Lääketeollisuus
                  </h3>
                </div>
                <p className="text-neutral-600 mb-6">
                  Mainosta reseptilääkkeitä turvallisesti ja tavoita oikeat kohderyhmät.
                </p>
                <Link 
                  href="/laaketeollisuus" 
                  className="btn btn-primary w-full text-center shadow-button"
                >
                  Mainosta reseptilääkkeitä turvallisesti
                </Link>
              </div>
            </div>

            {/* Rekrytoijat */}
            <div className="card group hover:shadow-lg transition-all duration-300 bg-white rounded-2xl overflow-hidden border border-neutral-100">
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center mr-4">
                    <span className="text-2xl">👩‍⚕️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900">
                    Rekrytoijat
                  </h3>
                </div>
                <p className="text-neutral-600 mb-6">
                  Löydä ja tavoita oikeat lääkärit eri erikoisaloilta tehokkaasti.
                </p>
                <Link 
                  href="/rekrytoijat" 
                  className="btn btn-primary w-full text-center shadow-button"
                >
                  Tavoita oikeat lääkärit tehokkaasti
                </Link>
              </div>
            </div>

            {/* Toimistot */}
            <div className="card group hover:shadow-lg transition-all duration-300 bg-white rounded-2xl overflow-hidden border border-neutral-100">
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center mr-4">
                    <span className="text-2xl">🧠</span>
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900">
                    Toimistot
                  </h3>
                </div>
                <p className="text-neutral-600 mb-6">
                  Suunnittele ja toteuta vaikuttavia natiivikampanjoita lääkäreille.
                </p>
                <Link 
                  href="/toimistot" 
                  className="btn btn-primary w-full text-center shadow-button"
                >
                  Mediasuunnittelu ja natiivikampanjat
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Mitä me tarjoamme
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Kattava valikoima palveluja lääkärien tavoittamiseen ja viestinnän optimointiin.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sähköpostisuorat */}
            <div className="card group hover:shadow-lg transition-all duration-300 bg-white rounded-2xl overflow-hidden border border-neutral-100">
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center mr-4">
                    <span className="text-2xl">📬</span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900">
                    Sähköpostisuorat
                  </h3>
                </div>
                <p className="text-neutral-600 mb-6">
                  Kohdennettua viestintää suoraan lääkäreiden sähköpostiin.
                </p>
                <Link 
                  href="/sahkopostisuorat" 
                  className="text-primary hover:text-primary-dark font-medium inline-flex items-center group"
                >
                  Lue lisää
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Lääkärilehdet */}
            <div className="card group hover:shadow-lg transition-all duration-300 bg-white rounded-2xl overflow-hidden border border-neutral-100">
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center mr-4">
                    <span className="text-2xl">📰</span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900">
                    Lääkärilehdet
                  </h3>
                </div>
                <p className="text-neutral-600 mb-6">
                  Printti- ja digijulkaisut lääketieteen ammattilaisille.
                </p>
                <Link 
                  href="/julkaisut" 
                  className="text-primary hover:text-primary-dark font-medium inline-flex items-center group"
                >
                  Tutustu julkaisuihin
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Kohdennusdata */}
            <div className="card group hover:shadow-lg transition-all duration-300 bg-white rounded-2xl overflow-hidden border border-neutral-100">
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center mr-4">
                    <span className="text-2xl">🌐</span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900">
                    Kohdennusdata
                  </h3>
                </div>
                <p className="text-neutral-600 mb-6">
                  Tarkkaa dataa ja analytiikkaa kampanjoiden kohdentamiseen.
                </p>
                <Link 
                  href="/kohdennus" 
                  className="text-primary hover:text-primary-dark font-medium inline-flex items-center group"
                >
                  Näe kohderyhmät
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Blog Section */}
      <section className="py-20 bg-neutral-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-neutral-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Ajankohtaista
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Uusimmat uutiset ja artikkelit lääketeollisuuden ja terveydenhuollon alalta.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* News Items */}
            <div className="card group hover:shadow-lg transition-all duration-300 bg-white rounded-2xl overflow-hidden border border-neutral-100">
              <div className="relative aspect-w-16 aspect-h-9 rounded-t-2xl overflow-hidden">
                <OptimizedImage
                  src="/images/content/placeholder-1.svg"
                  alt="Uudet kanavat lääkäreiden tavoittamiseen"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-primary font-medium mb-2">Uutiset</div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary transition-colors duration-300">
                  Uudet kanavat lääkäreiden tavoittamiseen
                </h3>
                <p className="text-neutral-600 mb-4">
                  Tutustu uusimpiin digitaalisiin ratkaisuihimme lääkäreiden tavoittamiseen.
                </p>
                <Link 
                  href="/uutiset/uudet-kanavat" 
                  className="text-primary hover:text-primary-dark font-medium inline-flex items-center group"
                >
                  Lue lisää
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="card group hover:shadow-lg transition-all duration-300 bg-white rounded-2xl overflow-hidden border border-neutral-100">
              <div className="relative aspect-w-16 aspect-h-9 rounded-t-2xl overflow-hidden">
                <OptimizedImage
                  src="/images/content/placeholder-2.svg"
                  alt="Kohdennusdatan hyödyntäminen"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-primary font-medium mb-2">Blogi</div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary transition-colors duration-300">
                  Kohdennusdatan hyödyntäminen
                </h3>
                <p className="text-neutral-600 mb-4">
                  Miten hyödyntää dataa tehokkaasti lääkärimarkkinoinnissa?
                </p>
                <Link 
                  href="/blogi/kohdennusdata" 
                  className="text-primary hover:text-primary-dark font-medium inline-flex items-center group"
                >
                  Lue lisää
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="card group hover:shadow-lg transition-all duration-300 bg-white rounded-2xl overflow-hidden border border-neutral-100">
              <div className="relative aspect-w-16 aspect-h-9 rounded-t-2xl overflow-hidden">
                <OptimizedImage
                  src="/images/content/placeholder-3.svg"
                  alt="Erikoislääkärien tavoittaminen"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-primary font-medium mb-2">Oppaat</div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary transition-colors duration-300">
                  Erikoislääkärien tavoittaminen
                </h3>
                <p className="text-neutral-600 mb-4">
                  Vinkkejä erikoislääkärien tehokkaaseen tavoittamiseen.
                </p>
                <Link 
                  href="/oppaat/erikoislaakarit" 
                  className="text-primary hover:text-primary-dark font-medium inline-flex items-center group"
                >
                  Lue lisää
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden bg-neutral-100 shadow-lg">
              <OptimizedImage
                src="/images/case-study.svg"
                alt="Case study: Erikoislääkärien tavoittaminen"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <div className="text-sm font-medium mb-2">Case Study</div>
                <h3 className="text-2xl font-bold">Erikoislääkärien tavoittaminen</h3>
              </div>
            </div>
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-primary-light text-primary rounded-full text-sm font-medium">
                Menestystarina
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                Case: Erikoislääkärien tavoittaminen monikanavaisesti
              </h2>
              <p className="text-xl text-neutral-600 mb-8">
                Näin autoimme lääkeyritystä tavoittamaan yli 80% kohderyhmän erikoislääkäreistä kolmen kuukauden kampanjalla.
              </p>
              <Link 
                href="/caset/erikoislaakari-kampanja" 
                className="btn btn-primary shadow-button"
              >
                Lue miten onnistuimme
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-primary-light/30 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{ 
            backgroundImage: 'url(/images/backgrounds/hero-pattern.svg)',
            backgroundRepeat: 'repeat',
            backgroundSize: '100px 100px'
          }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Haluatko kampanjaideoita tai mediahinnaston?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Ota yhteyttä ja keskustellaan miten voimme auttaa sinua tavoittamaan oikeat lääkärit.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/ota-yhteytta" 
                className="btn bg-white text-primary hover:bg-neutral-100 shadow-button"
              >
                Ota yhteyttä
              </Link>
              <Link 
                href="/mediakortti.pdf" 
                className="btn bg-transparent text-white border-2 border-white hover:bg-white/10"
              >
                Lataa mediakortti (PDF)
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 
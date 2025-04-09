'use client'

import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import OptimizedImage from '@/components/OptimizedImage'
import Hero from '@/components/Hero'
import { motion } from 'framer-motion'

export const metadata: Metadata = {
  title: 'Lääkärikompassi | Asiantuntijapalvelut lääketeollisuudelle',
  description: 'Yhdistämme lääkeyritykset, rekrytoijat ja lääkärikunnan. Tavoita lääkärit vaikuttavasti ja vastuullisesti.',
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col bg-neutral-50">
      <Hero />

      {/* Target Group Grid */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Kohderyhmämme
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Tarjoamme erikoistuneita palveluja eri kohderyhmille lääketeollisuuden ja terveydenhuollon alalla.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Lääketeollisuus */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group hover:scale-[1.02] transition-all duration-300"
            >
              <div className="relative bg-white rounded-3xl overflow-hidden border border-neutral-200/50 shadow-lg shadow-neutral-200/50 p-8 h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <span className="text-3xl">🧪</span>
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                    Lääketeollisuus
                  </h3>
                  <p className="text-neutral-600 mb-8">
                    Mainosta reseptilääkkeitä turvallisesti ja tavoita oikeat kohderyhmät.
                  </p>
                  <Link 
                    href="/laaketeollisuus" 
                    className="inline-flex items-center justify-center w-full px-6 py-4 bg-neutral-900 text-white rounded-xl hover:bg-neutral-800 transition-colors duration-200 group"
                  >
                    <span>Mainosta reseptilääkkeitä turvallisesti</span>
                    <svg 
                      className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Rekrytoijat */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group hover:scale-[1.02] transition-all duration-300"
            >
              <div className="relative bg-white rounded-3xl overflow-hidden border border-neutral-200/50 shadow-lg shadow-neutral-200/50 p-8 h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <span className="text-3xl">👩‍⚕️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                    Rekrytoijat
                  </h3>
                  <p className="text-neutral-600 mb-8">
                    Löydä ja tavoita oikeat lääkärit eri erikoisaloilta tehokkaasti.
                  </p>
                  <Link 
                    href="/rekrytoijat" 
                    className="inline-flex items-center justify-center w-full px-6 py-4 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors duration-200 group"
                  >
                    <span>Tavoita oikeat lääkärit tehokkaasti</span>
                    <svg 
                      className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Toimistot */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group hover:scale-[1.02] transition-all duration-300"
            >
              <div className="relative bg-white rounded-3xl overflow-hidden border border-neutral-200/50 shadow-lg shadow-neutral-200/50 p-8 h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <span className="text-3xl">🧠</span>
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                    Toimistot
                  </h3>
                  <p className="text-neutral-600 mb-8">
                    Suunnittele ja toteuta vaikuttavia natiivikampanjoita lääkäreille.
                  </p>
                  <Link 
                    href="/toimistot" 
                    className="inline-flex items-center justify-center w-full px-6 py-4 bg-neutral-900 text-white rounded-xl hover:bg-neutral-800 transition-colors duration-200 group"
                  >
                    <span>Mediasuunnittelu ja natiivikampanjat</span>
                    <svg 
                      className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Mitä me tarjoamme
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Kattava valikoima palveluja lääkärien tavoittamiseen ja viestinnän optimointiin.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Sähköpostisuorat - Large Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="md:col-span-8 group hover:scale-[1.02] transition-all duration-300"
            >
              <div className="relative bg-neutral-900 text-white rounded-3xl overflow-hidden h-full p-8">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -mr-32 -mt-32"></div>
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                    <span className="text-3xl">📬</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    Sähköpostisuorat
                  </h3>
                  <p className="text-white/80 mb-8 max-w-xl">
                    Kohdennettua viestintää suoraan lääkäreiden sähköpostiin. Tavoita oikeat henkilöt oikeaan aikaan.
                  </p>
                  <Link 
                    href="/sahkopostisuorat" 
                    className="inline-flex items-center text-white group"
                  >
                    <span>Lue lisää</span>
                    <svg 
                      className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Lääkärilehdet */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-4 group hover:scale-[1.02] transition-all duration-300"
            >
              <div className="relative bg-white rounded-3xl overflow-hidden border border-neutral-200/50 shadow-lg shadow-neutral-200/50 p-8 h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <span className="text-3xl">📰</span>
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                    Lääkärilehdet
                  </h3>
                  <p className="text-neutral-600 mb-8">
                    Printti- ja digijulkaisut lääketieteen ammattilaisille.
                  </p>
                  <Link 
                    href="/julkaisut" 
                    className="text-primary hover:text-primary-dark font-medium inline-flex items-center group"
                  >
                    <span>Tutustu julkaisuihin</span>
                    <svg 
                      className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Kohdennusdata */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="md:col-span-12 group hover:scale-[1.02] transition-all duration-300"
            >
              <div className="relative bg-gradient-to-r from-primary to-primary-dark text-white rounded-3xl overflow-hidden p-8">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48"></div>
                <div className="relative flex flex-col md:flex-row items-center justify-between">
                  <div className="mb-8 md:mb-0 md:mr-8">
                    <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                      <span className="text-3xl">🌐</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">
                      Kohdennusdata
                    </h3>
                    <p className="text-white/80 max-w-xl mb-6">
                      Tarkkaa dataa ja analytiikkaa kampanjoiden kohdentamiseen. Optimoi mainontasi tehokkuus.
                    </p>
                    <Link 
                      href="/kohdennus" 
                      className="inline-flex items-center text-white group"
                    >
                      <span>Näe kohderyhmät</span>
                      <svg 
                        className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                  <div className="relative w-full md:w-1/3 aspect-square rounded-2xl overflow-hidden">
                    <OptimizedImage
                      src="/images/case-study.svg"
                      alt="Kohdennusdata ja analytiikka"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
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
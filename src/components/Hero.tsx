'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  return (
    <section ref={ref} className="relative min-h-[90vh] flex items-center overflow-hidden bg-neutral-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-neutral-200/50">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-sm font-medium text-neutral-600">Lääkärikompassi 2024</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neutral-950 to-neutral-500">
              Tavoita oikeat lääkärit{' '}
              <span className="text-primary">nopeasti ja tehokkaasti</span>
            </h1>

            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
              Palvelumme auttavat sinua viestimään lääkäreille siellä missä he oikeasti ovat – 
              printissä, verkossa ja Fimnetissä.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/mediahinnasto" 
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors duration-200 shadow-lg shadow-primary/20 group"
              >
                <span>Pyydä mediahinnasto</span>
                <svg 
                  className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link 
                href="/kanavat" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-neutral-900 rounded-xl hover:bg-neutral-50 transition-colors duration-200 border border-neutral-200 group"
              >
                <span>Tutustu kanaviimme</span>
                <svg 
                  className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </Link>
            </div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-neutral-200"
            >
              <div className="p-6 bg-white rounded-2xl border border-neutral-200/50 backdrop-blur-sm">
                <div className="text-3xl font-bold text-primary mb-1">150+</div>
                <div className="text-sm text-neutral-600">Lääkeyritystä</div>
              </div>
              <div className="p-6 bg-white rounded-2xl border border-neutral-200/50 backdrop-blur-sm">
                <div className="text-3xl font-bold text-primary mb-1">300+</div>
                <div className="text-sm text-neutral-600">Kampanjaa vuodessa</div>
              </div>
              <div className="p-6 bg-white rounded-2xl border border-neutral-200/50 backdrop-blur-sm">
                <div className="text-3xl font-bold text-primary mb-1">95%</div>
                <div className="text-sm text-neutral-600">Tyytyväisiä asiakkaita</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-square rounded-3xl overflow-hidden border border-neutral-200/50 bg-white shadow-2xl shadow-neutral-200/50"
          >
            <Image
              src="/images/backgrounds/hero-doctors.jpg"
              alt="Lääkärikompassi - Asiantuntijapalvelut"
              fill
              priority
              className="object-cover"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
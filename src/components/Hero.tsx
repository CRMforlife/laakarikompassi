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
    <section ref={ref} className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <motion.div 
        className="absolute inset-0"
        style={{ y }}
      >
        <Image
          src="/images/backgrounds/hero-doctors.jpg"
          alt="Lääkärikompassi - Asiantuntijapalvelut"
          fill
          priority
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/50" />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium">
              Lääkärikompassi 2024
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight tracking-tight">
              Tavoita oikeat lääkärit{' '}
              <span className="text-white/90">nopeasti ja tehokkaasti</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed"
          >
            Palvelumme auttavat sinua viestimään lääkäreille siellä missä he oikeasti ovat – 
            printissä, verkossa ja Fimnetissä.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link 
              href="/mediahinnasto" 
              className="btn bg-white text-primary hover:bg-neutral-100 shadow-button inline-flex items-center justify-center group"
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
              className="btn bg-transparent text-white border-2 border-white hover:bg-white/10 inline-flex items-center justify-center"
            >
              <span>Tutustu kanaviimme</span>
              <svg 
                className="w-5 h-5 ml-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </Link>
          </motion.div>

          {/* Trust Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 pt-8 border-t border-white/20"
          >
            <p className="text-white/80 text-lg mb-4">Luotettu kumppani lääkealalla:</p>
            <div className="flex flex-wrap items-center gap-8">
              <div className="text-white">
                <span className="block text-3xl font-bold">150+</span>
                <span className="text-sm text-white/80">Lääkeyritystä</span>
              </div>
              <div className="text-white">
                <span className="block text-3xl font-bold">300+</span>
                <span className="text-sm text-white/80">Kampanjaa vuodessa</span>
              </div>
              <div className="text-white">
                <span className="block text-3xl font-bold">95%</span>
                <span className="text-sm text-white/80">Tyytyväisiä asiakkaita</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
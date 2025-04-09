'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isMenuOpen || pathname !== '/' 
          ? 'bg-white shadow-soft py-2' 
          : 'bg-white/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-12 w-[240px]">
              <Image
                src="/images/logo/laakarikompassi-logo.svg"
                alt="Lääkärikompassi"
                fill
                priority
                style={{ objectFit: 'contain' }}
                onError={(e) => {
                  console.error('Logo failed to load:', e);
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/tietoa-meista" 
              className={`text-base font-medium transition-colors duration-300 ${
                pathname === '/tietoa-meista' 
                  ? 'text-primary' 
                  : 'text-neutral-700 hover:text-primary'
              }`}
            >
              Tietoa meistä
            </Link>
            <Link 
              href="/tiimi" 
              className={`text-base font-medium transition-colors duration-300 ${
                pathname === '/tiimi' 
                  ? 'text-primary' 
                  : 'text-neutral-700 hover:text-primary'
              }`}
            >
              Tiimi
            </Link>
            <Link 
              href="/palvelut" 
              className={`text-base font-medium transition-colors duration-300 ${
                pathname === '/palvelut' 
                  ? 'text-primary' 
                  : 'text-neutral-700 hover:text-primary'
              }`}
            >
              Palvelut
            </Link>
            <Link 
              href="/ura" 
              className={`text-base font-medium transition-colors duration-300 ${
                pathname === '/ura' 
                  ? 'text-primary' 
                  : 'text-neutral-700 hover:text-primary'
              }`}
            >
              Ura
            </Link>
            <Link 
              href="/blogi" 
              className={`text-base font-medium transition-colors duration-300 ${
                pathname === '/blogi' 
                  ? 'text-primary' 
                  : 'text-neutral-700 hover:text-primary'
              }`}
            >
              Blogi
            </Link>
            <Link 
              href="/yhteystiedot" 
              className={`text-base font-medium transition-colors duration-300 ${
                pathname === '/yhteystiedot' 
                  ? 'text-primary' 
                  : 'text-neutral-700 hover:text-primary'
              }`}
            >
              Yhteystiedot
            </Link>
            <Link 
              href="/ota-yhteytta" 
              className="btn btn-primary"
            >
              Ota yhteyttä
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span 
              className={`block w-6 h-0.5 bg-neutral-800 transition-all duration-300 ${
                isMenuOpen ? 'transform rotate-45 translate-y-1.5' : ''
              }`}
            />
            <span 
              className={`block w-6 h-0.5 bg-neutral-800 my-1.5 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span 
              className={`block w-6 h-0.5 bg-neutral-800 transition-all duration-300 ${
                isMenuOpen ? 'transform -rotate-45 -translate-y-1.5' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden fixed inset-0 bg-white z-40 transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col space-y-6">
            <Link 
              href="/tietoa-meista" 
              className={`text-xl font-medium transition-colors duration-300 ${
                pathname === '/tietoa-meista' 
                  ? 'text-primary' 
                  : 'text-neutral-700 hover:text-primary'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Tietoa meistä
            </Link>
            <Link 
              href="/tiimi" 
              className={`text-xl font-medium transition-colors duration-300 ${
                pathname === '/tiimi' 
                  ? 'text-primary' 
                  : 'text-neutral-700 hover:text-primary'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Tiimi
            </Link>
            <Link 
              href="/palvelut" 
              className={`text-xl font-medium transition-colors duration-300 ${
                pathname === '/palvelut' 
                  ? 'text-primary' 
                  : 'text-neutral-700 hover:text-primary'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Palvelut
            </Link>
            <Link 
              href="/ura" 
              className={`text-xl font-medium transition-colors duration-300 ${
                pathname === '/ura' 
                  ? 'text-primary' 
                  : 'text-neutral-700 hover:text-primary'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Ura
            </Link>
            <Link 
              href="/blogi" 
              className={`text-xl font-medium transition-colors duration-300 ${
                pathname === '/blogi' 
                  ? 'text-primary' 
                  : 'text-neutral-700 hover:text-primary'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Blogi
            </Link>
            <Link 
              href="/yhteystiedot" 
              className={`text-xl font-medium transition-colors duration-300 ${
                pathname === '/yhteystiedot' 
                  ? 'text-primary' 
                  : 'text-neutral-700 hover:text-primary'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Yhteystiedot
            </Link>
            <Link 
              href="/ota-yhteytta" 
              className="btn btn-primary mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Ota yhteyttä
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 
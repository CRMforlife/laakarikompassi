'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary">
              Lääkärikompassi
            </h3>
            <p className="text-neutral-400">
              Asiantuntijapalvelut lääketeollisuudelle, rekrytoijille ja toimistoille.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-primary transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-primary transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-primary transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Sivut</h4>
            <ul className="space-y-4">
              <li>
                <Link 
                  href="/tietoa-meista" 
                  className="text-neutral-400 hover:text-primary transition-colors duration-300"
                >
                  Tietoa meistä
                </Link>
              </li>
              <li>
                <Link 
                  href="/tiimi" 
                  className="text-neutral-400 hover:text-primary transition-colors duration-300"
                >
                  Tiimi
                </Link>
              </li>
              <li>
                <Link 
                  href="/ura" 
                  className="text-neutral-400 hover:text-primary transition-colors duration-300"
                >
                  Ura
                </Link>
              </li>
              <li>
                <Link 
                  href="/yhteystiedot" 
                  className="text-neutral-400 hover:text-primary transition-colors duration-300"
                >
                  Yhteystiedot
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Palvelut</h4>
            <ul className="space-y-4">
              <li>
                <Link 
                  href="/laaketeollisuus" 
                  className="text-neutral-400 hover:text-primary transition-colors duration-300"
                >
                  Lääketeollisuus
                </Link>
              </li>
              <li>
                <Link 
                  href="/rekrytoijat" 
                  className="text-neutral-400 hover:text-primary transition-colors duration-300"
                >
                  Rekrytoijat
                </Link>
              </li>
              <li>
                <Link 
                  href="/toimistot" 
                  className="text-neutral-400 hover:text-primary transition-colors duration-300"
                >
                  Toimistot
                </Link>
              </li>
              <li>
                <Link 
                  href="/palvelut" 
                  className="text-neutral-400 hover:text-primary transition-colors duration-300"
                >
                  Kaikki palvelut
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Yhteystiedot</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-primary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span className="text-neutral-400">+358 50 123 4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-primary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span className="text-neutral-400">info@laakarikompassi.fi</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-primary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span className="text-neutral-400">
                  Mannerheimintie 1<br />
                  00100 Helsinki
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-neutral-400 text-sm">
              © {new Date().getFullYear()} Lääkärikompassi. Kaikki oikeudet pidätetään.
            </p>
            <div className="flex space-x-6">
              <Link 
                href="/tietosuoja" 
                className="text-neutral-400 hover:text-primary text-sm transition-colors duration-300"
              >
                Tietosuoja
              </Link>
              <Link 
                href="/kayttoehdot" 
                className="text-neutral-400 hover:text-primary text-sm transition-colors duration-300"
              >
                Käyttöehdot
              </Link>
              <Link 
                href="/evasteet" 
                className="text-neutral-400 hover:text-primary text-sm transition-colors duration-300"
              >
                Evästeet
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 
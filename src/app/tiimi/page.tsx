import { Metadata } from 'next'
import OptimizedImage from '@/components/OptimizedImage'

export const metadata: Metadata = {
  title: 'Tiimi | Lääkärikompassi',
  description: 'Tutustu Lääkärikompassin ammattitaitoiseen tiimiin. Meidän asiantuntijamme auttavat sinua saavuttamaan tavoitteesi.',
}

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Tiimi
          </h1>
          
          <p className="text-gray-600 leading-relaxed mb-12">
            Lääkärikompassin tiimi koostuu kokeneista ammattilaisista, jotka yhdistävät 
            syvällisen asiantuntemuksen innovatiiviseen ajatteluun. Meidän tiimimme on 
            sitoutunut tarjoamaan parhaat palvelut asiakkaillemme.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative aspect-w-3 aspect-h-4">
                <OptimizedImage
                  src="/images/team/team-member-1.jpg"
                  alt="Maija Meikäläinen - Toimitusjohtaja"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  Maija Meikäläinen
                </h3>
                <p className="text-primary font-medium mb-4">
                  Toimitusjohtaja
                </p>
                <p className="text-gray-600">
                  Maija johtaa Lääkärikompassin toimintaa yli 15 vuoden kokemuksella 
                  lääketeollisuudessa ja terveydenhuollossa.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative aspect-w-3 aspect-h-4">
                <OptimizedImage
                  src="/images/team/team-member-2.jpg"
                  alt="Matti Virtanen - Asiantuntija"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  Matti Virtanen
                </h3>
                <p className="text-primary font-medium mb-4">
                  Asiantuntija
                </p>
                <p className="text-gray-600">
                  Matti erikoistuu lääketeollisuuden rekrytointiin ja konsultointiin 
                  yli 10 vuoden kokemuksella.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative aspect-w-3 aspect-h-4">
                <OptimizedImage
                  src="/images/team/team-member-3.jpg"
                  alt="Anna Korhonen - Projektipäällikkö"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  Anna Korhonen
                </h3>
                <p className="text-primary font-medium mb-4">
                  Projektipäällikkö
                </p>
                <p className="text-gray-600">
                  Anna johtaa monimutkaisia projekteja ja varmistaa niiden 
                  onnistuneen toteutuksen.
                </p>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative aspect-w-3 aspect-h-4">
                <OptimizedImage
                  src="/images/team/team-member-4.jpg"
                  alt="Pekka Nieminen - Asiantuntija"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  Pekka Nieminen
                </h3>
                <p className="text-primary font-medium mb-4">
                  Asiantuntija
                </p>
                <p className="text-gray-600">
                  Pekka erikoistuu toimistojen palveluihin ja auttaa asiakkaita 
                  kehittämään toimintaansa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 
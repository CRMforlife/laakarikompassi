'use client'

import OptimizedImage from '@/components/OptimizedImage';

export default function TeamPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Tiimimme</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="relative aspect-square">
          <OptimizedImage
            src="/images/team/team-member-1.svg"
            alt="Maija Meikäläinen - Toimitusjohtaja"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover rounded-lg"
          />
        </div>
        <div className="relative aspect-square">
          <OptimizedImage
            src="/images/team/team-member-2.svg"
            alt="Matti Virtanen - Asiantuntija"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover rounded-lg"
          />
        </div>
        <div className="relative aspect-square">
          <OptimizedImage
            src="/images/team/team-member-3.svg"
            alt="Anna Korhonen - Projektipäällikkö"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover rounded-lg"
          />
        </div>
        <div className="relative aspect-square">
          <OptimizedImage
            src="/images/team/team-member-4.svg"
            alt="Pekka Nieminen - Asiantuntija"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
} 
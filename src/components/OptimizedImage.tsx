'use client'

import Image from 'next/image'
import { useState } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  quality?: number
  fill?: boolean
  sizes?: string
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
  objectPosition?: string
  onError?: () => void
  loading?: 'lazy' | 'eager'
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality = 75,
  fill = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  placeholder = 'empty',
  blurDataURL,
  objectFit = 'cover',
  objectPosition = 'center',
  onError,
  loading,
}: OptimizedImageProps) {
  const [isLoading, setLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    setHasError(true)
    if (onError) onError()
  }

  // Determine loading behavior - if priority is true, don't set loading prop
  const loadingProp = priority ? undefined : (loading || 'lazy')

  const imageClasses = `
    duration-700 ease-in-out
    ${isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'}
    ${hasError ? 'bg-neutral-100' : ''}
  `

  const objectFitClass = {
    'contain': 'object-contain',
    'cover': 'object-cover',
    'fill': 'object-fill',
    'none': 'object-none',
    'scale-down': 'object-scale-down',
  }[objectFit]

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {hasError ? (
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-100">
          <span className="text-neutral-400 text-4xl">🖼️</span>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          quality={quality}
          priority={priority}
          fill={fill}
          sizes={sizes}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
          className={`${imageClasses} ${objectFitClass}`}
          style={{ objectPosition }}
          onLoad={() => setLoading(false)}
          onError={handleError}
          loading={loadingProp}
        />
      )}
    </div>
  )
} 
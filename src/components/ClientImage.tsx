'use client'

import { useState, useEffect } from 'react'
import OptimizedImage from './OptimizedImage'
import { generateBlurPlaceholder, preloadImage, imageExists } from '@/utils/imageUtils'

interface ClientImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  quality?: number
  fill?: boolean
  sizes?: string
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
  objectPosition?: string
  fallbackSrc?: string
  color?: string
}

export default function ClientImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality = 75,
  fill = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  objectFit = 'cover',
  objectPosition = 'center',
  fallbackSrc = '/images/placeholder.jpg',
  color = '#0050A3',
}: ClientImageProps) {
  const [imageSrc, setImageSrc] = useState(src)
  const [blurDataURL, setBlurDataURL] = useState<string | undefined>(undefined)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Generate blur placeholder
    if (typeof window !== 'undefined') {
      setBlurDataURL(generateBlurPlaceholder(10, 10, color))
    }

    // Check if the image exists
    const checkImage = async () => {
      const exists = await imageExists(src)
      if (!exists && fallbackSrc) {
        setImageSrc(fallbackSrc)
      }
    }

    checkImage()

    // Preload the image if it's a priority image
    if (priority) {
      preloadImage(src).catch(() => {
        if (fallbackSrc) {
          setImageSrc(fallbackSrc)
        }
      })
    }
  }, [src, fallbackSrc, color, priority])

  const handleError = () => {
    if (fallbackSrc && imageSrc !== fallbackSrc) {
      setImageSrc(fallbackSrc)
    }
  }

  return (
    <OptimizedImage
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      quality={quality}
      fill={fill}
      sizes={sizes}
      placeholder="blur"
      blurDataURL={blurDataURL}
      objectFit={objectFit}
      objectPosition={objectPosition}
      onError={handleError}
    />
  )
} 
/**
 * Generates a tiny placeholder image as a data URL
 * This can be used as a blurDataURL for Next.js Image component
 * 
 * @param width Width of the placeholder
 * @param height Height of the placeholder
 * @param color Background color (hex)
 * @returns Data URL of the placeholder image
 */
export function generateBlurPlaceholder(
  width = 10,
  height = 10,
  color = '#0050A3'
): string {
  // Create a simple SVG placeholder for both client and server
  const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="${color}"/>
    <rect width="100%" height="100%" fill="url(#noise)" opacity="0.1"/>
    <defs>
      <filter id="noise">
        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
      </filter>
    </defs>
  </svg>`
  
  // Return a data URL for both client and server
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`
}

/**
 * Preloads an image and returns a promise that resolves when the image is loaded
 * 
 * @param src Image source URL
 * @returns Promise that resolves when the image is loaded
 */
export function preloadImage(src: string): Promise<void> {
  // Check if we're in a browser environment
  if (typeof window === 'undefined') {
    return Promise.resolve()
  }

  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve()
    img.onerror = reject
    img.src = src
  })
}

/**
 * Checks if an image exists at the given URL
 * 
 * @param url Image URL to check
 * @returns Promise that resolves to true if the image exists, false otherwise
 */
export async function imageExists(url: string): Promise<boolean> {
  try {
    const response = await fetch(url, { method: 'HEAD' })
    return response.ok && response.headers.get('content-type')?.startsWith('image/') || false
  } catch (error) {
    return false
  }
} 
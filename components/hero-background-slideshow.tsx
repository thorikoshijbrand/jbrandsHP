"use client"

import { useEffect, useState } from "react"

const images = [
  "/Fujisan.jpg",
  "/zen-garden-peaceful-atmosphere.jpg",
  "/yokohama-night-cityscape.jpg", // replaced traditional temple with Yokohama night cityscape
  "/cherry-blossom-soft-light.jpg",
]

export function HeroBackgroundSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 shadow-none"
          style={{
            backgroundImage: `url('${image}')`,
            opacity: currentIndex === index ? 0.4 : 0,
          }}
        />
      ))}
    </div>
  )
}

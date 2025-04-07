"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black px-4 text-white">
      {/* Animated background elements */}
      <div
        className="absolute left-0 top-0 h-full w-full opacity-20"
        style={{
          backgroundImage: `radial-gradient(
            circle at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(255, 0, 128, 0.8) 0%,
            rgba(0, 0, 0, 0) 50%
          )`,
        }}
      />

      <div className="absolute inset-0 z-0">
        <svg width="100%" height="100%" className="opacity-30">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center"
      >
        <h1 className="mb-6 font-mono text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="block">DISEÑO</span>
          <span className="mt-2 block bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
            CREATIVO
          </span>
        </h1>

        <p className="mx-auto mb-8 max-w-md text-lg text-gray-300 sm:text-xl">
          Transformando ideas en experiencias visuales impactantes
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200">
            <Link href="#portfolio">Ver Portafolio</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
            <Link href="#contact">Contactar</Link>
          </Button>
        </div>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <Link
          href="#portfolio"
          className="flex flex-col items-center text-sm text-gray-400 transition-colors hover:text-white"
        >
          <span className="mb-2">Descubre mi trabajo</span>
          <ArrowDown size={20} />
        </Link>
      </div>
    </section>
  )
}


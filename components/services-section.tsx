"use client"

import { motion } from "framer-motion"
import { Palette, Layout, PenTool, Megaphone, BookOpen, Package } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: <Palette className="h-10 w-10" />,
      title: "Branding",
      description: "Desarrollo de identidad visual, logos, guías de estilo y aplicaciones de marca.",
    },
    {
      icon: <Layout className="h-10 w-10" />,
      title: "Diseño Web",
      description: "Interfaces atractivas y funcionales para sitios web y aplicaciones digitales.",
    },
    {
      icon: <PenTool className="h-10 w-10" />,
      title: "Ilustración",
      description: "Ilustraciones personalizadas, iconografía y elementos gráficos únicos.",
    },
    {
      icon: <Megaphone className="h-10 w-10" />,
      title: "Publicidad",
      description: "Materiales promocionales para campañas digitales e impresas.",
    },
    {
      icon: <BookOpen className="h-10 w-10" />,
      title: "Editorial",
      description: "Diseño y maquetación de libros, revistas, catálogos y publicaciones.",
    },
    {
      icon: <Package className="h-10 w-10" />,
      title: "Packaging",
      description: "Diseño de empaques, etiquetas y experiencia de producto.",
    },
  ]

  return (
    <section id="services" className="bg-black py-20 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 font-mono text-3xl font-bold tracking-tight sm:text-4xl">SERVICIOS</h2>
          <div className="mx-auto h-1 w-20 bg-gradient-to-r from-pink-500 to-purple-500"></div>
          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            Ofrezco soluciones creativas adaptadas a las necesidades específicas de cada cliente, con un enfoque en
            resultados efectivos y de alta calidad.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-lg bg-gray-900 p-6 transition-all duration-300 hover:bg-gradient-to-br hover:from-pink-900/50 hover:to-purple-900/50"
            >
              <div className="mb-4 text-pink-500 transition-colors duration-300 group-hover:text-white">
                {service.icon}
              </div>
              <h3 className="mb-3 font-mono text-xl font-bold">{service.title}</h3>
              <p className="text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


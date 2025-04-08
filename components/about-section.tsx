"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Brush, Lightbulb, Zap, Layers, Users, Clock } from "lucide-react"

export function AboutSection() {
  const skills = [
    { icon: <Brush className="h-6 w-6" />, name: "Diseño Visual", level: 95 },
    { icon: <Lightbulb className="h-6 w-6" />, name: "Creatividad", level: 90 },
    { icon: <Zap className="h-6 w-6" />, name: "Adobe Creative Suite", level: 85 },
    { icon: <Layers className="h-6 w-6" />, name: "UI/UX", level: 80 },
    { icon: <Users className="h-6 w-6" />, name: "Comunicación", level: 85 },
    { icon: <Clock className="h-6 w-6" />, name: "Gestión de Tiempo", level: 75 },
  ]

  return (
    <section id="about" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 font-mono text-3xl font-bold tracking-tight sm:text-4xl">SOBRE MÍ</h2>
          <div className="mx-auto h-1 w-20 bg-gradient-to-r from-pink-500 to-purple-500"></div>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/img/sobremi.jpeg"
                alt="Designer portrait"
                fill
                className="object-cover"
              />
              <div className="absolute -bottom-2 -right-2 h-32 w-32 rounded-lg bg-gradient-to-br from-pink-500 to-purple-500"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="mb-4 font-mono text-2xl font-bold">
              Hola, soy <span className="text-pink-600">Alex</span>
            </h3>
            <p className="mb-6 text-gray-600">
              Soy un diseñador gráfico con más de 8 años de experiencia creando soluciones visuales impactantes. Mi
              enfoque combina estética contemporánea con funcionalidad, siempre buscando comunicar de manera efectiva el
              mensaje de cada cliente.
            </p>
            <p className="mb-6 text-gray-600">
              Mi estilo se caracteriza por un equilibrio entre minimalismo y expresividad, adaptándome a las necesidades
              específicas de cada proyecto. Creo firmemente que el buen diseño debe ser tanto visualmente atractivo como
              estratégicamente efectivo.
            </p>

            <div className="mt-4 space-y-4">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="mb-1 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {skill.icon}
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-pink-500 to-purple-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


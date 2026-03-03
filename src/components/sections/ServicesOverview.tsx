'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import Link from 'next/link'

const SERVICE_NAMES = [
  'Content Production',
  'Public Relations',
  'Sampling & Giveaways',
  'Experiences & Special Events',
  'Partnerships & Sponsorships',
] as const

const sectionVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
}

const slideTransition = {
  duration: 0.4,
  ease: [0.25, 0.46, 0.45, 0.94] as const,
}

export default function ServicesOverview() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SERVICE_NAMES.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [prefersReducedMotion])

  const getServiceName = (offset: number) =>
    SERVICE_NAMES[
      (currentIndex + offset + SERVICE_NAMES.length) % SERVICE_NAMES.length
    ]

  return (
    <motion.section
      className="bg-background px-4 py-24 sm:px-6 sm:py-32 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={sectionVariants}
    >
      <div className="mx-auto max-w-7xl">
        <motion.h2
          className="font-heading text-center text-2xl font-bold uppercase tracking-wider sm:text-3xl lg:text-4xl"
          variants={itemVariants}
        >
          What We Do
        </motion.h2>

        {/* Screen reader accessible list */}
        <ul className="sr-only">
          {SERVICE_NAMES.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>

        {/* Cycling text animation */}
        <motion.div
          className="mt-16 flex flex-col items-center justify-center gap-2 overflow-hidden py-8 sm:gap-3 lg:gap-4"
          variants={itemVariants}
          aria-hidden="true"
        >
          {/* Previous service (dimmed) */}
          <div className="h-8 overflow-hidden sm:h-10 lg:h-12">
            <AnimatePresence mode="popLayout">
              <motion.p
                key={`prev-${currentIndex}`}
                className="text-center text-sm italic text-neutral-600 sm:text-base lg:text-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={slideTransition}
              >
                {getServiceName(-1)}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Current service (prominent) */}
          <div className="h-10 overflow-hidden sm:h-14 lg:h-[4.5rem]">
            <AnimatePresence mode="popLayout">
              <motion.p
                key={`current-${currentIndex}`}
                className="font-heading text-center text-xl font-bold uppercase tracking-wider text-white sm:text-3xl lg:text-5xl"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={slideTransition}
              >
                {getServiceName(0)}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Next service (dimmed) */}
          <div className="h-8 overflow-hidden sm:h-10 lg:h-12">
            <AnimatePresence mode="popLayout">
              <motion.p
                key={`next-${currentIndex}`}
                className="text-center text-sm italic text-neutral-600 sm:text-base lg:text-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={slideTransition}
              >
                {getServiceName(1)}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.div className="mt-12 text-center" variants={itemVariants}>
          <Link
            href="/services"
            className="inline-block rounded-full border border-neutral-700 px-8 py-4 text-sm font-semibold uppercase tracking-widest transition-all duration-300 hover:border-foreground hover:bg-foreground hover:text-background"
          >
            View All Services
          </Link>
        </motion.div>
      </div>
    </motion.section>
  )
}

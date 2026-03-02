'use client'

import { motion } from 'framer-motion'
import { siteConfig } from '@/data/siteConfig'

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
}

export default function Hero() {
  return (
    <motion.section
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-background px-4 sm:px-6 lg:px-8"
      initial="hidden"
      animate="visible"
      variants={stagger}
    >
      {/* Decorative blurs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-red-brand/[0.04] blur-3xl" />
        <div className="absolute -bottom-16 -left-16 h-[260px] w-[260px] rounded-full bg-red-brand/[0.03] blur-2xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.h1
          className="font-heading text-3xl font-bold uppercase leading-tight tracking-wider sm:text-5xl lg:text-7xl"
          variants={fadeUp}
        >
          Elevating <span className="text-red-brand">Talent</span>
          <br className="hidden sm:block" /> in the Creator Economy
        </motion.h1>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-500 sm:mt-8 sm:text-lg lg:text-xl"
          variants={fadeUp}
        >
          We represent creators, connect brands, and build lasting partnerships
          that shape the future of digital entertainment.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10 sm:mt-12">
          <a
            href={siteConfig.calUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book a Call (opens in new tab)"
            className="inline-block rounded-full bg-red-brand px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-brand/25"
          >
            Book a Call
          </a>
        </motion.div>
      </div>
    </motion.section>
  )
}

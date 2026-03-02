'use client'

import { motion } from 'framer-motion'
import { siteConfig } from '@/data/siteConfig'

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
}

export default function CTASection() {
  return (
    <motion.section
      className="relative overflow-hidden bg-neutral-900 px-4 py-24 sm:px-6 sm:py-32 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={stagger}
    >
      {/* Subtle red glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-red-brand/[0.12] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.h2
          className="font-heading text-2xl font-bold uppercase tracking-wider text-white sm:text-3xl lg:text-5xl"
          variants={fadeUp}
        >
          Ready to Grow?
        </motion.h2>

        <motion.p
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-neutral-400 sm:text-lg"
          variants={fadeUp}
        >
          Let&rsquo;s build something extraordinary together. Book a call and
          discover how DygoTalent can elevate your brand.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10">
          <a
            href={siteConfig.calUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book a Call (opens in new tab)"
            className="inline-block rounded-full bg-red-brand px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-brand/30"
          >
            Book a Call
          </a>
        </motion.div>
      </div>
    </motion.section>
  )
}

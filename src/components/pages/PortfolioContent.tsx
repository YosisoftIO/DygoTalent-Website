'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { clients } from '@/data/clients'

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
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

export default function PortfolioContent() {
  return (
    <>
      {/* Hero */}
      <motion.section
        className="relative overflow-hidden bg-background px-4 pt-32 pb-24 sm:px-6 sm:pt-40 sm:pb-32 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -right-32 top-16 h-[480px] w-[480px] rounded-full bg-red-brand/[0.06] blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl">
          <motion.h1
            className="font-heading text-3xl font-bold uppercase leading-tight tracking-wider sm:text-5xl lg:text-6xl"
            variants={fadeUp}
          >
            Our Portfolio
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-400 sm:mt-8 sm:text-lg lg:text-xl"
            variants={fadeUp}
          >
            Brands we&rsquo;ve worked with &mdash; building partnerships that
            drive real results in the creator economy.
          </motion.p>
        </div>
      </motion.section>

      {/* Logo Wall */}
      <motion.section
        className="bg-background px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={stagger}
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {clients.map((client) => (
              <motion.div
                key={client.id}
                className="group flex aspect-[3/2] items-center justify-center rounded-2xl border border-neutral-800/80 bg-neutral-900 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30"
                variants={fadeUp}
              >
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={160}
                  height={80}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="grayscale max-h-16 w-auto object-contain transition-all duration-300 group-hover:grayscale-0"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="bg-background px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={stagger}
      >
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            className="font-heading text-xl font-bold uppercase tracking-wider sm:text-2xl lg:text-3xl"
            variants={fadeUp}
          >
            Want to See Your Brand Here?
          </motion.h2>
          <motion.p
            className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-neutral-400 sm:text-lg"
            variants={fadeUp}
          >
            Partner with DygoTalent and connect with creators who move culture.
          </motion.p>
          <motion.div className="mt-10" variants={fadeUp}>
            <Link
              href="/contact"
              className="inline-block rounded-full bg-red-brand px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-brand/25"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}

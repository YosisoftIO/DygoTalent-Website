'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

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

const values = [
  {
    title: 'Empowerment',
    description:
      'We empower creators to take control of their careers, giving them the tools, strategy, and representation they need to thrive on their own terms.',
  },
  {
    title: 'Authenticity',
    description:
      'Authentic connections drive everything we do. We champion genuine storytelling and real partnerships over empty metrics.',
  },
  {
    title: 'Impact',
    description:
      'Every partnership, campaign, and strategy is designed for lasting impact — building careers and brands that endure beyond trends.',
  },
]

const differentiators = [
  {
    label: 'Creator-First Approach',
    text: 'Every decision starts with what is best for the creator. Your vision leads; we build the infrastructure to support it.',
  },
  {
    label: 'End-to-End Partnership',
    text: 'From brand development to deal negotiation, we handle the business so you can focus on what you do best — creating.',
  },
  {
    label: 'Industry Insight',
    text: 'Deep roots in the creator economy mean we spot opportunities early and position our talent ahead of the curve.',
  },
]

export default function AboutContent() {
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
            Our Story
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-400 sm:mt-8 sm:text-lg lg:text-xl"
            variants={fadeUp}
          >
            DygoTalent was born from a clear mission — to reshape how talent is
            managed in the creator economy and build a future where creators and
            brands grow together.
          </motion.p>
        </div>
      </motion.section>

      {/* Company Story */}
      <motion.section
        className="bg-background px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={stagger}
      >
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <motion.h2
              className="font-heading text-xl font-bold uppercase tracking-wider sm:text-2xl"
              variants={fadeUp}
            >
              Building the Future of Talent Management
            </motion.h2>
            <motion.p
              className="mt-6 text-base leading-relaxed text-neutral-400 sm:text-lg"
              variants={fadeUp}
            >
              In a world where creators shape culture, DygoTalent bridges the gap
              between raw talent and lasting success. We started with a simple
              belief: every creator deserves a partner who truly understands the
              creator economy and fights for their story.
            </motion.p>
            <motion.p
              className="mt-4 text-base leading-relaxed text-neutral-400 sm:text-lg"
              variants={fadeUp}
            >
              Today, we represent a growing roster of creators and influencers,
              connecting them with brands for partnerships rooted in authenticity
              and mutual growth.
            </motion.p>
          </div>

          {/* Decorative element */}
          <motion.div
            className="relative hidden lg:block"
            variants={fadeUp}
          >
            <div className="absolute inset-0 rounded-3xl bg-neutral-900" />
            <div className="absolute inset-4 rounded-2xl border border-neutral-800/60" />
            <div className="absolute bottom-8 left-8 right-8 top-8 flex items-center justify-center">
              <Image
                src="/pug-logo.jpeg"
                alt="DygoTalent pug mascot logo"
                width={280}
                height={280}
                className="rounded-xl"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* What Makes Us Different */}
      <motion.section
        className="bg-neutral-950 px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={stagger}
      >
        <div className="mx-auto max-w-6xl">
          <motion.h2
            className="font-heading text-xl font-bold uppercase tracking-wider sm:text-2xl lg:text-3xl"
            variants={fadeUp}
          >
            What Makes Us Different
          </motion.h2>
          <motion.p
            className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg"
            variants={fadeUp}
          >
            Our approach puts creators at the center of every decision.
          </motion.p>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item, i) => (
              <motion.div
                key={item.label}
                className="group rounded-2xl border border-neutral-800/80 bg-neutral-900 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30"
                variants={fadeUp}
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-red-brand/[0.12] font-heading text-sm font-bold text-red-brand">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-heading text-xs font-bold uppercase tracking-wider">
                  {item.label}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Values */}
      <motion.section
        className="bg-background px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={stagger}
      >
        <div className="mx-auto max-w-6xl">
          <motion.h2
            className="font-heading text-xl font-bold uppercase tracking-wider sm:text-2xl lg:text-3xl"
            variants={fadeUp}
          >
            Our Values
          </motion.h2>

          <div className="mt-14 grid gap-10 sm:grid-cols-3">
            {values.map((v) => (
              <motion.div key={v.title} variants={fadeUp}>
                <div className="mb-4 h-px w-12 bg-red-brand" />
                <h3 className="font-heading text-xs font-bold uppercase tracking-wider">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                  {v.description}
                </p>
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
            Let&rsquo;s Work Together
          </motion.h2>
          <motion.p
            className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-neutral-400 sm:text-lg"
            variants={fadeUp}
          >
            Ready to take your career or brand to the next level?
          </motion.p>
          <motion.div className="mt-10 flex flex-wrap items-center justify-center gap-4" variants={fadeUp}>
            <Link
              href="/services"
              className="inline-block rounded-full border border-neutral-700 px-8 py-4 text-sm font-semibold uppercase tracking-widest transition-all duration-300 hover:border-foreground hover:bg-foreground hover:text-background"
            >
              Our Services
            </Link>
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

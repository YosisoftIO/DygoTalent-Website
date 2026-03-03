'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { teamMembers } from '@/data/team'

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

export default function TeamContent() {
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
          <div className="absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-red-brand/[0.06] blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl">
          <motion.h1
            className="font-heading text-3xl font-bold uppercase leading-tight tracking-wider sm:text-5xl lg:text-6xl"
            variants={fadeUp}
          >
            Our Team
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-400 sm:mt-8 sm:text-lg lg:text-xl"
            variants={fadeUp}
          >
            The people (and pug) behind DygoTalent &mdash; building the future
            of talent management.
          </motion.p>
        </div>
      </motion.section>

      {/* Team Grid */}
      <motion.section
        className="bg-background px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={stagger}
      >
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                className="overflow-hidden rounded-2xl border border-neutral-800/80 bg-neutral-900"
                variants={fadeUp}
              >
                <div className="relative aspect-square overflow-hidden bg-neutral-800">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={400}
                    height={400}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={`h-full w-full object-cover ${member.id === 'yoda' ? 'object-[center_20%]' : ''}`}
                  />
                </div>

                <div className="p-5">
                  <h3 className="font-heading text-sm font-bold uppercase tracking-wider sm:text-base">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-xs text-neutral-400 sm:text-sm">
                    {member.role}
                  </p>
                </div>
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
            Want to Work With Us?
          </motion.h2>
          <motion.p
            className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-neutral-400 sm:text-lg"
            variants={fadeUp}
          >
            We&apos;re always looking for great talent and exciting partnerships.
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

'use client'

import { motion } from 'framer-motion'
import { services } from '@/data/services'
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

const accentStyles = [
  {
    bg: 'bg-red-brand/[0.03]',
    border: 'border-red-brand/10',
    badge: 'bg-red-brand/[0.07] text-red-brand',
    line: 'bg-red-brand',
  },
  {
    bg: 'bg-neutral-50',
    border: 'border-neutral-200/60',
    badge: 'bg-foreground/[0.06] text-foreground',
    line: 'bg-foreground',
  },
  {
    bg: 'bg-red-brand/[0.02]',
    border: 'border-red-brand/[0.08]',
    badge: 'bg-red-brand/[0.07] text-red-brand',
    line: 'bg-red-brand/60',
  },
]

export default function ServicesContent() {
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
          <div className="absolute -left-24 top-20 h-[400px] w-[400px] rounded-full bg-red-brand/[0.03] blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl">
          <motion.h1
            className="font-heading text-3xl font-bold uppercase leading-tight tracking-wider sm:text-5xl lg:text-6xl"
            variants={fadeUp}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-500 sm:mt-8 sm:text-lg lg:text-xl"
            variants={fadeUp}
          >
            From talent management to brand collaborations and strategic growth
            advisory — everything you need to succeed in the creator economy.
          </motion.p>
        </div>
      </motion.section>

      {/* Service Sections */}
      {services.map((service, index) => {
        const style = accentStyles[index % accentStyles.length]
        const isReversed = index % 2 === 1

        return (
          <motion.section
            key={service.id}
            className={`${style.bg} px-4 py-20 sm:px-6 sm:py-28 lg:px-8`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <div
              className={`mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-20 ${
                isReversed ? 'lg:[direction:rtl]' : ''
              }`}
            >
              {/* Content */}
              <div className={isReversed ? 'lg:[direction:ltr]' : ''}>
                <motion.div
                  className={`mb-6 inline-flex rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest ${style.badge}`}
                  variants={fadeUp}
                >
                  {String(index + 1).padStart(2, '0')}
                </motion.div>

                <motion.h2
                  className="font-heading text-xl font-bold uppercase tracking-wider sm:text-2xl lg:text-3xl"
                  variants={fadeUp}
                >
                  {service.title}
                </motion.h2>

                <motion.p
                  className="mt-6 text-base leading-relaxed text-neutral-600 sm:text-lg"
                  variants={fadeUp}
                >
                  {service.fullDescription}
                </motion.p>

                <motion.p
                  className="mt-6 text-sm leading-relaxed text-neutral-500"
                  variants={fadeUp}
                >
                  {service.forWho}
                </motion.p>

                <motion.div className="mt-8" variants={fadeUp}>
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

              {/* Includes panel */}
              <div className={isReversed ? 'lg:[direction:ltr]' : ''}>
                <motion.div
                  className={`rounded-2xl border ${style.border} bg-white p-8 sm:p-10`}
                  variants={fadeUp}
                >
                  <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-neutral-600">
                    What&rsquo;s Included
                  </h3>
                  <ul className="mt-6 space-y-4">
                    {service.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-relaxed text-neutral-600 sm:text-base"
                      >
                        <span
                          className={`mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full ${style.line}`}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.section>
        )
      })}

      {/* Bottom CTA */}
      <motion.section
        className="relative overflow-hidden bg-foreground px-4 py-24 sm:px-6 sm:py-32 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={stagger}
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-red-brand/[0.08] blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <motion.h2
            className="font-heading text-2xl font-bold uppercase tracking-wider text-white sm:text-3xl lg:text-4xl"
            variants={fadeUp}
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-neutral-400 sm:text-lg"
            variants={fadeUp}
          >
            Book a call and let&rsquo;s explore how DygoTalent can help you grow.
          </motion.p>
          <motion.div className="mt-10" variants={fadeUp}>
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
    </>
  )
}

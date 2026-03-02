'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { services } from '@/data/services'

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

function ServiceIcon({ name }: { name: string }) {
  const cls = "h-7 w-7"
  switch (name) {
    case 'users':
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      )
    case 'handshake':
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
        </svg>
      )
    case 'trending-up':
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
        </svg>
      )
    default:
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
        </svg>
      )
  }
}

export default function ServicesOverview() {
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

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <motion.article
              key={service.id}
              className="group rounded-2xl border border-neutral-200/80 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-neutral-200/50"
              variants={itemVariants}
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-brand/[0.07] text-red-brand">
                <ServiceIcon name={service.icon} />
              </div>

              <motion.h3 className="font-heading text-sm font-bold uppercase tracking-wider">
                {service.title}
              </motion.h3>

              <motion.p className="mt-3 text-sm leading-relaxed text-neutral-500">
                {service.shortDescription}
              </motion.p>
            </motion.article>
          ))}
        </div>

        <motion.div className="mt-12 text-center" variants={itemVariants}>
          <Link
            href="/services"
            className="inline-block rounded-full border border-neutral-300 px-8 py-4 text-sm font-semibold uppercase tracking-widest transition-all duration-300 hover:border-foreground hover:bg-foreground hover:text-white"
          >
            View All Services
          </Link>
        </motion.div>
      </div>
    </motion.section>
  )
}

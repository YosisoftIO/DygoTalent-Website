'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { creators } from '@/data/creators'

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
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

function SocialIcon({ platform }: { platform: string }) {
  const cls = 'h-4 w-4'
  switch (platform) {
    case 'instagram':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      )
    case 'youtube':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      )
    case 'twitter':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    default:
      return null
  }
}

export default function TalentContent() {
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
          <div className="absolute -left-32 top-24 h-[420px] w-[420px] rounded-full bg-red-brand/[0.03] blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl">
          <motion.h1
            className="font-heading text-3xl font-bold uppercase leading-tight tracking-wider sm:text-5xl lg:text-6xl"
            variants={fadeUp}
          >
            Our Talent
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-500 sm:mt-8 sm:text-lg lg:text-xl"
            variants={fadeUp}
          >
            Meet the creators and influencers shaping culture &mdash; managed
            and represented by DygoTalent.
          </motion.p>
        </div>
      </motion.section>

      {/* Creator Grid */}
      <motion.section
        className="bg-background px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={stagger}
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {creators.map((creator) => (
              <motion.div
                key={creator.id}
                className="group overflow-hidden rounded-2xl border border-neutral-200/80 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-neutral-200/50"
                variants={fadeUp}
              >
                <div className="relative aspect-square overflow-hidden bg-neutral-100">
                  <Image
                    src={creator.photo}
                    alt={creator.name}
                    width={400}
                    height={400}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <h3 className="font-heading text-xs font-bold uppercase tracking-wider">
                    {creator.name}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-500">
                    {creator.niche}
                  </p>

                  <div className="mt-4 flex gap-3">
                    {Object.entries(creator.socials).map(
                      ([platform, url]) =>
                        url && (
                          <a
                            key={platform}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${creator.name} on ${platform.charAt(0).toUpperCase() + platform.slice(1)}`}
                            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-neutral-500 transition-colors duration-200 hover:bg-red-brand hover:text-white"
                          >
                            <SocialIcon platform={platform} />
                          </a>
                        )
                    )}
                  </div>
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
            Join Our Roster
          </motion.h2>
          <motion.p
            className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-neutral-500 sm:text-lg"
            variants={fadeUp}
          >
            Ready to take your creator career to the next level?
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

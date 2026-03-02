'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { siteConfig } from '@/data/siteConfig'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header
      role="banner"
      className="sticky top-0 z-50 w-full border-b border-neutral-800/60 bg-neutral-900/80 backdrop-blur-lg"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="font-heading text-lg font-bold uppercase tracking-wider text-foreground"
        >
          DygoTalent
        </Link>

        {/* Desktop nav */}
        <nav role="navigation" aria-label="Main navigation" className="hidden items-center gap-1 md:flex">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-neutral-400 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href={siteConfig.calUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Book a Call (opens in new tab)"
          className="hidden rounded-full bg-red-brand px-5 py-2 text-sm font-semibold text-white transition-transform hover:scale-105 md:inline-block"
        >
          Book a Call
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="inline-flex items-center justify-center rounded-md p-2 text-neutral-400 hover:text-foreground md:hidden"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-neutral-800/60 bg-neutral-900 md:hidden"
          >
            <nav aria-label="Mobile navigation" className="flex flex-col gap-1 px-4 py-4">
              {siteConfig.navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-md px-3 py-2 text-sm font-medium text-neutral-400 transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={siteConfig.calUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book a Call (opens in new tab)"
                className="mt-2 rounded-full bg-red-brand px-5 py-2 text-center text-sm font-semibold text-white"
              >
                Book a Call
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

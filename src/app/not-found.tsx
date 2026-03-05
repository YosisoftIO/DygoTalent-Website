import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for does not exist.',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="font-heading text-5xl font-bold uppercase tracking-wider sm:text-6xl">
        404
      </h1>
      <p className="mt-4 text-lg text-foreground/70">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-full bg-red-brand px-8 py-3 font-semibold text-white transition-opacity hover:opacity-90"
      >
        Back to Home
      </Link>
    </section>
  )
}

import type { Metadata } from 'next'
import ContactContent from '@/components/pages/ContactContent'

export const metadata: Metadata = {
  title: 'Contact Us — Book a Call',
  description:
    'Get in touch with DygoTalent. Book a call, send us an email, or connect on social media. We are ready to help you grow in the creator economy.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Us | DygoTalent',
    description:
      'Book a call with DygoTalent or reach out through email and social media.',
  },
  twitter: {
    title: 'Contact Us | DygoTalent',
    description:
      'Book a call with DygoTalent or reach out through email and social media.',
  },
}

export default function ContactPage() {
  return <ContactContent />
}

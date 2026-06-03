'use client'

import { useLang } from '@/context/LanguageContext'
import ContactForm from '@/components/ContactForm'
import BookingWidget from '@/components/BookingWidget'

export default function ContactPage() {
  const { t } = useLang()

  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{t('contact.title')}</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">{t('contact.subtitle')}</p>
        </div>
      </section>

      {/* Form + Booking */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact form */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">{t('contact.title')}</h2>
              <ContactForm />
            </div>

            {/* Booking widget */}
            <div>
              <BookingWidget />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

'use client'

import { useLang } from '@/context/LanguageContext'
import ServiceDetail from '@/components/ServiceDetail'

export default function ServicesPage() {
  const { t } = useLang()
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {t('servicesPage.title')}
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">{t('servicesPage.subtitle')}</p>
        </div>
      </section>
      <ServiceDetail />
    </>
  )
}

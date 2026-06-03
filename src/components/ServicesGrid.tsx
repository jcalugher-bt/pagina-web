'use client'

import Link from 'next/link'
import { FileText, TrendingUp, Calculator, BarChart3, Target, Briefcase, ArrowRight } from 'lucide-react'
import { useLang } from '@/context/LanguageContext'

const icons = [FileText, TrendingUp, Calculator, BarChart3, Target, Briefcase]

export default function ServicesGrid() {
  const { t } = useLang()

  const items = Array.from({ length: 6 }, (_, i) => ({
    icon: icons[i],
    title: t(`services.items.${i}.title`),
    description: t(`services.items.${i}.description`),
  }))

  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{t('services.title')}</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">{t('services.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group bg-white border border-slate-200 rounded-2xl p-6 hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="w-12 h-12 bg-emerald-50 group-hover:bg-emerald-500 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                <Icon className="w-6 h-6 text-emerald-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-slate-900 font-semibold text-lg mb-2">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
              <div className="mt-4 flex items-center gap-1 text-emerald-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link href="/services">{t('nav.services')}</Link>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

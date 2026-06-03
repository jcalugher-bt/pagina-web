'use client'

import { ArrowUpRight } from 'lucide-react'
import { useLang } from '@/context/LanguageContext'

const gradients = [
  'from-blue-600 to-emerald-600',
  'from-emerald-600 to-teal-600',
  'from-slate-700 to-blue-600',
]

export default function Portfolio() {
  const { t } = useLang()

  const items = Array.from({ length: 3 }, (_, i) => ({
    title: t(`portfolio.items.${i}.title`),
    description: t(`portfolio.items.${i}.description`),
    result: t(`portfolio.items.${i}.result`),
    gradient: gradients[i],
  }))

  return (
    <section className="bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t('portfolio.title')}</h2>
          <p className="text-slate-400 text-lg">{t('portfolio.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map(({ title, description, result, gradient }) => (
            <div
              key={title}
              className="group bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`h-2 bg-gradient-to-r ${gradient}`} />
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-white font-semibold text-lg leading-tight">{title}</h3>
                  <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-emerald-400 transition-colors shrink-0 ml-2" />
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{description}</p>
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg px-3 py-2">
                  <span className="text-emerald-400 font-semibold text-sm">{result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

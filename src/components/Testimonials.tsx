'use client'

import { Quote } from 'lucide-react'
import { useLang } from '@/context/LanguageContext'

export default function Testimonials() {
  const { t } = useLang()

  const items = Array.from({ length: 3 }, (_, i) => ({
    quote: t(`testimonials.items.${i}.quote`),
    name: t(`testimonials.items.${i}.name`),
    role: t(`testimonials.items.${i}.role`),
    company: t(`testimonials.items.${i}.company`),
  }))

  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{t('testimonials.title')}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map(({ quote, name, role, company }) => (
            <div
              key={name}
              className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:border-emerald-200 transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-emerald-400 mb-4" />
              <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">&ldquo;{quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {name.charAt(0)}
                </div>
                <div>
                  <p className="text-slate-900 font-semibold text-sm">{name}</p>
                  <p className="text-slate-500 text-xs">{role} · {company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

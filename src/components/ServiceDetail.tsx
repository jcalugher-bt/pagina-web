'use client'

import { FileText, TrendingUp, Calculator, BarChart3, Target, Briefcase, CheckCircle2 } from 'lucide-react'
import { useLang } from '@/context/LanguageContext'

const icons = [FileText, TrendingUp, Calculator, BarChart3, Target, Briefcase]
const colorAccents = [
  'from-blue-500 to-emerald-500',
  'from-emerald-500 to-teal-500',
  'from-teal-500 to-cyan-500',
  'from-cyan-500 to-blue-500',
  'from-purple-500 to-emerald-500',
  'from-emerald-500 to-blue-500',
]

export default function ServiceDetail() {
  const { t } = useLang()

  const items = Array.from({ length: 6 }, (_, i) => {
    const included: string[] = []
    let j = 0
    while (true) {
      const val = t(`servicesPage.items.${i}.included.${j}`)
      if (val === `servicesPage.items.${i}.included.${j}`) break
      included.push(val)
      j++
    }
    return {
      icon: icons[i],
      title: t(`servicesPage.items.${i}.title`),
      description1: t(`servicesPage.items.${i}.description1`),
      description2: t(`servicesPage.items.${i}.description2`),
      description3: t(`servicesPage.items.${i}.description3`),
      included,
      gradient: colorAccents[i],
    }
  })

  return (
    <div className="py-16">
      {items.map(({ icon: Icon, title, description1, description2, description3, included, gradient }, i) => (
        <section
          key={title}
          id={`service-${i}`}
          className={`py-20 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              style={{ direction: i % 2 !== 0 ? 'rtl' : 'ltr' }}
            >
              {/* Icon / Visual side */}
              <div style={{ direction: 'ltr' }} className={`${i % 2 !== 0 ? 'order-2 lg:order-1' : ''}`}>
                <div className="relative">
                  <div className={`w-full aspect-square max-w-sm mx-auto bg-gradient-to-br ${gradient} rounded-3xl flex items-center justify-center opacity-90`}>
                    <Icon className="w-32 h-32 text-white opacity-80" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-slate-100">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                      <span className="text-slate-700 text-sm font-medium">{included.length} {t('servicesPage.title').includes('Complete') ? 'deliverables' : 'livrabile'}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text side */}
              <div style={{ direction: 'ltr' }} className={`${i % 2 !== 0 ? 'order-1 lg:order-2' : ''}`}>
                <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${gradient} p-0.5 rounded-full mb-6`}>
                  <div className="bg-white rounded-full px-4 py-1">
                    <span className="text-slate-700 text-sm font-semibold">0{i + 1}</span>
                  </div>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">{title}</h2>
                <p className="text-slate-600 leading-relaxed mb-4">{description1}</p>
                <p className="text-slate-600 leading-relaxed mb-4">{description2}</p>
                <p className="text-slate-600 leading-relaxed mb-8">{description3}</p>

                <div className="bg-slate-900 rounded-2xl p-6">
                  <h3 className="text-emerald-400 font-semibold text-sm uppercase tracking-wider mb-4">
                    {t('lang') === 'en' ? "What's included:" : 'Ce include:'}
                  </h3>
                  <ul className="space-y-2">
                    {included.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-slate-300 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}

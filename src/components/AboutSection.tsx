'use client'

import { Shield, Star, Zap, Handshake } from 'lucide-react'
import { useLang } from '@/context/LanguageContext'

const valueIcons = [Shield, Star, Zap, Handshake]

export default function AboutSection() {
  const { t } = useLang()

  const values = Array.from({ length: 4 }, (_, i) => ({
    icon: valueIcons[i],
    title: t(`about.values.${i}.title`),
    description: t(`about.values.${i}.description`),
  }))

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{t('about.title')}</h2>
            <p className="text-emerald-600 font-medium mb-4">{t('about.subtitle')}</p>
            <p className="text-slate-500 leading-relaxed mb-8">{t('about.description')}</p>

            <div className="bg-slate-900 rounded-2xl p-6">
              <h3 className="text-emerald-400 font-semibold mb-2">{t('about.mission.title')}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{t('about.mission.text')}</p>
            </div>
          </div>

          {/* Values grid */}
          <div className="grid grid-cols-2 gap-4">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-emerald-300 transition-colors">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-emerald-600" />
                </div>
                <h4 className="text-slate-900 font-semibold text-sm mb-1">{title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { Shield, Star, Zap, Handshake } from 'lucide-react'
import { useLang } from '@/context/LanguageContext'

const valueIcons = [Shield, Star, Zap, Handshake]

export default function AboutPage() {
  const { t } = useLang()

  const values = Array.from({ length: 4 }, (_, i) => ({
    icon: valueIcons[i],
    title: t(`about.values.${i}.title`),
    description: t(`about.values.${i}.description`),
  }))

  const teamMembers = Array.from({ length: 3 }, (_, i) => ({
    name: t(`about.team.members.${i}.name`),
    role: t(`about.team.members.${i}.role`),
    bio: t(`about.team.members.${i}.bio`),
  }))

  const timelineItems = Array.from({ length: 4 }, (_, i) => ({
    year: t(`about.timeline.items.${i}.year`),
    title: t(`about.timeline.items.${i}.title`),
    description: t(`about.timeline.items.${i}.description`),
  }))

  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{t('about.title')}</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">{t('about.subtitle')}</p>
        </div>
      </section>

      {/* Mission + Description */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">{t('about.description')}</p>
              <div className="bg-slate-900 rounded-2xl p-6">
                <h3 className="text-emerald-400 font-semibold mb-2">{t('about.mission.title')}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{t('about.mission.text')}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {values.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-emerald-300 transition-colors"
                >
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

      {/* Team */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">{t('about.team.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.map(({ name, role, bio }) => (
              <div key={name} className="bg-white border border-slate-200 rounded-2xl p-6 text-center hover:shadow-lg hover:border-emerald-200 transition-all">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {name.charAt(0)}
                </div>
                <h3 className="text-slate-900 font-semibold text-lg mb-1">{name}</h3>
                <p className="text-emerald-600 text-sm font-medium mb-3">{role}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">{t('about.timeline.title')}</h2>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-0.5 top-0 bottom-0 w-0.5 bg-slate-200" />
            <div className="space-y-10">
              {timelineItems.map(({ year, title, description }, i) => (
                <div key={year} className={`relative flex items-center gap-6 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${i % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 inline-block">
                      <p className="text-emerald-500 font-bold text-lg">{year}</p>
                      <h3 className="text-slate-900 font-semibold mb-1">{title}</h3>
                      <p className="text-slate-500 text-sm">{description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-emerald-500 rounded-full border-4 border-white shadow" />
                  <div className="w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

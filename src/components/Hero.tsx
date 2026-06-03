'use client'

import Link from 'next/link'
import { ArrowRight, Users, DollarSign, Award } from 'lucide-react'
import { useLang } from '@/context/LanguageContext'

export default function Hero() {
  const { t } = useLang()

  return (
    <section className="relative min-h-screen flex items-center bg-slate-900 overflow-hidden">
      {/* Grid background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(rgba(16,185,129,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.3) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/95 to-emerald-950/40" />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-1.5 mb-6">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-emerald-400 text-sm font-medium">FinTech Vision Consulting</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {t('hero.headline').split(' ').map((word, i) =>
              i === 0 || i === 1 ? (
                <span key={i} className="text-emerald-400">{word} </span>
              ) : (
                <span key={i}>{word} </span>
              )
            )}
          </h1>

          {/* Subheadline */}
          <p className="text-slate-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl">
            {t('hero.subheadline')}
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-emerald-500/25 hover:-translate-y-0.5"
            >
              {t('hero.cta')}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 border border-slate-600 hover:border-emerald-500 text-slate-300 hover:text-emerald-400 font-semibold px-8 py-4 rounded-xl transition-all duration-200"
            >
              {t('nav.services')}
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-6 pt-10 border-t border-slate-800">
            {[
              { icon: Users, value: t('hero.stats.clients') },
              { icon: DollarSign, value: t('hero.stats.managed') },
              { icon: Award, value: t('hero.stats.success') },
            ].map(({ icon: Icon, value }) => (
              <div key={value} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-emerald-400" />
                </div>
                <span className="text-white font-semibold text-sm sm:text-base">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, TrendingUp } from 'lucide-react'
import { useLang } from '@/context/LanguageContext'

export default function Navbar() {
  const { lang, setLang, t } = useLang()
  const [open, setOpen] = useState(false)

  const links = [
    { href: '/', label: t('nav.home') },
    { href: '/services', label: t('nav.services') },
    { href: '/about', label: t('nav.about') },
    { href: '/contact', label: t('nav.contact') },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-bold text-sm sm:text-base leading-tight">
              FinTech Vision
              <span className="block text-emerald-400 text-xs font-medium">Consulting</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-slate-300 hover:text-emerald-400 transition-colors text-sm font-medium"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Lang switcher + mobile toggle */}
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-slate-800 rounded-lg p-0.5 text-xs font-semibold">
              <button
                onClick={() => setLang('ro')}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  lang === 'ro'
                    ? 'bg-emerald-500 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                RO
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  lang === 'en'
                    ? 'bg-emerald-500 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>
            <button
              className="md:hidden text-slate-300 hover:text-white"
              onClick={() => setOpen(!open)}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 px-4 py-3 flex flex-col gap-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-slate-300 hover:text-emerald-400 transition-colors text-sm font-medium py-1"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}

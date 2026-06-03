'use client'

import Link from 'next/link'
import { TrendingUp, Mail, Phone, MapPin } from 'lucide-react'
import { useLang } from '@/context/LanguageContext'

export default function Footer() {
  const { lang, t } = useLang()

  const navKeys = ['nav.home', 'nav.services', 'nav.about', 'nav.contact']
  const navHrefs = ['/', '/services', '/about', '/contact']

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold">
                FinTech Vision<span className="text-emerald-400"> Consulting</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">{t('footer.tagline')}</p>
          </div>

          {/* Nav links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              {lang === 'ro' ? 'Pagini' : 'Pages'}
            </h3>
            <div className="flex flex-col gap-2">
              {navHrefs.map((href, i) => (
                <Link
                  key={href}
                  href={href}
                  className="text-slate-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  {t(navKeys[i])}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                {t('contact.info.email')}
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                {t('contact.info.phone')}
              </div>
              <div className="flex items-start gap-2 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                {t('contact.info.address')}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs">{t('footer.copyright')}</p>
          <div className="flex gap-4">
            <Link href="#" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">
              {t('footer.links.privacy')}
            </Link>
            <Link href="#" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">
              {t('footer.links.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

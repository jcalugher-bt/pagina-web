'use client'

import { Calendar, Clock, Mail, Phone, MapPin } from 'lucide-react'
import { useLang } from '@/context/LanguageContext'

export default function BookingWidget() {
  const { t } = useLang()

  return (
    <div className="space-y-6">
      {/* Booking card */}
      <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center">
            <Calendar className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <h3 className="text-white font-semibold">{t('contact.booking.title')}</h3>
            <p className="text-slate-400 text-xs flex items-center gap-1">
              <Clock className="w-3 h-3" /> 30 min
            </p>
          </div>
        </div>
        <p className="text-slate-400 text-sm mb-5">{t('contact.booking.subtitle')}</p>

        {/* Calendly placeholder */}
        <div className="bg-slate-800 border-2 border-dashed border-slate-600 rounded-xl h-48 flex flex-col items-center justify-center gap-2 text-center px-4">
          <Calendar className="w-8 h-8 text-emerald-400 opacity-60" />
          <p className="text-slate-400 text-sm">{t('contact.booking.placeholder')}</p>
          <code className="text-xs text-emerald-400/60 bg-slate-900 px-2 py-1 rounded mt-1">
            {`<Calendly />`}
          </code>
        </div>
      </div>

      {/* Contact info */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4">
        <h3 className="text-slate-900 font-semibold text-sm uppercase tracking-wider">Contact</h3>
        <div className="flex items-center gap-3 text-slate-600 text-sm">
          <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center shrink-0">
            <Mail className="w-4 h-4 text-emerald-500" />
          </div>
          <a href={`mailto:${t('contact.info.email')}`} className="hover:text-emerald-600 transition-colors">
            {t('contact.info.email')}
          </a>
        </div>
        <div className="flex items-center gap-3 text-slate-600 text-sm">
          <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center shrink-0">
            <Phone className="w-4 h-4 text-emerald-500" />
          </div>
          <a href={`tel:${t('contact.info.phone')}`} className="hover:text-emerald-600 transition-colors">
            {t('contact.info.phone')}
          </a>
        </div>
        <div className="flex items-start gap-3 text-slate-600 text-sm">
          <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
            <MapPin className="w-4 h-4 text-emerald-500" />
          </div>
          <span>{t('contact.info.address')}</span>
        </div>
      </div>
    </div>
  )
}

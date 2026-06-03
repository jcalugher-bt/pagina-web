'use client'

import { useState, FormEvent } from 'react'
import { Send, CheckCircle } from 'lucide-react'
import { useLang } from '@/context/LanguageContext'

export default function ContactForm() {
  const { t } = useLang()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center h-full py-16 text-center">
        <CheckCircle className="w-16 h-16 text-emerald-400 mb-4" />
        <p className="text-slate-900 font-semibold text-xl mb-2">{t('contact.form.success')}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">{t('contact.form.name')}</label>
        <input
          type="text"
          name="name"
          required
          value={form.name}
          onChange={handleChange}
          placeholder={t('contact.form.namePlaceholder')}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">{t('contact.form.email')}</label>
        <input
          type="email"
          name="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder={t('contact.form.emailPlaceholder')}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">{t('contact.form.company')}</label>
        <input
          type="text"
          name="company"
          value={form.company}
          onChange={handleChange}
          placeholder={t('contact.form.companyPlaceholder')}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">{t('contact.form.message')}</label>
        <textarea
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder={t('contact.form.messagePlaceholder')}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-6 py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-emerald-500/25"
      >
        {t('contact.form.submit')}
        <Send className="w-4 h-4" />
      </button>
    </form>
  )
}

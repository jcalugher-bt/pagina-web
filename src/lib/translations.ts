import ro from '../../locales/ro.json'
import en from '../../locales/en.json'

export type Lang = 'ro' | 'en'

const dicts: Record<Lang, Record<string, unknown>> = { ro, en }

export function getTranslator(lang: Lang) {
  const dict = dicts[lang]
  return function t(key: string): string {
    const parts = key.split('.')
    let current: unknown = dict
    for (const part of parts) {
      if (current == null || typeof current !== 'object') return key
      current = (current as Record<string, unknown>)[part]
    }
    if (typeof current === 'string') return current
    return key
  }
}

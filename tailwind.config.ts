import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#0F172A',
          800: '#1E293B',
          700: '#334155',
        },
        secondary: {
          600: '#059669',
          500: '#10B981',
          400: '#34D399',
        },
        background: {
          DEFAULT: '#F8FAFC',
          light: '#F1F5F9',
          white: '#FFFFFF',
        },
        accent: '#3B82F6',
        heading: '#0F172A',
        body: '#475569',
      },
    },
  },
  plugins: [],
}
export default config

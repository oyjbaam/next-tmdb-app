import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '9/16': '9 / 16',
      },
      keyframes: {
        motionInLeft: {
          '0%': {
            left: '-100%',
          },
          '100%': {
            left: '0',
          },
        },
        motionFromTop: {
          '0%': {
            opacity: '30%',
            scale: '90%%',
          },
          '100%': {
            opacity: '100%',
            scale: '100%%',
          },
        },
        changeDisplayBlock: {
          '0%': {
            opacity: '80%',
          },
          '100%': {
            opacity: '100%',
            display: 'block',
          },
        },
      },
      animation: {
        motionInLeft: 'motionInLeft .25s cubic-bezier(0.33, 1, 0.68, 1) 0s 1 normal none running',
        motionFromTop: 'motionFromTop .45s cubic-bezier(0.33, 1, 0.68, 1) 0s 1 normal none running',
        changeDisplayBlock: 'changeDisplayBlock .25s cubic-bezier(0.33, 1, 0.68, 1) 0s 1 normal none running',
      },
    },
  },
  plugins: [],
}
export default config

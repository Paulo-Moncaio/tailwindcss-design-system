import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'blue-alfabit': {
          1: '#2D5BFF',
          2: '#6284FD',
          3: '#96ADFF',
          4: '#ECF0FF',
          hover: '#1B4AF0',
          click: '#002ED0'
        }
      }
    },
  },
  plugins: [],
}
export default config

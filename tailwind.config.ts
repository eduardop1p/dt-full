import type { Config } from 'tailwindcss';

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
        '666666': '#666666',
        f0f0f0: '#f0f0f0',
        CCCCCC: '#CCCCCC',
        e6e6e6: '#e6e6e6',
        '333333': '#333333',
        efefef: '#efefef',
        '6666': '#6666',
        '0003': '#0003',
        c0c0c0: '#c0c0c0',
        '808080': '#808080',
      },
    },
  },
  plugins: [],
};
export default config;

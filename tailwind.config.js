/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}', // فقط إذا كنت تستخدم مجلد pages (في Next.js)
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#2D7EF7', // زرّاء حيوي للـ CTAs
          foreground: '#ffffff',
        },
        soft: {
          blue: '#EEF5FF',
          purple: '#F3EEFF',
          gray: '#F7F9FC',
        },
      },
      fontFamily: {
        heading: ['"Bw Gradual"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.06)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(1200px 600px at 10% 10%, #EEF5FF 0%, transparent 60%), ' +
          'radial-gradient(1000px 500px at 90% 20%, #F3EEFF 0%, transparent 60%), ' +
          'linear-gradient(180deg, #FFFFFF 0%, #F7F9FC 100%)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [
    // مثال: إذا كنت تستخدم نماذج أو أزرار مخصصة
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/aspect-ratio'),
  ],
};

module.exports = {
content: [
"./app/**/*.{js,jsx}",
"./components/**/*.{js,jsx}",
"./pages/**/*.{js,jsx}",
],
theme: {
extend: {
colors: {
accent: {
DEFAULT: "#2D7EF7", // vibrant blue for CTAs
foreground: "#ffffff",
},
soft: {
blue: "#EEF5FF",
purple: "#F3EEFF",
gray: "#F7F9FC",
},
},
fontFamily: {
heading: ['"Bw Gradual"', 'system-ui', 'ui-sans-serif', 'Segoe UI', 'Arial'],
body: ['Inter', 'system-ui', 'ui-sans-serif', 'Segoe UI', 'Arial'],
},
boxShadow: {
soft: "0 10px 30px rgba(0,0,0,0.06)",
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
'hero-gradient': 'radial-gradient(1200px 600px at 10% 10%, #EEF5FF 0%, transparent 60%), radial-gradient(1000px 500px at 90% 20%, #F3EEFF 0%, transparent 60%), linear-gradient(180deg, #FFFFFF 0%, #F7F9FC 100%)',
},
borderRadius: {
'2xl': '1rem',
'3xl': '1.5rem',
}
},
},
plugins: [],
};

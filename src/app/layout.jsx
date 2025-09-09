export const metadata = {
metadataBase: new URL('https://stepenglish.sa'),
title: {
default: 'Step English — Learn English in Steps',
template: '%s | Step English',
},
description: 'Step English is a Saudi-based platform that helps you master English through a smart, structured, and culturally-relevant approach. Start for free.',
openGraph: {
title: 'Step English — Master English in Steps',
description: 'The smart, structured way to learn English — built for Saudi learners.',
url: 'https://stepenglish.sa',
siteName: 'Step English',
images: [
{
url: '/og-step-english.png',
width: 1200,
height: 630,
alt: 'Step English — Master English in Steps',
},
],
locale: 'en_SA',
type: 'website',
},
twitter: {
card: 'summary_large_image',
title: 'Step English — Master English in Steps',
description: 'The smart, structured way to learn English — built for Saudi learners.',
images: ['/og-step-english.png'],
},
alternates: {
canonical: 'https://stepenglish.sa/',
},
};


export default function RootLayout({ children }) {
return (
<html lang="en" className="scroll-smooth">
<body className="font-body bg-white text-gray-800">
{children}
</body>
</html>
);
}

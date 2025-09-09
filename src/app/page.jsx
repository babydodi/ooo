'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Logo from '../components/Logo';
import FeatureCard from '../components/FeatureCard';
import HowItem from '../components/HowItem';
import TestimonialCard from '../components/TestimonialCard';
import SocialIcon from '../components/SocialIcon';
import StepsIllustration from '../components/StepsIllustration';
import DecorativeWaves from '../components/DecorativeWaves';

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-hero-gradient">
      <DecorativeWaves />
      {/* Nav + Hero + Sections go here (same as before, but importing components) */}
      {/* You can paste the same structure from the canvas version here */}
    </main>
  );
}

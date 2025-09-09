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
      {/* Background waves */}
      <DecorativeWaves />

      {/* ========== Navbar ========== */}
      <header className="flex items-center justify-between px-6 py-4 relative z-10">
        <Logo />

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="hover:text-accent">Features</a>
          <a href="#how" className="hover:text-accent">How It Works</a>
          <a href="#pricing" className="hover:text-accent">Pricing</a>
          <a href="#contact" className="hover:text-accent">Contact</a>
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <a href="#get-started" className="btn btn-primary">
            Start Free
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg border border-gray-200"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden flex flex-col items-center py-4 space-y-4 z-20">
            <a href="#features" className="hover:text-accent">Features</a>
            <a href="#how" className="hover:text-accent">How It Works</a>
            <a href="#pricing" className="hover:text-accent">Pricing</a>
            <a href="#contact" className="hover:text-accent">Contact</a>
            <a href="#get-started" className="btn btn-primary w-40 text-center">
              Start Free
            </a>
          </div>
        )}
      </header>

      {/* ========== Hero Section ========== */}
      <section className="relative z-10 text-center py-24 px-6">
        <motion.h1
          className="font-heading text-4xl md:text-6xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Master English in Steps. <br className="hidden md:block" />
          One Lesson at a Time.
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          The smart, structured way to learn English — built for Saudi learners.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <a href="#get-started" className="btn btn-primary text-lg px-8 py-4">
            Start Your First Lesson — Free
          </a>
        </motion.div>

        {/* Steps Illustration */}
        <StepsIllustration />
      </section>
    </main>
  );
}

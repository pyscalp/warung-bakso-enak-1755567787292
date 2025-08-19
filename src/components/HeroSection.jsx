import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-primary to-secondary text-white py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <img src="/images/hero_pattern.svg" alt="Bakso Pattern" className="w-full h-full object-cover" />
      </div>
      <div className="container mx-auto text-center relative z-10 px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg"
        >
          Warung Bakso Enak
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-md"
        >
          Nikmati Kelezatan Sejati: Kuah Gurih, Bakso Kenyal, Sensasi Tak Terlupakan!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            to="/layanan"
            className="inline-block bg-accent text-secondary px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-400 transition-all duration-300 shadow-lg transform hover:scale-105"
          >
            Lihat Menu Kami
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
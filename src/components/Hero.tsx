"use client";

import { motion } from "framer-motion";
import { ArrowRight, Flame, Sparkles, Star } from "lucide-react";
import { fadeUp, imageCredits } from "./content";
import { Navbar } from "./Navbar";

const stats = [
  ["20 min", "pickup window"],
  ["NGN 4,500+", "daily bowls"],
  ["Mon to Sat", "11am to 8pm"],
];

export function Hero() {
  return (
    <section className="grain relative min-h-screen bg-clay">
      <Navbar />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-4 pb-12 pt-28 sm:px-6 sm:pt-32 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.7 }}>
          <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-coal/10 bg-white/70 px-4 py-2 text-xs font-bold text-palm backdrop-blur sm:text-sm">
            <Sparkles className="h-4 w-4 shrink-0" />
            <span>Lagos style bowls built for lunch rush</span>
          </div>
          <h1 className="text-balance font-display text-4xl font-black leading-[0.96] text-coal sm:text-6xl lg:text-7xl xl:text-8xl">
            Fire grilled bowls for hungry days.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-coal/72 sm:mt-6 sm:text-lg sm:leading-8">
            Smoky jollof, grilled proteins, crisp sides, and cold drinks packed for pickup, office delivery, and weekend trays.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-coal px-6 py-4 font-bold text-clay transition hover:-translate-y-0.5 hover:bg-ember sm:px-7"
            >
              See bowls
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#orders"
              className="inline-flex items-center justify-center rounded-full border border-coal/15 bg-white/70 px-6 py-4 font-bold text-coal backdrop-blur transition hover:-translate-y-0.5 hover:border-ember hover:text-ember sm:px-7"
            >
              Plan a tray
            </a>
          </div>
          <div className="mt-8 grid max-w-xl grid-cols-1 gap-3 sm:mt-9 sm:grid-cols-3">
            {stats.map(([top, bottom]) => (
              <div key={top} className="rounded-[8px] border border-coal/10 bg-white/65 p-4 backdrop-blur">
                <p className="text-xl font-black text-coal">{top}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-coal/55">{bottom}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, rotate: 1 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -left-4 top-10 z-10 hidden rounded-[8px] bg-white p-4 shadow-2xl sm:block lg:-left-6 lg:top-14">
            <div className="flex items-center gap-1 text-ember">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="mt-2 max-w-[12rem] text-sm font-bold text-coal">The lunch line smells like pepper smoke.</p>
          </div>
          <div className="absolute -right-2 bottom-8 z-10 rounded-full bg-palm px-4 py-3 text-xs font-black uppercase tracking-[0.15em] text-white shadow-xl sm:text-sm lg:bottom-12">
            Fresh daily
          </div>
          <div className="relative animate-float overflow-hidden rounded-[8px] border-[8px] border-white bg-white shadow-glow sm:border-[10px]">
            <img
              src={imageCredits[0].src}
              alt="Jollof rice bowl with grilled chicken skewers"
              className="h-[24rem] w-full object-cover sm:h-[34rem] lg:h-[43rem]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

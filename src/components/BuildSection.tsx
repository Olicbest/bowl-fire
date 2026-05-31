"use client";

import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import { imageCredits, steps } from "./content";

export function BuildSection() {
  return (
    <section id="how" className="bg-clay px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="relative">
          <div className="absolute -right-3 -top-3 z-10 grid h-20 w-20 place-items-center rounded-full bg-ember text-white shadow-glow sm:-right-4 sm:-top-4 sm:h-24 sm:w-24">
            <Flame className="h-9 w-9 animate-flame fill-white sm:h-10 sm:w-10" />
          </div>
          <img
            src={imageCredits[3].src}
            alt="Cold zobo drink"
            className="h-[24rem] w-full rounded-[8px] object-cover shadow-2xl sm:h-[32rem]"
          />
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-palm sm:text-sm">Build your bowl</p>
          <h2 className="mt-3 font-display text-3xl font-black leading-tight text-coal sm:text-4xl lg:text-5xl lg:leading-none">
            A tight menu, many combinations.
          </h2>
          <div className="mt-8 space-y-4">
            {steps.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 rounded-[8px] border border-coal/10 bg-white p-4 sm:p-5"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-palm font-black text-white">{index + 1}</span>
                <p className="text-base font-bold leading-7 text-coal sm:text-lg">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

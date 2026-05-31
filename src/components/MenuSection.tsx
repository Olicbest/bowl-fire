"use client";

import { motion } from "framer-motion";
import { fadeUp, menu } from "./content";

export function MenuSection() {
  return (
    <section id="menu" className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-ember sm:text-sm">Signature menu</p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-black leading-tight text-coal sm:text-4xl lg:text-5xl lg:leading-none">
              Bowls that carry the smoke.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-coal/65 sm:text-base">
            Every bowl is designed to travel well: saucy, layered, and packed tight so it arrives looking like food you want to eat now.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {menu.map((item, index) => (
            <motion.article
              key={item.name}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="group overflow-hidden rounded-[8px] border border-coal/10 bg-clay"
            >
              <div className="relative h-60 overflow-hidden sm:h-72">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-ember shadow-lg">
                  {item.tag}
                </span>
              </div>
              <div className="p-5 sm:p-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                  <h3 className="font-display text-2xl font-black leading-8 text-coal sm:text-3xl">{item.name}</h3>
                  <span className="w-max rounded-full bg-coal px-3 py-2 text-sm font-black text-clay">{item.price}</span>
                </div>
                <p className="mt-4 leading-7 text-coal/68">{item.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

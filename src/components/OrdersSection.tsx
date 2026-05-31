"use client";

import { useMemo, useState } from "react";
import { Bike, Check, Clock3, MapPin, MessageCircle, Minus, Plus, ShoppingBag, Utensils } from "lucide-react";
import { bases, extras, proteins } from "./content";

const orderFeatures = [
  [ShoppingBag, "Daily bowls", "Single bowls packed hot for workdays and study sessions."],
  [Bike, "Rider ready", "Sealed sauces, firm bowls, and clear order labels."],
  [Utensils, "Party trays", "Bulk jollof, protein, plantain, and small chops add ons."],
] as const;

const orderDetails = [
  [Clock3, "Open Mon to Sat", "11:00 AM to 8:00 PM"],
  [MapPin, "Pickup base", "Lekki Phase 1, Lagos"],
  [Check, "Preorder cutoff", "Office trays before 10:30 AM"],
] as const;

export function OrdersSection() {
  const [base, setBase] = useState(bases[0]);
  const [protein, setProtein] = useState(proteins[0]);
  const [extra, setExtra] = useState(extras[0]);
  const [quantity, setQuantity] = useState(1);

  const total = useMemo(
    () => (base.price + protein.price + extra.price) * quantity,
    [base, protein, extra, quantity],
  );

  const orderText = encodeURIComponent(
    `Hi Bowl & Fire, I want ${quantity} bowl(s): ${base.name}, ${protein.name}, ${extra.name}. Estimated total NGN ${total.toLocaleString("en-NG")}.`,
  );

  return (
    <section id="orders" className="bg-coal px-4 py-16 text-clay sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.8fr]">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-ember sm:text-sm">Pickup, delivery, events</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-black leading-tight sm:text-4xl lg:text-5xl lg:leading-none">
            Built for lunch orders and weekend trays.
          </h2>
          <div className="mt-9 grid gap-4 sm:grid-cols-3">
            {orderFeatures.map(([Icon, title, text]) => (
              <div key={title} className="rounded-[8px] border border-clay/10 bg-white/5 p-5">
                <Icon className="h-6 w-6 text-ember" />
                <h3 className="mt-5 text-lg font-black sm:text-xl">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-clay/68">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[8px] bg-clay p-4 text-coal sm:p-6">
          <h3 className="font-display text-3xl font-black sm:text-4xl">Today&apos;s order board</h3>
          <div className="mt-6 space-y-4">
            {orderDetails.map(([Icon, title, text]) => (
              <div key={title} className="flex items-center gap-4 rounded-[8px] bg-white p-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-ember text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-black">{title}</p>
                  <p className="text-sm text-coal/62">{text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[8px] border border-coal/10 bg-white p-4">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-ember">Build an order</p>
            <div className="mt-4 grid gap-3">
              <label className="grid gap-2 text-sm font-bold">
                Base
                <select
                  value={base.name}
                  onChange={(event) => setBase(bases.find((item) => item.name === event.target.value) ?? bases[0])}
                  className="h-12 rounded-[8px] border border-coal/15 bg-clay px-3 font-bold outline-none focus:border-ember"
                >
                  {bases.map((item) => (
                    <option key={item.name} value={item.name}>
                      {item.name} for NGN {item.price.toLocaleString("en-NG")}
                    </option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-bold">
                Protein
                <select
                  value={protein.name}
                  onChange={(event) => setProtein(proteins.find((item) => item.name === event.target.value) ?? proteins[0])}
                  className="h-12 rounded-[8px] border border-coal/15 bg-clay px-3 font-bold outline-none focus:border-ember"
                >
                  {proteins.map((item) => (
                    <option key={item.name} value={item.name}>
                      {item.name} for NGN {item.price.toLocaleString("en-NG")}
                    </option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-bold">
                Extra
                <select
                  value={extra.name}
                  onChange={(event) => setExtra(extras.find((item) => item.name === event.target.value) ?? extras[0])}
                  className="h-12 rounded-[8px] border border-coal/15 bg-clay px-3 font-bold outline-none focus:border-ember"
                >
                  {extras.map((item) => (
                    <option key={item.name} value={item.name}>
                      {item.name} for NGN {item.price.toLocaleString("en-NG")}
                    </option>
                  ))}
                </select>
              </label>
              <div className="flex items-center justify-between gap-4 rounded-[8px] bg-clay p-3">
                <span className="text-sm font-black uppercase tracking-[0.16em] text-coal/55">Quantity</span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                    className="grid h-9 w-9 place-items-center rounded-full bg-white text-coal shadow-sm transition hover:text-ember"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-8 text-center text-lg font-black">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity((current) => Math.min(20, current + 1))}
                    className="grid h-9 w-9 place-items-center rounded-full bg-white text-coal shadow-sm transition hover:text-ember"
                    aria-label="Increase quantity"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-1 rounded-[8px] bg-coal px-4 py-3 text-clay sm:flex-row sm:items-center sm:justify-between">
              <span className="text-sm font-black uppercase tracking-[0.16em] text-clay/60">Estimated total</span>
              <span className="text-2xl font-black">NGN {total.toLocaleString("en-NG")}</span>
            </div>
          </div>

          <a
            href={`https://wa.me/2348000000000?text=${orderText}`}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ember px-6 py-4 font-black text-white transition hover:bg-pepper"
          >
            <MessageCircle className="h-5 w-5" />
            Message on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

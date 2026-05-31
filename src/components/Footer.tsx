import { Flame, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { TikTokLogo, WhatsAppLogo } from "./SocialIcons";

export function Footer() {
  return (
    <footer className="bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 border-b border-coal/10 pb-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div>
          <a href="#" className="flex items-center gap-3" aria-label="Bowl and Fire home">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-coal text-clay shadow-glow">
              <Flame className="h-5 w-5 fill-ember text-ember" />
            </span>
            <span className="font-display text-2xl font-bold text-coal">Bowl & Fire</span>
          </a>
          <p className="mt-5 max-w-sm text-sm leading-7 text-coal/68">
            Nigerian rice bowls, grilled proteins, plantain sides, and fresh drinks made for quick lunches, delivery, and weekend trays.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.18em] text-coal">Explore</h3>
          <div className="mt-5 grid gap-3 text-sm font-bold text-coal/68">
            <a href="#menu" className="transition hover:text-ember">
              Menu
            </a>
            <a href="#how" className="transition hover:text-ember">
              Build your bowl
            </a>
            <a href="#orders" className="transition hover:text-ember">
              Orders
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.18em] text-coal">Hours</h3>
          <div className="mt-5 grid gap-3 text-sm text-coal/68">
            <p>
              <span className="font-bold text-coal">Mon to Sat</span>
              <br />
              11:00 AM to 8:00 PM
            </p>
            <p>
              <span className="font-bold text-coal">Sunday</span>
              <br />
              Closed for prep
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.18em] text-coal">Contact</h3>
          <div className="mt-5 grid gap-3 text-sm text-coal/68">
            <a href="tel:+2348000000000" className="flex items-center gap-3 transition hover:text-ember">
              <Phone className="h-4 w-4 text-ember" />
              +234 800 000 0000
            </a>
            <a href="mailto:orders@bowlandfire.com" className="flex items-center gap-3 transition hover:text-ember">
              <Mail className="h-4 w-4 text-ember" />
              orders@bowlandfire.com
            </a>
            <p className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-ember" />
              Lekki Phase 1, Lagos
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-5 pt-6 text-sm text-coal/62 sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright 2026 Bowl & Fire. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/2348000000000"
            className="grid h-10 w-10 place-items-center rounded-full bg-[#25D366] text-white transition hover:scale-105"
            aria-label="Chat with Bowl and Fire on WhatsApp"
          >
            <WhatsAppLogo className="h-6 w-6" />
          </a>
          <a href="https://instagram.com" className="transition hover:text-ember" aria-label="Follow Bowl and Fire on Instagram">
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="https://www.tiktok.com"
            className="grid h-10 w-10 place-items-center rounded-full bg-coal text-white transition hover:scale-105"
            aria-label="Follow Bowl and Fire on TikTok"
          >
            <TikTokLogo className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

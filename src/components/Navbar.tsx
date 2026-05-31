import { Flame } from "lucide-react";
import { WhatsAppLogo } from "./SocialIcons";

export function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-coal/10 bg-clay/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" className="flex min-w-0 items-center gap-3" aria-label="Bowl and Fire home">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-coal text-clay shadow-glow sm:h-11 sm:w-11">
            <Flame className="h-5 w-5 fill-ember text-ember" />
          </span>
          <span className="truncate font-display text-xl font-bold sm:text-2xl">Bowl & Fire</span>
        </a>

        <div className="hidden items-center gap-7 text-sm font-semibold uppercase tracking-[0.16em] text-coal/70 md:flex">
          <a href="#menu" className="transition hover:text-ember">
            Menu
          </a>
          <a href="#how" className="transition hover:text-ember">
            Build
          </a>
          <a href="#orders" className="transition hover:text-ember">
            Orders
          </a>
        </div>

        <a
          href="https://wa.me/2348000000000?text=Hi%20Bowl%20%26%20Fire%2C%20I%20want%20to%20order%20a%20bowl"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-ember px-4 py-3 text-xs font-bold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-pepper sm:px-5 sm:text-sm"
        >
          <span className="grid h-5 w-5 place-items-center rounded-full bg-white text-[#25D366]">
            <WhatsAppLogo className="h-4 w-4" />
          </span>
          Order now
        </a>
      </div>
    </nav>
  );
}

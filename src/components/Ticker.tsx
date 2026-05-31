import { Flame } from "lucide-react";
import { ticker } from "./content";

export function Ticker() {
  return (
    <div className="relative flex overflow-hidden bg-coal py-4 text-clay">
      <div className="flex min-w-full animate-marquee gap-10 whitespace-nowrap text-xs font-black uppercase tracking-[0.18em] sm:text-sm sm:tracking-[0.22em]">
        {[...ticker, ...ticker, ...ticker, ...ticker].map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-10">
            {item}
            <Flame className="h-4 w-4 fill-ember text-ember" />
          </span>
        ))}
      </div>
    </div>
  );
}

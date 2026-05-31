import { BuildSection } from "@/components/BuildSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { MenuSection } from "@/components/MenuSection";
import { OrdersSection } from "@/components/OrdersSection";
import { Ticker } from "@/components/Ticker";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Ticker />
      <MenuSection />
      <BuildSection />
      <OrdersSection />
      <Footer />
    </main>
  );
}

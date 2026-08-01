import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemasComunes from "@/components/ProblemasComunes";
import Solucion from "@/components/Solucion";
import OfertaCerrada from "@/components/OfertaCerrada";
import PruebaSocial from "@/components/PruebaSocial";
import CTAFinal from "@/components/CTAFinal";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ProblemasComunes />
      <Solucion />
      <OfertaCerrada />
      <PruebaSocial />
      <CTAFinal />
    </main>
  );
}

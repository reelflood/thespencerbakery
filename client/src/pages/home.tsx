import { Navbar } from "@/components/ui/navbar";
import { Hero } from "@/components/ui/hero";
import { MenuSection } from "@/components/ui/menu-section";
import { AboutSection } from "@/components/ui/about-section";
import { InfoSection } from "@/components/ui/info-section";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <MenuSection />
        <InfoSection />
      </main>
      <Footer />
    </div>
  );
}

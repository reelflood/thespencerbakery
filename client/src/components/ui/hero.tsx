import { motion } from "framer-motion";
import heroImage from "@assets/generated_images/rustic_sourdough_bread_hero.png";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Fresh Sourdough Bread"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="block text-sm md:text-base font-medium tracking-[0.2em] uppercase mb-4 text-white/90">
            Est. 2002 • Stoke Newington
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-tight">
            Bringing Buns <br /> To The People
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            An N16 institution. Artisan sourdough, fresh pastries, and community spirit on Church Street.
          </p>
          <button 
            onClick={() => document.querySelector('#visit')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary text-white px-8 py-4 rounded-full font-medium text-sm tracking-widest uppercase hover:bg-primary/90 transition-all hover:scale-105"
          >
            Visit Us
          </button>
        </motion.div>
      </div>
    </section>
  );
}

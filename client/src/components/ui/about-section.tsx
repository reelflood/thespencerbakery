import { motion } from "framer-motion";
import interiorImage from "@assets/generated_images/cozy_bakery_interior.png";

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary/20 rounded-lg" />
              <img 
                src={interiorImage} 
                alt="Bakery Interior" 
                className="rounded-lg shadow-xl relative z-10 w-full"
              />
            </div>
          </motion.div>

          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-sm font-bold tracking-widest uppercase block mb-4">Since 2002</span>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6 leading-tight">
              More than just a bakery.
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                For over two decades, The Spence Bakery has been the heartbeat of Stoke Newington Church Street. 
                We believe in simple things done exceptionally well: flour, water, salt, and time.
              </p>
              <p>
                From the early morning queue for our weekend sourdough to the afternoon rush for coffee and 
                cake, we are proud to serve our N16 community. Whether you're grabbing a quick pastry 
                before a walk in Clissold Park or settling in by the window, you're always welcome here.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

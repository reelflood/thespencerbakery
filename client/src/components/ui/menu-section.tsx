import { motion } from "framer-motion";
import pastryImage from "@assets/generated_images/fresh_pastries_tray.png";
import savoryImage from "@assets/generated_images/savory_sausage_roll.png";

const items = [
  {
    category: "Bread",
    title: "Artisan Sourdough",
    description: "Our signature weekend sourdough, campagrain with seeds, and garlic thyme loaves.",
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&q=80&w=800", // Stock fallback or reuse generated
  },
  {
    category: "Pastries",
    title: "Morning Goods",
    description: "Flaky pain au chocolat, almond croissants, and our famous lemon polenta cake.",
    image: pastryImage,
  },
  {
    category: "Savory",
    title: "Lunch & Snacks",
    description: "Veggie sausage rolls with spinach & walnuts, romarino buns, and fresh pizzas.",
    image: savoryImage,
  },
];

export function MenuSection() {
  return (
    <section id="menu" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-bold tracking-widest uppercase block mb-2">Our Offerings</span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground">Fresh from the Oven</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-6 rounded-lg">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="text-center">
                <span className="text-primary text-xs font-bold tracking-widest uppercase mb-2 block">{item.category}</span>
                <h3 className="text-2xl font-serif mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed px-4">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { MapPin, Clock, Phone, Mail } from "lucide-react";

export function InfoSection() {
  return (
    <section id="visit" className="py-24 bg-secondary text-secondary-foreground relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-secondary-foreground/60 text-sm font-bold tracking-widest uppercase block mb-4">Visit Us</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-white">Stop by for a loaf.</h2>
            
            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <MapPin className="w-6 h-6 mt-1 opacity-80" />
                <div>
                  <h3 className="text-xl font-serif mb-2 text-white">Location</h3>
                  <p className="text-secondary-foreground/80 leading-relaxed">
                    161 Stoke Newington Church Street<br />
                    London N16 0UH<br />
                    United Kingdom
                  </p>
                  <a 
                    href="https://maps.app.goo.gl/ttNUbsWfUz7nuK697?g_st=awb" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-white border-b border-white/40 hover:border-white pb-0.5 transition-colors"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Clock className="w-6 h-6 mt-1 opacity-80" />
                <div>
                  <h3 className="text-xl font-serif mb-2 text-white">Hours</h3>
                  <p className="text-secondary-foreground/80 leading-relaxed">
                    Tuesday – Sunday<br />
                    8:00 AM – 5:00 PM<br />
                    <span className="opacity-60 text-sm">(Closed Mondays)</span>
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Phone className="w-6 h-6 mt-1 opacity-80" />
                <div>
                  <h3 className="text-xl font-serif mb-2 text-white">Contact</h3>
                  <p className="text-secondary-foreground/80">
                    +44 20 7249 4927<br />
                    spencebakery@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[500px] w-full bg-white/5 rounded-lg overflow-hidden relative">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.648356877028!2d-0.08264968422819854!3d51.55635037964311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761c6352992651%3A0x5f2d024f040fa183!2sThe%20Spence%20Bakery!5e0!3m2!1sen!2suk!4v1676991234567!5m2!1sen!2suk" 
               width="100%" 
               height="100%" 
               style={{ border: 0, filter: 'grayscale(100%) contrast(1.2) opacity(0.9)' }} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
             ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

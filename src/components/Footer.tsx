import { motion } from 'framer-motion';
import { Instagram, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="font-serif text-2xl md:text-3xl mb-6">
            Tecla Ris
          </h3>
          
          <p className="text-primary-foreground/70 mb-8 max-w-md mx-auto">
            Agricultural volunteer and sustainable farming enthusiast. Currently exploring organic vineyards and farms around the world.
          </p>

          <div className="flex items-center justify-center gap-6 mb-8">
            <a
              href="mailto:hello@teclaris.com"
              className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              <Mail size={18} />
              <span className="text-sm">Contact</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              <Instagram size={18} />
              <span className="text-sm">Instagram</span>
            </a>
            <div className="flex items-center gap-2 text-primary-foreground/70">
              <MapPin size={18} />
              <span className="text-sm">Currently: France</span>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8">
            <p className="text-sm text-primary-foreground/50">
              © {new Date().getFullYear()} Tecla Ris. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

import { motion } from 'framer-motion';
import heroImage from '@/assets/hero.jpg';

const Hero = () => {
  return (
    <section className="relative">
      <div className="flex flex-col lg:flex-row">
        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="lg:w-3/5 h-[50vh] lg:h-[70vh]"
        >
          <img
            src={heroImage}
            alt="Tecla Ris working in a vineyard, harvesting grapes with pink gloves"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Text Panel */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:w-2/5 bg-cream flex items-center justify-center p-8 lg:p-12"
        >
          <div className="text-center max-w-sm">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6 leading-tight">
              Hi, I'm Tecla Ris
            </h1>
            <p className="text-warm-gray text-base md:text-lg leading-relaxed">
              I love volunteering on vineyards and farms.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

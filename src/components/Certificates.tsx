import { motion } from 'framer-motion';
import { Award, Leaf, Wine, TreeDeciduous } from 'lucide-react';

const certificates = [
  {
    title: 'Organic Farming Certificate',
    organization: 'International Federation of Organic Agriculture',
    year: '2022',
    icon: Leaf,
  },
  {
    title: 'Vineyard Management',
    organization: 'Simonit & Sirch Vine Master Pruners',
    year: '2022',
    icon: Wine,
  },
  {
    title: 'Sustainable Agriculture',
    organization: 'WWOOF International',
    year: '2021',
    icon: TreeDeciduous,
  },
  {
    title: 'Natural Wine Production',
    organization: 'European Wine Academy',
    year: '2023',
    icon: Award,
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-16 md:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-4xl text-center mb-12 md:mb-16 text-foreground"
        >
          Certificates
        </motion.h2>

        <div className="space-y-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-6 p-6 bg-cream border border-border hover:border-tan transition-colors"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-secondary flex items-center justify-center rounded-full">
                <cert.icon size={24} className="text-earth" />
              </div>
              <div className="flex-grow">
                <h3 className="font-serif text-lg md:text-xl text-foreground mb-1">
                  {cert.title}
                </h3>
                <p className="text-muted-foreground text-sm">{cert.organization}</p>
              </div>
              <div className="text-warm-gray text-sm font-medium">
                {cert.year}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;

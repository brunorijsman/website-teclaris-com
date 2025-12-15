import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const pressItems = [
  {
    title: 'The Rise of Agricultural Volunteering',
    publication: 'The Guardian',
    date: 'March 2024',
    excerpt: 'Meet Tecla Ris, a dedicated volunteer who has spent years working on organic farms across four continents...',
    link: '#',
  },
  {
    title: 'Sustainable Wine Production',
    publication: 'Wine Spectator',
    date: 'November 2023',
    excerpt: 'Featured for her work with natural wine producers in France and Italy, promoting sustainable viticulture...',
    link: '#',
  },
  {
    title: 'WWOOF Volunteer of the Year',
    publication: 'WWOOF Magazine',
    date: 'December 2022',
    excerpt: 'Recognized for outstanding dedication to organic farming and cultural exchange through volunteering...',
    link: '#',
  },
];

const Press = () => {
  return (
    <section id="press" className="py-16 md:py-24 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-4xl text-center mb-12 md:mb-16 text-foreground"
        >
          Press
        </motion.h2>

        <div className="space-y-8">
          {pressItems.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <a href={item.link} className="block p-6 md:p-8 bg-background border border-border hover:border-tan transition-all">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-medium text-earth">{item.publication}</span>
                      <span className="text-warm-gray">•</span>
                      <span className="text-sm text-warm-gray">{item.date}</span>
                    </div>
                    <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3 group-hover:text-earth transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.excerpt}
                    </p>
                  </div>
                  <ExternalLink size={20} className="flex-shrink-0 text-warm-gray group-hover:text-earth transition-colors" />
                </div>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Press;

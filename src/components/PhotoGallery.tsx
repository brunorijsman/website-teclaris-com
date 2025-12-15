import { motion } from 'framer-motion';

// Import all images
import maraichage1 from '@/assets/maraichage-1.jpg';
import maraichage2 from '@/assets/maraichage-2.jpg';
import maraichage3 from '@/assets/maraichage-3.jpg';
import narbonne1 from '@/assets/narbonne-1.jpg';
import narbonne2 from '@/assets/narbonne-2.jpg';
import narbonne3 from '@/assets/narbonne-3.jpg';
import deffends1 from '@/assets/deffends-1.jpg';
import deffends2 from '@/assets/deffends-2.jpg';
import deffends3 from '@/assets/deffends-3.jpg';
import millets1 from '@/assets/millets-1.jpg';
import millets2 from '@/assets/millets-2.jpg';
import millets3 from '@/assets/millets-3.jpg';
import greenland1 from '@/assets/greenland-1.jpg';
import greenland2 from '@/assets/greenland-2.jpg';
import greenland3 from '@/assets/greenland-3.jpg';
import georgia1 from '@/assets/georgia-1.jpg';
import georgia2 from '@/assets/georgia-2.jpg';
import georgia3 from '@/assets/georgia-3.jpg';

interface GallerySection {
  title: string;
  images: { src: string; alt: string }[];
}

const gallerySections: GallerySection[] = [
  {
    title: 'Organic Vineyard and Natural Wine, Maraichage, France, December 2025',
    images: [
      { src: maraichage1, alt: 'Working in the vineyard in winter' },
      { src: maraichage2, alt: 'French countryside vineyard landscape' },
      { src: maraichage3, alt: 'Volunteer working among grapevines' },
    ],
  },
  {
    title: 'Olivette et Jardin de Langel, Narbonne, France, November 2025',
    images: [
      { src: narbonne1, alt: 'Olive garden in Narbonne' },
      { src: narbonne2, alt: 'French Mediterranean landscape' },
      { src: narbonne3, alt: 'Working in the olive grove' },
    ],
  },
  {
    title: 'Winery Domaine du Deffends, Saint-Maximin-La-Baume, France, November 2025',
    images: [
      { src: deffends1, alt: 'Domaine du Deffends winery' },
      { src: deffends2, alt: 'Vineyard in Provence' },
      { src: deffends3, alt: 'Wine production at the domaine' },
    ],
  },
  {
    title: 'Sheep Farm les Millets, Rosans, France, November 2025',
    images: [
      { src: millets1, alt: 'Sheep farm in the French Alps' },
      { src: millets2, alt: 'Shepherding at Les Millets' },
      { src: millets3, alt: 'Mountain pastures with sheep' },
    ],
  },
  {
    title: 'Sillisit Sheep Farm, Greenland, June 2025',
    images: [
      { src: greenland1, alt: 'Holding lamb in Greenland' },
      { src: greenland2, alt: 'Greenlandic sheep farm landscape' },
      { src: greenland3, alt: 'With host at Sillisit farm' },
    ],
  },
  {
    title: 'Lagodekhi Grape Harvest, Georgia, October 2024',
    images: [
      { src: georgia1, alt: 'In Georgian vineyard' },
      { src: georgia2, alt: 'Georgian wine country sunset' },
      { src: georgia3, alt: 'Grape harvest in Georgia' },
    ],
  },
];

const PhotoGallery = () => {
  return (
    <section id="photos" className="py-8 md:py-12">
      {gallerySections.map((section, sectionIndex) => (
        <motion.div
          key={section.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
          className="mb-8 md:mb-12"
        >
          {/* Section Title */}
          <h2 className="text-center text-sm md:text-base text-warm-gray font-medium tracking-wide px-4 py-4 md:py-6">
            {section.title}
          </h2>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {section.images.map((image, imageIndex) => (
              <motion.div
                key={imageIndex}
                className="overflow-hidden aspect-[2.3/1]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover gallery-image"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default PhotoGallery;

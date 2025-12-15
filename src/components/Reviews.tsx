import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Jean-Pierre',
    location: 'Château Cohola, France',
    text: 'Tecla was an exceptional volunteer. Her dedication to learning about organic wine production and her enthusiasm made her invaluable during harvest season.',
    rating: 5,
  },
  {
    name: 'Maria & Giorgio',
    location: 'Terramante, Italy',
    text: 'We had the pleasure of hosting Tecla twice. She is hardworking, curious, and brings wonderful energy to the vineyard. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Ole Hansen',
    location: 'Lille Langøya, Norway',
    text: 'Tecla adapted quickly to life on our sheep farm. She was gentle with the animals and always eager to help with any task.',
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-4xl text-center mb-12 md:mb-16 text-foreground"
        >
          Reviews
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-background p-6 md:p-8 border border-border"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-earth text-earth" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{review.text}"
              </p>
              <div>
                <p className="font-medium text-foreground">{review.name}</p>
                <p className="text-sm text-warm-gray">{review.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PhotoGallery from '@/components/PhotoGallery';
import Reviews from '@/components/Reviews';
import Certificates from '@/components/Certificates';
import Press from '@/components/Press';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <PhotoGallery />
        <Reviews />
        <Certificates />
        <Press />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

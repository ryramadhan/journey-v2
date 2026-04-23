import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Chapter from './components/sections/Chapter';
import Timeline from './components/sections/Timeline';
import Gallery from './components/sections/Gallery';
import Vision from './components/sections/Vision';
import Footer from './components/sections/Footer';
import { content } from './data/content';

const sectionFade = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] },
};

export default function App() {
  useEffect(() => {
    document.title = content.meta.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) {
      desc.setAttribute('content', content.meta.description);
    }
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main id="main-content">
        <Hero data={content.hero} />
        {content.chapters.map((chapter, index) => (
          <Chapter
            key={chapter.number}
            id={`chapter-${index + 1}`}
            number={chapter.number}
            title={chapter.title}
            description={chapter.description}
            image={chapter.image}
            imageAlt={chapter.imageAlt}
            imagePosition={chapter.imagePosition}
            index={index}
          />
        ))}
        <motion.div {...sectionFade}>
          <Timeline data={content.timeline} />
        </motion.div>
        <motion.div {...sectionFade}>
          <Gallery data={content.gallery} />
        </motion.div>
        <motion.div {...sectionFade}>
          <Vision data={content.vision} />
        </motion.div>
        <motion.div {...sectionFade}>
          <Footer data={content.footer} />
        </motion.div>
      </main>
    </div>
  );
}

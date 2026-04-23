import PropTypes from 'prop-types';
import { motion, useReducedMotion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { useScrollY } from '../../hooks/useScrollY';
import Button from '../shared/Button';
import Container from '../shared/Container';
import { MEMOIR_IMAGE_CLASS } from '../../utils/memoirVisual';

const ease = [0.25, 0.46, 0.45, 0.94];

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease,
      delay: 0.06 * i,
    },
  }),
};

export default function Hero({ data }) {
  const { ref, inView } = useInView({ rootMargin: '-20% 0px' });
  const scrollY = useScrollY();
  const reduceMotion = useReducedMotion();
  const parallax = reduceMotion ? 0 : scrollY * 0.22;

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden bg-black text-white pb-section pt-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute inset-0 scale-110"
          style={{ y: parallax }}
        >
          <img
            src={data.image}
            alt={data.imageAlt}
            className={MEMOIR_IMAGE_CLASS}
            style={{ objectPosition: data.imagePosition ?? '50% 45%' }}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/60 to-black" />
      </div>

      <Container className="relative z-10 pb-16 md:pb-24">
        <motion.p
          className="mb-4 max-w-xl text-sm font-semibold uppercase tracking-[0.25em] text-off-white/90"
          custom={0}
          variants={textVariants}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          {data.subtitle}
        </motion.p>
        <motion.h1
          className="max-w-4xl text-[clamp(2.75rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight"
          custom={1}
          variants={textVariants}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          {data.title}
        </motion.h1>
        <motion.p
          className="mt-8 max-w-2xl text-[17px] leading-relaxed text-off-white md:text-lg"
          custom={2}
          variants={textVariants}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          {data.description}
        </motion.p>
        <motion.div
          className="mt-10"
          custom={3}
          variants={textVariants}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          <Button onClick={() => document.getElementById('chapter-1')?.scrollIntoView({ behavior: 'smooth' })}>
            {data.ctaText}
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}

Hero.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    ctaText: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    imagePosition: PropTypes.string,
  }).isRequired,
};

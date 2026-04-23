import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import Container from '../shared/Container';
import { CHAPTER_FRAME_CLASS, MEMOIR_IMAGE_CLASS } from '../../utils/memoirVisual';

export default function Chapter({
  id,
  number,
  title,
  description,
  image,
  imageAlt,
  imagePosition,
  index,
}) {
  const { ref, inView } = useInView();
  const reverse = index % 2 === 1;

  return (
    <section
      id={id}
      ref={ref}
      className="scroll-mt-24 py-section bg-black text-white border-t border-white/10"
    >
      <Container>
        <div
          className={`flex flex-col gap-12 lg:gap-20 lg:items-center ${
            reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
          }`}
        >
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 24 }}
            animate={
              inView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 24 }
            }
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <span className="text-sm font-bold text-gray-light tracking-[0.3em]">
              {number}
            </span>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-bold leading-tight">
              {title}
            </h2>
            <p className="mt-6 max-w-xl text-off-white leading-relaxed">
              {description}
            </p>
          </motion.div>

          <motion.div
            className={`flex-1 w-full ${CHAPTER_FRAME_CLASS}`}
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={
              inView
                ? { opacity: 1, filter: 'blur(0px)' }
                : { opacity: 0, filter: 'blur(10px)' }
            }
            transition={{
              duration: 1,
              delay: 0.08,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <img
              src={image}
              alt={imageAlt}
              className={MEMOIR_IMAGE_CLASS}
              style={{ objectPosition: imagePosition ?? '50% 50%' }}
              loading="lazy"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

Chapter.propTypes = {
  id: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  imagePosition: PropTypes.string,
  index: PropTypes.number.isRequired,
};

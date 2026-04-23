import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Container from '../shared/Container';
import SectionTitle from '../shared/SectionTitle';
import { CHAPTER_FRAME_CLASS, MEMOIR_IMAGE_CLASS } from '../../utils/memoirVisual';

const rowVariants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Gallery({ data }) {
  return (
    <section
      id="gallery"
      className="scroll-mt-24 py-section bg-black text-white border-t border-white/10"
    >
      <Container>
        <SectionTitle eyebrow={data.eyebrow} title={data.title} />
        <p className="-mt-6 mb-14 max-w-3xl text-lg text-off-white leading-relaxed">
          {data.intro}
        </p>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {data.items.map((item, index) => {
            const reverse = index % 2 === 1;

            return (
              <motion.article
                key={item.title}
                variants={rowVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-80px' }}
                className="py-10 md:py-12"
              >
                <div
                  className={`flex flex-col gap-8 lg:gap-12 lg:items-center ${
                    reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
                  }`}
                >
                  <div className="flex-1">
                    <span className="text-xs font-bold uppercase tracking-[0.28em] text-gray-light">
                      Track {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-3 text-[clamp(1.7rem,3vw,2.35rem)] font-bold leading-tight">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-gray-light">
                      {item.era}
                    </p>
                    <p className="mt-5 max-w-xl text-off-white leading-relaxed">
                      "{item.note}"
                    </p>
                  </div>

                  <div className={`flex-1 w-full ${CHAPTER_FRAME_CLASS}`}>
                    <img
                      src={item.image}
                      alt={`Foto resmi Daniel Caesar untuk ${item.title}`}
                      className={`${MEMOIR_IMAGE_CLASS} w-full h-full object-contain`}
                      style={{
                        objectPosition: item.imagePosition ?? '50% 50%',
                      }}
                      loading="lazy"
                    />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

Gallery.propTypes = {
  data: PropTypes.shape({
    eyebrow: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    intro: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        era: PropTypes.string.isRequired,
        note: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        imagePosition: PropTypes.string,
      }),
    ).isRequired,
  }).isRequired,
};

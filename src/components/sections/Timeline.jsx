import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Container from '../shared/Container';
import SectionTitle from '../shared/SectionTitle';

const listVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Timeline({ data }) {
  return (
    <section
      id="timeline"
      className="scroll-mt-24 py-section bg-black text-white border-t border-white/10"
    >
      <Container>
        <SectionTitle eyebrow={data.eyebrow} title={data.title} />

        <div className="relative max-w-3xl">
          <div
            className="pointer-events-none absolute left-[5px] top-3 bottom-3 w-px bg-gradient-to-b from-white/45 via-white/20 to-transparent md:left-[7px]"
            aria-hidden
          />

          <motion.ol
            className="relative space-y-12 md:space-y-14 pl-10 md:pl-14"
            variants={listVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-90px' }}
          >
            {data.items.map((item) => (
              <motion.li
                key={`${item.year}-${item.title}`}
                className="relative"
                variants={itemVariants}
              >
                <span className="absolute -left-[26px] top-2 flex h-3 w-3 items-center justify-center rounded-full bg-white md:-left-[30px] md:h-3.5 md:w-3.5 ring-4 ring-black" />
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-light">
                  {item.year}
                </p>
                <h3 className="mt-2 text-xl font-bold md:text-2xl">{item.title}</h3>
                <p className="mt-3 max-w-2xl text-off-white leading-relaxed">
                  {item.desc}
                </p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </Container>
    </section>
  );
}

Timeline.propTypes = {
  data: PropTypes.shape({
    eyebrow: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        year: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

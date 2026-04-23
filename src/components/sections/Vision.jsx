import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Container from '../shared/Container';
import SectionTitle from '../shared/SectionTitle';

const cardParent = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

const cardChild = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Vision({ data }) {
  return (
    <section
      id="vision"
      className="scroll-mt-24 py-section bg-black text-white border-t border-white/10"
    >
      <Container>
        <SectionTitle eyebrow={data.eyebrow} title={data.title} />

        <motion.p
          className="-mt-6 mb-14 max-w-3xl text-lg text-off-white leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
        >
          {data.intro}
        </motion.p>

        <motion.div
          className="grid gap-6 sm:grid-cols-2"
          variants={cardParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {data.goals.map((goal) => (
            <motion.article
              key={goal.title}
              variants={cardChild}
              className="rounded-sm border border-white/10 bg-gray-dark/35 p-8 backdrop-blur-sm"
            >
              <h3 className="text-lg font-bold">{goal.title}</h3>
              <p className="mt-3 text-off-white leading-relaxed">{goal.text}</p>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

Vision.propTypes = {
  data: PropTypes.shape({
    eyebrow: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    intro: PropTypes.string.isRequired,
    goals: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

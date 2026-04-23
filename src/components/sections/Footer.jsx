import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Container from '../shared/Container';
import Button from '../shared/Button';

export default function Footer({ data }) {
  return (
    <footer
      id="footer"
      className="scroll-mt-24 border-t border-white/10 bg-black py-section text-white"
    >
      <Container>
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-light">
            {data.eyebrow}
          </p>
          <h2 className="mt-5 text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-tight">
            {data.message}
          </h2>
          <div className="mt-10">
            <Button href={data.ctaHref}>{data.ctaText}</Button>
          </div>
          {data.photoCredit ? (
            <p className="mt-10 max-w-2xl text-xs leading-relaxed text-gray-light">
              {data.photoCredit}
            </p>
          ) : null}
          <p className="mt-8 text-sm text-gray-light">
            © {new Date().getFullYear()} {data.credit}
          </p>
        </motion.div>
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  data: PropTypes.shape({
    eyebrow: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    ctaText: PropTypes.string.isRequired,
    ctaHref: PropTypes.string.isRequired,
    credit: PropTypes.string.isRequired,
    photoCredit: PropTypes.string,
  }).isRequired,
};

import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { classNames } from '../../utils/classNames';

export default function SectionTitle({
  eyebrow,
  title,
  align = 'left',
  className = '',
}) {
  const alignCls =
    align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <motion.div
      className={classNames('max-w-3xl mb-12 md:mb-16', alignCls, className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-light mb-4">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-hero font-bold text-white">{title}</h2>
    </motion.div>
  );
}

SectionTitle.propTypes = {
  eyebrow: PropTypes.string,
  title: PropTypes.string.isRequired,
  align: PropTypes.oneOf(['left', 'center']),
  className: PropTypes.string,
};

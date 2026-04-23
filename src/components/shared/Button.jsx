import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { classNames } from '../../utils/classNames';

export default function Button({
  children,
  onClick,
  href,
  className = '',
  type = 'button',
}) {
  const base =
    'inline-flex items-center justify-center px-8 py-4 bg-cream text-black font-bold rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white';

  if (href) {
    return (
      <motion.a
        href={href}
        className={classNames(base, className)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.99 }}
        transition={{ type: 'spring', stiffness: 400, damping: 28 }}
        style={{
          boxShadow: '0 0 0 1px rgba(0,0,0,0.06), 0 14px 40px rgba(0,0,0,0.18)',
        }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classNames(base, className)}
      whileHover={{
        scale: 1.02,
        boxShadow:
          '0 0 0 1px rgba(0,0,0,0.08), 0 22px 55px rgba(0,0,0,0.22)',
      }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: 'spring', stiffness: 400, damping: 28 }}
      style={{
        boxShadow: '0 0 0 1px rgba(0,0,0,0.06), 0 14px 40px rgba(0,0,0,0.18)',
      }}
    >
      {children}
    </motion.button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  href: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

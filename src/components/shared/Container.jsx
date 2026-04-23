import PropTypes from 'prop-types';
import { classNames } from '../../utils/classNames';

export default function Container({ as: Component = 'div', className, children }) {
  return (
    <Component
      className={classNames(
        'mx-auto w-full max-w-6xl px-container',
        className,
      )}
    >
      {children}
    </Component>
  );
}

Container.propTypes = {
  as: PropTypes.elementType,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

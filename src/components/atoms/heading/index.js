import PropTypes from 'prop-types';
import classNames from 'classnames';

const getHeadingElement = ({ level, children = '', ...props }) => {
  switch (level) {
    case LEVELS[1]:
      return () => <h1 children={children} {...props} />;
    case LEVELS[2]:
      return () => <h2 children={children} {...props} />;
    case LEVELS[3]:
      return () => <h3 children={children} {...props} />;
    case LEVELS[4]:
      return () => <h4 children={children} {...props} />;
    case LEVELS[5]:
      return () => <h5 children={children} {...props} />;
    default:
      return () => <h4 children={children} {...props} />;
  }
};

export const LEVELS = { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 };

const DEFAULT_CLASSES = 'leading-0';

export const LEVEL_CLASSES = {
  [LEVELS[1]]: 'text-h1 font-black',
  [LEVELS[2]]: 'text-h2 font-black',
  [LEVELS[3]]: 'text-h3/h4 font-bold',
  [LEVELS[4]]: 'text-h3/h4 font-medium',
  [LEVELS[5]]: 'text-h5 font-regular',
};

const Heading = (props) => {
  const { className, level, ...headingProps } = props;
  const levelClasses = LEVEL_CLASSES?.[level] || '';
  const elementClassNames = classNames(DEFAULT_CLASSES, levelClasses, className);
  const HeadingElement = getHeadingElement({ level, className: elementClassNames, ...headingProps });

  return <HeadingElement />;
};

Heading.propTypes = { level: PropTypes.oneOf(Object.values(LEVELS)) };

Heading.defaultProps = { level: LEVELS[4], children: '' };

export default Heading;

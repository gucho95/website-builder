import PropTypes from 'prop-types';
import classNames from 'classnames';

export const TYPES = { CUSTOM: 'custom', BOLD: 'bold', ITALIC: 'italic', UNDERLINE: 'underline' };
const DEFAULT_CLASSES = 'text-sm';

const TYPE_CLASSES = {
  [TYPES.BOLD]: 'font-bold',
  [TYPES.UNDERLINE]: 'underline',
  [TYPES.ITALIC]: 'italic',
  [TYPES.CUSTOM]: '',
};

const Text = (props) => {
  const { className, type, ...textProps } = props;
  const typeClasses = TYPE_CLASSES?.[type] || '';
  return <span className={classNames(DEFAULT_CLASSES, typeClasses, className)} {...textProps} />;
};

Text.propTypes = { type: PropTypes.oneOf(Object.values(TYPES)) };
Text.defaultProps = { type: TYPES.CUSTOM };
export default Text;

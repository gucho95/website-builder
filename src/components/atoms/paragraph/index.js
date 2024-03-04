import PropTypes from 'prop-types';
import classNames from 'classnames';

export const OPTIONS = {'1':'1', '2': '2', '2-1': "2-1", 3:'3','3-1':'3-1','4':'4','4-1':'4-1','5':'5'};

const DEFAULT_CLASSES ='';

export const OPTION_CLASSES = {
  [OPTIONS[1]]: 'text-p1',
  [OPTIONS[2]]: 'text-p2-30',
  [OPTIONS['2-1']]: 'text-p2-32',
  [OPTIONS[3]]: 'text-p3-25',
  [OPTIONS['3-1']]: 'text-p3-28',
  [OPTIONS[4]]: 'text-p4-21',
  [OPTIONS['4-1']]: 'text-p4-24',
  [OPTIONS[5]]: 'text-p5',
};


const Paragraph = (props)=>{
  const { className, option, ...paragraphProps } = props;
  const optionClasses = OPTION_CLASSES?.[option] || '';

  return (
    <p
      className={classNames(DEFAULT_CLASSES, optionClasses, className)}
          {...paragraphProps}
    />
  )}

Paragraph.propTypes = { option: PropTypes.oneOf(Object.values(OPTIONS))};

Paragraph.defaultProps = { option: OPTIONS[1]};

export default Paragraph;


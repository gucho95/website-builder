import { forwardRef } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const DEFAULT_CLASSES =
  'border-1px  py-3 px-4 disabled:border-grey-dark disabled:bg-transparent disabled:opacity-30 pr-8';

const Select = forwardRef((props, ref) => {
  const { className, placeholder, options = [], defaultValue = '0', ...selectProps } = props;

  return (
    <div className='flex flex-col'>
      <select defaultValue={defaultValue} className={classNames(DEFAULT_CLASSES, className)} ref={ref} {...selectProps}>
        <option disabled={true} value={'0'} children={placeholder} hidden />
        {options.map(({ value, label }) => (
          <option value={value} label={label} key={value} />
        ))}
      </select>
    </div>
  );
});

Select.propTypes = { options: PropTypes.array };
export default Select;

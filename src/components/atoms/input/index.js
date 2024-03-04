import { forwardRef } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Text from '../text';

const STATES = { ERROR: 'error', BASE: 'base' };

const DEFAULT_CLASSES =
  'border-1px py-3 px-5 outline-none placeholder-grey-dark text-p5 text-blue-dark disabled:border-grey-dark disabled:bg-transparent disabled:opacity-30';

const STATE_CLASSES = {
  [STATES.ERROR]: 'border-danger',
  [STATES.BASE]: 'border-grey-dark focus:border-blue-light',
};

const Input = forwardRef((props, ref) => {
  const { error, className, showError = true, labelText, ...inputProps } = props;
  const stateClasses = error ? STATE_CLASSES[STATES.ERROR] : STATE_CLASSES[STATES.BASE];
  const inputId = `${inputProps?.name}-field`;

  return (
    <div className='flex flex-col'>
      {labelText ? <label htmlFor={inputId} children={labelText} /> : null}
      <input id={inputId} className={classNames(DEFAULT_CLASSES, stateClasses, className)} {...inputProps} ref={ref} />
      {error && showError ? <Text children={error?.message} className='text-danger text-9px px-5' /> : null}
    </div>
  );
});

Input.propTypes = { error: PropTypes.any, showError: PropTypes.bool };
export default Input;

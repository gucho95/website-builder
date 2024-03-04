import { useController, useFormContext } from 'react-hook-form';
import classNames from 'classnames';
import CheckIcon from '../icons/Check.svg';
import Image from '../image';
import Spacing from '../spacing';

const classes = {
  base: 'w-5 h-5 border-1px p-1 perfect-center select-none transition-all',
  checked: 'border-blue-light',
  unChecked: 'border-grey-dark',
};

const CheckboxLabel = ({ checked }) => (
  <div className={classNames(classes.base, checked ? classes.checked : classes.unChecked)}>
    {checked ? <Image src={CheckIcon} /> : null}
  </div>
);

const Checkbox = ({ name, defaultValue = false, before, after }) => {
  const { control } = useFormContext();
  const { field } = useController({ control, name, defaultValue });
  const checked = field.value;
  const onChange = (e) => field.onChange(e.target.checked);
  const id = `checkbox-${name}`;

  return (
    <label htmlFor={id} className='flex items-center'>
      {before ? (
        <div className={classNames('flex flex-1', checked ? 'text-blue-light' : '')}>
          {before}
          <Spacing className='pr-1' />
        </div>
      ) : null}
      <CheckboxLabel checked={checked} />

      {after ? (
        <div className={classNames('flex flex-1', checked ? 'text-blue-light' : '')}>
          <Spacing className='pl-1' />
          {after}
        </div>
      ) : null}
      <input type='checkbox' id={id} checked={checked} onChange={onChange} className='hidden' />
    </label>
  );
};

export default Checkbox;

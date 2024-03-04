import { BUTTON_TYPES, Input, Spacing } from '@atoms';
import { useDispatch } from 'react-redux';
import Button from '../button';
import uiActions from '@actions/ui';
import { FILE_MANAGER } from '@constants/modals';
import { useController, useFormContext } from 'react-hook-form';
import { forwardRef } from 'react';

const MediaField = forwardRef(({ name, ...rest }, ref) => {
  const { control } = useFormContext();
  const { field } = useController({ control, name });
  const dispatch = useDispatch();
  const openModal = (payload) =>
    dispatch(
      uiActions.openModal({
        type: FILE_MANAGER,
        data: { onSelect: (path) => field.onChange(path) },
      })
    );

  return (
    <div className='py-1 flex'>
      <div className='flex-1 flex w-ull  items-center'>
        <div className='w-full flex-1'>
          <Input {...field} {...rest} onKeyDown={(e) => e.preventDefault()} ref={ref} />
        </div>
      </div>
      <Spacing className='pl-1' />
      <Button type={BUTTON_TYPES.SECONDARY} children='Select media' onClick={openModal} />
    </div>
  );
});

export default MediaField;

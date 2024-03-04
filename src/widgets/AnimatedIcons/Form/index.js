import { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { TYPES } from '../types';
import { TYPE_FIELDS } from './optionFields';
import { Select, Spacing } from '@atoms';
import { useMount } from '@hooks';
import { generateForm } from 'utils/form';

const AnimatedIconForm = ({ isUpdateMode }) => {
  const { register, watch, control, setValue, formState } = useFormContext();
  const { errors } = formState;
  const activeOption = watch('option');
  const fields = useMemo(() => (activeOption ? TYPE_FIELDS[activeOption] : null), [activeOption]);
  const Fields = generateForm({ fields, register, errors, control });

  // SET DEFAULT OPTION VALUE FOR COMPONENT WHEN CREATE MODE
  useMount(() => !isUpdateMode && setValue('option', TYPES[0].value.toString()));
  return (
    <div>
      <div className='w-6/12'>
        <Select options={TYPES} placeholder='Select text option' {...register('option')} />
      </div>
      <Spacing className='pt-4' />
      <div className='grid gap-y-2' children={Fields} />
    </div>
  );
};

export default AnimatedIconForm;

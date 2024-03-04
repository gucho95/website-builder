import { useMemo, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { TYPES } from '../types';
import { TYPE_FIELDS } from './optionFields';
import { Select, Spacing } from '@atoms';
import { Tabs } from '@molecules';
import { useMount } from '@hooks';

const generateTabData = (data, register, errors, control) => {
  return data?.map((i, parentKey) => ({
    body: (
      <div className='grid gap-y-2'>
        {i.map(({ component: Component, name, rules, ...rest }) => {
          const fieldName = `items.${parentKey}.${name}`;
          const error = errors?.items?.[parentKey]?.[name];
          const fieldProps = name ? register(fieldName, { ...rules }) : rules;

          return <Component key={name} error={error} control={control} {...fieldProps} {...rest} />;
        })}
      </div>
    ),
  }));
};

const AnimatedCardForm = ({ isUpdateMode }) => {
  const [activeKey, setActiveKey] = useState(0);
  const { register, watch, control, setValue, formState, setFocus } = useFormContext();
  const { errors } = formState;
  const activeOption = watch('option');
  const optionFields = useMemo(() => (activeOption ? TYPE_FIELDS[activeOption] : null), [activeOption]);
  const tabData = useMemo(
    () => activeOption && generateTabData(optionFields, register, errors, control),
    [activeOption, optionFields, formState]
  );

  //FIND TAB WITH ERROR AND FOCUS ON ERRRO FIELD
  useEffect(() => {
    const hasError = formState.errors?.items;
    if (!formState.submitCount || !hasError) {
      return;
    }

    const firstErrorTabKey = Object.keys(formState.errors?.items || {})[0];
    const firstErrorFields = formState.errors?.items[firstErrorTabKey];
    const firstErrorFieldName = Object.keys(firstErrorFields || {})[0];

    setActiveKey(firstErrorTabKey);
    setTimeout(() => setFocus(`items.${firstErrorTabKey}.${firstErrorFieldName}`), 0);
  }, [formState.submitCount]);

  // SET DEFAULT OPTION VALUE FOR COMPONENT ON CREATE MODE
  useMount(() => !isUpdateMode && setValue('option', TYPES[0].value.toString()));

  // RESET TAB KEY ON ACTIVE OPTION CHANGE
  useEffect(() => {
    setActiveKey(0);
  }, [activeOption]);

  return (
    <div>
      <div className='w-6/12'>
        <Select options={TYPES} placeholder='Select text option' {...register('option')} />
      </div>
      <Spacing className='pt-7' />

      <Tabs
        titlePrefix='Item'
        key={activeOption}
        activeKey={activeKey.toString()}
        setActiveKey={setActiveKey}
        data={tabData}
      />
    </div>
  );
};

export default AnimatedCardForm;

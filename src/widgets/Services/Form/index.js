import { useMemo, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { TYPES } from '../types';
import { TYPE_FIELDS } from './optionFields';
import { Select, Spacing } from '@atoms';
import { Tabs } from '@molecules';
import { useMount } from '@hooks';

const TabFields = ({ isActiveSlide, item, parentKey, errors, register, control }) => (
  <div className={isActiveSlide ? 'grid gap-y-2' : 'hidden'}>
    {item?.map(({ component: Component, name, rules, ...rest }) => {
      const fieldName = `items.${parentKey}.${name}`;
      const error = errors?.items?.[parentKey]?.[name];
      const fieldProps = name ? register(fieldName, { ...rules }) : rules;
      return <Component key={fieldName} error={error} control={control} {...fieldProps} {...rest} />;
    })}
  </div>
);

const Fields = ({ fields, activeKey, errors, control, register }) => {
  return fields?.map((item, parentKey) => {
    const isActiveSlide = parentKey.toString() === activeKey?.toString();

    return (
      <TabFields
        errors={errors}
        register={register}
        control={control}
        key={parentKey}
        parentKey={parentKey}
        item={item}
        isActiveSlide={isActiveSlide}
      />
    );
  });
};

const ServicesForm = ({ isUpdateMode }) => {
  const [activeKey, setActiveKey] = useState('0');
  const { register, watch, control, setValue, formState, setFocus } = useFormContext();
  const { errors, submitCount } = formState;
  const activeOption = watch('option');
  const fields = useMemo(() => (activeOption ? TYPE_FIELDS[activeOption] : null), [activeOption]);

  // SET DEFAULT OPTION VALUE FOR COMPONENT WHEN CREATE MODE
  useMount(() => !isUpdateMode && setValue('option', TYPES[0].value.toString()));

  // RESET TAB ACTIVEKEY ON ACTIVE OPTION CHANGE
  useEffect(() => {
    setActiveKey(0);
  }, [activeOption]);

  //FIND TAB WITH ERROR AND FOCUS ON ERRRO FIELD
  useEffect(() => {
    const hasError = formState.errors?.items;

    if (!submitCount || !hasError) {
      return;
    }

    const firstErrorTabKey = Object.keys(formState.errors?.items)[0];
    const firstErrorFieldKey = Object.keys(formState.errors?.items?.[firstErrorTabKey])?.[0];

    const errorFieldName = `items.${firstErrorTabKey}.${firstErrorFieldKey}`;
    setActiveKey(firstErrorTabKey);
    setTimeout(() => setFocus(errorFieldName), 0);
  }, [submitCount]);

  return (
    <div>
      <div className='w-6/12'>
        <Select options={TYPES} placeholder='Select text option' {...register('option')} />
      </div>
      <Spacing className='pt-7' />
      <Tabs
        key={activeOption}
        titlePrefix='Row'
        data={fields}
        activeKey={activeKey?.toString()}
        setActiveKey={setActiveKey}
      />
      <Fields activeKey={activeKey} fields={fields} register={register} control={control} errors={errors} />
    </div>
  );
};

export default ServicesForm;

import React from 'react';
import { useController, useFormContext } from 'react-hook-form';
import Select from 'react-select/creatable';
import Control from './Control';
import SelectContainer from './SelectContainer';

const components = {
  SelectContainer,
  Control,
};

const customStyles = {};

const CreatableSelect = (props) => {
  const { name, rules, defaultValue } = props;
  const { control } = useFormContext();
  const { field, fieldState } = useController({ name, control, rules, defaultValue });

  return <Select isMulti isClearable components={components} styles={customStyles} {...field} />;
};

export default CreatableSelect;

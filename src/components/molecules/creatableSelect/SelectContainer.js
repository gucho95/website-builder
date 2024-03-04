import React from 'react';
import { components } from 'react-select';

const SelectContainer = ({ children, ...props }) => {
  return <components.SelectContainer {...props}>{children}</components.SelectContainer>;
};

export default SelectContainer;

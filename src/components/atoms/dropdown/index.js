import React from 'react';
import RcDropdown from 'rc-dropdown';
import 'rc-dropdown/assets/index.css';
import './index.scss';

const Dropdown = ({ children, menu: Menu, visible, setVisible, keepVisibleIds = [], ...props }) => {
  const onVisibleChange = (visible) => setVisible(visible);
  const onOverlayClick = (item) => !keepVisibleIds.includes(item.key) && onVisibleChange(false);

  return (
    <RcDropdown
      overlay={Menu}
      trigger={['click']}
      children={children}
      visible={visible}
      onOverlayClick={onOverlayClick}
      onVisibleChange={onVisibleChange}
      {...props}
    />
  );
};

export default Dropdown;

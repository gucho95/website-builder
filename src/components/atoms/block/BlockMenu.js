import Menu, { MenuItem, Divider } from 'rc-menu';
import React, { Fragment } from 'react';
import { Dropdown, Button, BUTTON_TYPES, BUTTON_SIZES } from '@atoms';

const getMenuData = ({ onAddColumn, onRemoveBlock, allowAdd }) => [
  { key: '1', label: '  Add column', fn: onAddColumn, disabled: !allowAdd },
  { key: '2', label: '  Remove block', fn: onRemoveBlock },
];

const BlockMenuButton = ({ onAddColumn, onRemoveBlock, menuVisible, setMenuVisible, allowAdd }) => (
  <div className='flex items-center'>
    <Dropdown
      trigger={'hover'}
      menu={BlockMenu({ onAddColumn, onRemoveBlock, allowAdd })}
      keepVisibleIds={['1']}
      visible={menuVisible}
      setVisible={setMenuVisible}
    >
      <Button
        type={BUTTON_TYPES.SECONDARY}
        size={BUTTON_SIZES.CUSTOM}
        className='px-2 py-[6px] font-bold'
        children='...'
      />
    </Dropdown>
  </div>
);

const BlockMenu = ({ onAddColumn, onRemoveBlock, onClose, allowAdd }) => {
  const menu = getMenuData({ onAddColumn, onRemoveBlock, allowAdd });
  const isLastItem = (index) => index === menu.length - 1;

  return (
    <Menu selectable={false} onSelect={onClose}>
      {menu.map(({ key, label, fn, disabled }, index) => (
        <Fragment key={index}>
          <MenuItem key={key} onMouseDown={fn} children={label} disabled={disabled} />
          {isLastItem(index) ? null : <Divider />}
        </Fragment>
      ))}
    </Menu>
  );
};

export default BlockMenuButton;

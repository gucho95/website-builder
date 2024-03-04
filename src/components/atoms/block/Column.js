import { Button, BUTTON_SIZES, BUTTON_TYPES, Dropdown, Text } from '@atoms';
import { selectColumnWidget } from '@selectors/columnsWidgets';
import classNames from 'classnames';
import Menu, { MenuItem, Divider } from 'rc-menu';
import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';

const classes = {
  root: 'h-full w-full flex group hover:border-black border-1px border-grey-dark border-dashed hover:shadow-4 drag cursor-move',
  layerAlpha: 'perfect-center bg-yellow w-full',
  text: 'truncate text-h5',
  layerBeta: 'flex justify-end items-center px-2 w-full bg-yellow bg-opacity-60',
  overlayVisible: 'z-20 bg-yellow bg-opacity-75',
  overlayHidden: 'z-0 invisible',
  optionsButton: 'px-2 py-6px font-bold',
};

const getMenuData = ({ onAppend, onRemove, hasWidget }) => [
  { key: '1', label: hasWidget ? 'Update widget' : 'Append widget', fn: onAppend },
  { key: '2', label: 'Remove column', fn: onRemove },
];

const ColumnMenu = ({ onAppend, onRemove, onClose, hasWidget }) => {
  const menu = getMenuData({ onAppend, onRemove, hasWidget });
  const isLastItem = (index) => index === menu.length - 1;
  return (
    <Menu selectable={false} onSelect={onClose}>
      {menu.map(({ key, label, fn }, index) => (
        <Fragment key={key}>
          <MenuItem key={key} onMouseDown={fn} children={label} />
          {isLastItem(index) ? null : <Divider />}
        </Fragment>
      ))}
    </Menu>
  );
};

const Column = ({ data, onAppendWidget, onRemoveColumn, index }) => {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const columnWidget = useSelector((state) => selectColumnWidget(state, data.id));
  const widgetData = columnWidget?.widgetData;
  const hasWidget = widgetData?.type;

  const onAppend = () => onAppendWidget(data.id);
  const onRemove = () => onRemoveColumn(data.id);
  const onMouseEnter = () => setOverlayVisible(true);
  const onMouseLeave = () => {
    setOverlayVisible(false);
    setMenuVisible(false);
  };

  return (
    <div className={classes.root} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className='h-auto absolute px-1 py-1 z-0'>Width : {data.layout.w}</div>
      {overlayVisible ? (
        <div className={classNames(classes.layerBeta)}>
          <Dropdown
            trigger={'hover'}
            menu={ColumnMenu({ onAppend, onRemove, index, hasWidget })}
            keepVisibleIds={['1']}
            visible={menuVisible}
            setVisible={setMenuVisible}
          >
            <Button
              type={BUTTON_TYPES.SECONDARY}
              size={BUTTON_SIZES.CUSTOM}
              className={classes.optionsButton}
              children='...'
            />
          </Dropdown>
        </div>
      ) : (
        <div className={classNames(classes.layerAlpha, hasWidget ? 'bg-opacity-40' : 'bg-opacity-10')}>
          <Text className={classNames(classes.text, hasWidget ? 'text-black' : 'text-grey-dark')}>
            {hasWidget ? `${widgetData?.type}/${widgetData?.option}` : 'No widget'}
          </Text>
        </div>
      )}
    </div>
  );
};

export default Column;

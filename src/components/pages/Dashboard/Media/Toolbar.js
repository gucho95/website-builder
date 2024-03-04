import { Button, Spacing, Select, BUTTON_TYPES, BUTTON_SIZES } from '@atoms';
import { GridIcon, ListIcon } from '@atoms/icons';
import Search from '@atoms/input/Search';
import classNames from 'classnames';
import { useState } from 'react';

const ACTION_OPTIONS = [
  { value: 'delete', label: 'Delete Permanently' },
  { value: 'regenerate_thumbnails', label: 'Regenerate Thumbnails' },
];

const FILTER_OPTIONS = [
  { value: 'all', label: 'All dates' },
  { value: 'october-2020', label: 'October 2020' },
  { value: 'november-2020', label: 'November 2020' },
  { value: 'december-2020', label: 'December 2020' },
];

const Toolbar = ({
  onViewChange,
  isListView,
  isGridView,
  views,
  applyAction,
  applyFilter,
  searchText,
  setSearchText,
}) => {
  const [action, setAction] = useState(null);
  const [filter, setFilter] = useState(FILTER_OPTIONS[0].value);

  return (
    <div className='px-4 py-2 shadow-1 bg-white rounded-12px flex items-center'>
      <div className='flex'>
        <Button onClick={() => onViewChange(views.LIST)} size={BUTTON_SIZES.CUSTOM}>
          <ListIcon
            className={classNames(
              'w-7 h-7 fill-current text-blue-light transition-all',
              isListView ? '' : 'opacity-50'
            )}
          />
        </Button>

        <Spacing className='pl-2' />
        <Button onClick={() => onViewChange(views.GRID)} size={BUTTON_SIZES.CUSTOM}>
          <GridIcon
            className={classNames(
              'w-7 h-7 fill-current text-blue-light transition-all',
              isGridView ? '' : 'opacity-50'
            )}
          />
        </Button>
      </div>
      <Spacing className='pl-8' />
      <div className='flex'>
        <Select
          options={ACTION_OPTIONS}
          className='w-215px'
          placeholder='Bulk actions'
          value={action}
          onChange={(e) => setAction(e.target.value)}
        />
        <Spacing className='pl-1' />
        <div>
          <Button
            type={BUTTON_TYPES.PRIMARY}
            size={BUTTON_SIZES.CUSTOM}
            children='Apply'
            className='h-full px-2'
            onClick={() => applyAction(action)}
          />
        </div>
      </div>
      <Spacing className='pl-4' />
      <div className='flex'>
        <Select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          options={FILTER_OPTIONS}
          placeholder='Choose option'
          className='w-215px'
        />
        <Spacing className='pl-1' />
        <div>
          <Button
            type={BUTTON_TYPES.PRIMARY}
            size={BUTTON_SIZES.CUSTOM}
            children='Apply'
            className='h-full px-2'
            onClick={() => applyFilter(filter)}
          />
        </div>
      </div>
      <div className='flex flex-1 justify-end'>
        <div className='w-294px'>
          <Search className='w-294px' value={searchText} onChange={(e) => setSearchText(e.target.value)} />
        </div>
      </div>
    </div>
  );
};

export default Toolbar;

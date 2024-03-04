import { Text } from '@atoms';
import { DateTime } from 'luxon';
import { SORT_TYPES } from '.';

export const getColumns = ({
  selectAllChecked,
  toggleAll,
  selectedRedirects,
  selectRedirect,
  deSelectRedirect,
  dateSort,
  setDateSort,
}) => [
  {
    title: <input type='checkbox' checked={selectAllChecked} onChange={toggleAll} />,
    key: 'title',
    dataIndex: '',
    width: 50,
    render: (item) => {
      const selected = selectedRedirects.includes(item.id);
      return (
        <input
          type='checkbox'
          checked={selected}
          onChange={(e) => (e.target.checked ? selectRedirect(item.id) : deSelectRedirect(item.id))}
        />
      );
    },
  },
  {
    title: 'Redirect type',
    dataIndex: 'statusCode',
    key: 'statusCode',
    width: 150,
  },
  {
    title: 'Old url',
    dataIndex: 'oldUrl',
    key: 'oldUrl',
  },
  {
    title: 'New Url',
    dataIndex: 'newUrlTo',
    key: 'newUrlTo',
  },
  {
    title: (
      <div className='flex justify-between'>
        <Text>Redirect Date</Text>
        <div
          onClick={() => setDateSort(dateSort === SORT_TYPES.ASC ? SORT_TYPES.DESC : SORT_TYPES.ASC)}
          className='px-3 cursor-pointer'
        >
          {dateSort === SORT_TYPES.ASC ? <Text> &#x2191;</Text> : null}
          {dateSort === SORT_TYPES.DESC ? <Text> &#x2193;</Text> : null}
        </div>
      </div>
    ),
    dataIndex: 'createdAt',
    key: 'date',
    width: 150,
    render: (e) => DateTime.fromISO(e).toFormat('DD'),
  },
];

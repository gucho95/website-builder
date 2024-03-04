import { Button, BUTTON_SIZES, BUTTON_TYPES, Spacing, Table, Image, Text, Checkbox } from '@atoms';
import { generateMediaSrc } from '@utils';
import { DateTime } from 'luxon';
import MediaItem from '../MediaItem';

const FileColumn = (item) => {
  return (
    <div className='flex'>
      <div className='h-24 w-24' children={MediaItem(item, false)} />

      <Spacing className='pl-1' />
      <div className='flex flex-col text-left'>
        <Text children={item.displayName} />
        <Text children={item.fileName} />
        <Text children={item.mimetype} />
      </div>
    </div>
  );
};

export const ActionsColumn = ({ item, removeMedia, editMedia, generateThumbs }) => (
  <div className='flex space-x-1 items-center justify-center'>
    <a download href={generateMediaSrc(item.relativePath)} target='_blank' rel='noreferrer'>
      <Button type={BUTTON_TYPES.PRIMARY} size={BUTTON_SIZES.CUSTOM} className='py-1 px-2'>
        View
      </Button>
    </a>
    <Button
      type={BUTTON_TYPES.SECONDARY}
      size={BUTTON_SIZES.CUSTOM}
      className='py-1 px-2'
      onClick={(e) => editMedia({ ...item, removeMedia, generateThumbs })}
    >
      Edit
    </Button>

    <Button
      type={BUTTON_TYPES.DANGER}
      size={BUTTON_SIZES.CUSTOM}
      className='py-1 px-2'
      onClick={() => removeMedia({ id: item.id })}
    >
      Delete Permanently
    </Button>
  </div>
);

const getColumns = ({
  removeMedia,
  openMediaModal,
  generateThumbs,
  selectedMedias,
  selectMedia,
  deSelectMedia,
  toggleAll,
  selectAllChecked,
}) => [
  {
    title: <input type='checkbox' checked={selectAllChecked} onChange={toggleAll} />,
    key: 'title',
    dataIndex: '',
    width: 50,
    render: (item) => {
      const selected = selectedMedias.includes(item.id);
      return (
        <input
          type='checkbox'
          checked={selected}
          onChange={(e) => (e.target.checked ? selectMedia(item.id) : deSelectMedia(item.id))}
        />
      );
    },
  },

  {
    title: 'File',
    key: 'title',
    dataIndex: '',
    width: 300,
    render: FileColumn,
  },
  { title: 'Author', dataIndex: 'newUrlTo', key: 'author', render: () => 'Name Surname', width: 150 },
  {
    title: 'Date',
    dataIndex: 'createdAt',
    key: 'date',
    width: 100,
    render: (e) => DateTime?.fromMillis(e).toFormat('DD'),
  },
  {
    title: 'Actions',
    dataIndex: '',
    key: 'actions',
    width: 280,
    render: (item) => (
      <ActionsColumn item={item} removeMedia={removeMedia} editMedia={openMediaModal} generateThumbs={generateThumbs} />
    ),
  },
];

const ListView = ({
  data,
  removeMedia,
  openMediaModal,
  generateThumbs,
  selectedMedias,
  selectMedia,
  deSelectMedia,
  toggleAll,
  selectAllChecked,
}) => {
  const columns = getColumns({
    removeMedia,
    openMediaModal,
    generateThumbs,
    selectedMedias,
    selectMedia,
    deSelectMedia,
    toggleAll,
    selectAllChecked,
  });

  return (
    <div className=''>
      <Spacing className='pt-2' />
      <Table columns={columns} data={data} tableLayout='fixed' className='min-w-full' rowKey={(record) => record.id} />
      <Spacing className='pt-4' />
    </div>
  );
};

export default ListView;

import { Button, BUTTON_SIZES, BUTTON_TYPES, Text } from '@atoms';
import { generateMediaSrc } from '@utils';
import MediaItem from '../MediaItem';
import { ActionsColumn } from './List';

const GridView = ({ data, removeMedia, generateThumbs, openMediaModal, selectedMediaId, setSelectedMediaId }) => {
  return data?.length ? (
    <div className='grid grid-cols-4 gap-2 transition-all w-full'>
      {data.map((media) => (
        <div className='h-48 group relative'>
          <MediaItem
            key={media.id}
            selected={media.id === selectedMediaId}
            onSelect={() => setSelectedMediaId(media.id)}
            {...media}
          />
          <div className='absolute w-full h-full inset-0 invisible group-hover:visible flex justify-center flex-col items-center space-y-2 '>
            <a href={generateMediaSrc(media.relativePath)} target='_blank' className=''>
              <Button type={BUTTON_TYPES.PRIMARY} size={BUTTON_SIZES.CUSTOM} className='py-1 px-2'>
                View
              </Button>
            </a>
            <Button
              type={BUTTON_TYPES.SECONDARY}
              size={BUTTON_SIZES.CUSTOM}
              className='py-1 px-2'
              onClick={(e) => openMediaModal({ ...media, removeMedia, generateThumbs })}
            >
              Edit
            </Button>

            <Button
              type={BUTTON_TYPES.SECONDARY}
              size={BUTTON_SIZES.CUSTOM}
              className='py-1 px-2'
              onClick={() => generateThumbs(media)}
            >
              Regenerate Thumbnails
            </Button>
            <Button
              type={BUTTON_TYPES.DANGER}
              size={BUTTON_SIZES.CUSTOM}
              className='py-1 px-2'
              onClick={() => removeMedia(media)}
            >
              Delete Permanently
            </Button>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <Text className='text-center block'>No data</Text>
  );
};

export default GridView;

import { Video, Image } from '@atoms';
import { CheckedIcon, ImageIcon, VideoIcon } from '@atoms/icons';
const { REACT_APP_ROOT } = process.env;

const MediaItem = (media) => {
  const mimeType = media?.mimetype;
  // const src = REACT_APP_ROOT + '/' + media?.relativePath;
  const src = media?.relativePath;
  const mediaProps = { ...media, src };

  switch (true) {
    case mimeType?.includes('video'):
      return <MediaWrapper icon={VideoIcon} component={Video} media={mediaProps} />;
    case mimeType?.includes('image'):
      return <MediaWrapper icon={ImageIcon} component={Image} media={mediaProps} />;
    default:
      return <MediaWrapper icon={null} component={Image} media={mediaProps} />;
  }
};

const MediaWrapper = ({ icon: Icon, component: Component, media }) => {
  return (
    <div className='relative h-36 group cursor-pointer' onClick={media.onSelect}>
      <Component src={media.src} className='object-cover object-center h-full w-full' />
      <div className='w-full h-full inset-0 bg-black absolute bg-opacity-30 group-hover:bg-opacity-0' />
      {Icon ? <Icon className='fill-current text-white w-4 h-4 z-20 absolute right-1 top-1 opacity-50 ' /> : null}
      {media.selected ? <CheckedIcon className='fill-current text-white w-6 h-6 z-20 absolute left-1 top-1' /> : null}
    </div>
  );
};

export default MediaItem;

import { Video, Image } from '@atoms';
import { CheckedIcon, ImageIcon, VideoIcon } from '@atoms/icons';
import { generateMediaSrc } from '@utils';
import classNames from 'classnames';

const MediaItem = (media, hoverEffect = true) => {
  const mimeType = media?.mimetype;
  const src = generateMediaSrc(media?.relativePath);
  const mediaProps = { ...media, src };

  switch (true) {
    case mimeType?.includes('video'):
      return <MediaWrapper icon={VideoIcon} component={Video} media={mediaProps} hoverEffect={hoverEffect} />;
    case mimeType?.includes('image'):
      return <MediaWrapper icon={ImageIcon} component={Image} media={mediaProps} hoverEffect={hoverEffect} />;
    default:
      return <MediaWrapper icon={null} component={Image} media={mediaProps} hoverEffect={hoverEffect} />;
  }
};

const MediaWrapper = ({ icon: Icon, component: Component, media, hoverEffect }) => {
  return (
    <div className={classNames('relative h-full cursor-pointer', hoverEffect ? 'group' : '')} onClick={media.onSelect}>
      <Component src={media.src} className='object-cover object-center h-full w-full' />
      {hoverEffect ? (
        <div className='w-full h-full inset-0 bg-black absolute bg-opacity-30 group-hover:bg-opacity-0' />
      ) : null}
      {Icon ? <Icon className='fill-current text-white w-4 h-4 z-20 absolute right-1 top-1 opacity-50 ' /> : null}
      {media.selected ? <CheckedIcon className='fill-current text-white w-6 h-6 z-20 absolute left-1 top-1' /> : null}
    </div>
  );
};

export default MediaItem;

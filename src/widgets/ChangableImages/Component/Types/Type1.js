import { Image } from '@atoms';
import classNames from 'classnames';

const ImageItem = ({ src }) => <Image className='h-107px w-full object-cover object-center' src={src} />;

const classes = {
  root: 'grid grid-cols-1 gap-y-2',
  grid4: 'grid grid-cols-4 gap-x-2',
  grid5: 'grid grid-cols-5 gap-x-2',
};

const Type1 = ({ items, ...rest }) => {
  const row1Items = items[0]?.items;
  const row2Items = items[1]?.items;
  const row3Items = items[2]?.items;
  const row4Items = items[3]?.items;
  return (
    <div className={classes.root}>
      <div className={classNames(classes.grid4, 'pl-10')}>
        {row1Items?.map((i, key) => (
          <ImageItem src={i?.image} key={key} />
        ))}
      </div>
      <div className={classNames(classes.grid4, 'pl-20')}>
        {row2Items?.map((i, key) => (
          <ImageItem src={i?.image} key={key} />
        ))}
      </div>
      <div className={classNames(classes.grid4, 'pl-32')}>
        {row3Items?.map((i, key) => (
          <ImageItem src={i?.image} key={key} />
        ))}
      </div>
      <div className={classNames(classes.grid5)}>
        {row4Items?.map((i, key) => (
          <ImageItem src={i?.image} key={key} />
        ))}
      </div>
    </div>
  );
};

export default Type1;

import { Heading, Image, Paragraph } from '@atoms';
import classNames from 'classnames';

const classes = {
  column: 'relative group shadow-2 overflow-hidden',
  imageWrapper: 'w-full h-full absolute inset-0 bg-blue-dark',
  image: 'w-full h-full object-cover object-center',
  paragraphWrapper:
    'w-full h-full absolute inset-0 backdrop-filter backdrop-blur-sm  overflow-hidden opacity-0 group-hover:opacity-100 transition-all bg-dark bg-opacity-50',
  paragraph: 'line-clamp-6 text-white font-light',
  titleWrapper:
    'absolute bottom-5 left-5 p-4 bg-black text-white shadow-2 bg-opacity-70 backdrop-filter backdrop-blur-md',
  title: 'uppercase truncate',
};

const Card = ({ className, contentClassName, paragraphClassName, image, title, description }) => (
  <div className={classNames(classes.column, className)}>
    <div className={classes.imageWrapper}>
      <Image src={image} className={classes.image} />
    </div>

    <div className={classNames(classes.paragraphWrapper, contentClassName)}>
      <Paragraph children={description} className={classNames(classes.paragraph, paragraphClassName)} />
    </div>
    <div className={classes.titleWrapper}>
      <Heading level={5} children={title} className={classes.title} />
    </div>
  </div>
);

export default Card;

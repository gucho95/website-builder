import { Heading, Image, Paragraph, Spacing } from '@atoms';
import classNames from 'classnames';

const classes = {
  root: 'w-1470px mx-auto flex max-h-345px rounded-10px overflow-hidden shadow-1 max-w-full group hover:shadow-4 transition-all',
  imageSection: 'flex-1',
  image: 'w-full h-full object-cover object-center',
  textSection: 'px-7 pt-16 flex flex-col w-470px',
  title: 'text-blue-light font-medium group-hover:underline',
  description: 'text-p5 font-light line-clamp-6',
};

const Type1 = ({ title, description, image, rootClassName }) => (
  <div className={classNames(classes.root, rootClassName)}>
    <div className={classes.imageSection}>
      <Image src={image} className={classes.image} />
    </div>

    <div className={classes.textSection}>
      <Heading level={5} children={title} className={classes.title} />
      <Spacing className='pt-3' />
      <Paragraph className={classes.description} children={description} />
      <Spacing className='pt-3' />
    </div>
  </div>
);

export default Type1;

import { Heading, Image, Paragraph, Spacing } from '@atoms';

const classes = {
  root: 'max-w-full shadow-1 rounded-5px overflow-hidden group hover:shadow-4 transition-all',
  imageSection: 'w-full h-215px',
  image: 'w-full h-full object-cover object-center',
  textSection: 'px-5',
  title: 'text-p2-32 truncate uppercase text-blue-light font-medium group-hover:underline',
  description: 'text-dark font-light text-p5 line-clamp-6 overflow-hidden',
};

const Type4 = ({ title, description, image }) => (
  <div className={classes.root}>
    <div className={classes.imageSection}>
      <Image src={image} className={classes.image} />
    </div>
    <div className={classes.textSection}>
      <Spacing className='pt-6' />
      <Heading level={5} children={title} className={classes.title} />
      <Spacing className='pt-2' />
      <Paragraph className={classes.description} children={description} />
      <Spacing className='pt-8' />
    </div>
  </div>
);

export default Type4;

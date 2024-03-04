import { Heading, Image, Paragraph, Spacing } from '@atoms';

const classes = {
  root: 'w-470px shadow-2 rounded-10px mx-auto overflow-hidden',
  imageSection: 'w-full h-345px',
  image: 'w-full h-full object-cover object-center',
  textSection: 'py-10 pl-12 pr-16',
  title: 'truncate uppercase text-dark',
  description: 'text-dark font-light text-p2-32 line-clamp-6 overflow-hidden',
};

const Type7 = ({ title, description, image }) => (
  <div className={classes.root}>
    <div className={classes.imageSection}>
      <Image src={image} className={classes.image} />
    </div>
    <div className={classes.textSection}>
      <Heading level={4} children={title} className={classes.title} />
      <Spacing className='pt-2' />
      <Paragraph className={classes.description} children={description} />
    </div>
  </div>
);

export default Type7;

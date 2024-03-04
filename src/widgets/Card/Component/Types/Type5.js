import { Button, BUTTON_TYPES, Heading, Text, Image, Paragraph, Spacing } from '@atoms';

const classes = {
  root: 'max-w-full h-360px shadow-1 rounded-10px mx-auto flex overflow-hidden group hover:shadow-5 transition-all',
  imageSection: 'w-6/12 overflow-hidden',
  image: 'w-full h-full object-cover object-center transform group-hover:scale-105 transition-all',
  textSection: 'p-8 w-6/12 flex flex-col',
  title: 'truncate uppercase text-dark',
  descriptionWrapper: 'flex-1',
  description: 'text-dark font-light text-p4-21 line-clamp-6 overflow-hidden ',
  buttonWrapper: 'flex justify-end',
  button: 'flex items-center group text-p2-30 text-dark',
};

const Type5 = ({ title, description, image, buttonText }) => (
  <div className={classes.root}>
    <div className={classes.imageSection}>
      <Image src={image} className={classes.image} />
    </div>
    <div className={classes.textSection}>
      <Heading level={4} children={title} className={classes.title} />
      <Spacing className='pt-5' />
      <div className={classes.descriptionWrapper}>
        <Paragraph className={classes.description} children={description} />
      </div>
      <Spacing className='pt-7' />
      <div className={classes.buttonWrapper}>
        <Button type={BUTTON_TYPES.CUSTOM} className={classes.button}>
          <Text children={buttonText} />
          <Spacing className='pl-2 group-hover:pl-4 transition-all' />
          <Text>&#x2192;</Text>
          <Spacing className='pl-2 group-hover:pl-0 transition-all' />
        </Button>
      </div>
    </div>
  </div>
);

export default Type5;

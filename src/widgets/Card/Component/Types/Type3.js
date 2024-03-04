import { Text, Paragraph, Rate, Spacing } from '@atoms';

const classes = {
  root: 'w-345px max-w-full p-7 shadow-1 h-294px overflow-hidden mx-auto rounded-10px group hover:shadow-5 transition-all',
  title: 'text-p2-32 text-dark truncate',
  description: 'text-grey-dark font-light text-p4-24 line-clamp-5 overflow-hidden',
};

const Type3 = ({ title, description, rate }) => (
  <div className={classes.root}>
    <Rate value={rate} />
    <Spacing className='pt-7' />
    <Text children={title} className={classes.title} />
    <Spacing className='pt-3' />
    <Paragraph className={classes.description} children={description} />
  </div>
);

export default Type3;

import { Text } from '@atoms';

const classes = {
  root: 'w-970px shadow-1 rounded-10px mx-auto overflow-hidden px-7 py-8 flex hover:shadow-4 transition-all',
  title: 'text-p1 text-blue-light flex-1 font-medium',
  text: 'text-p3-28 text-grey-dark leading-0',
};

const Type8 = ({ title, text }) => (
  <div className={classes.root}>
    <Text className={classes.title} children={title} />
    <Text className={classes.text} children={text} />
  </div>
);

export default Type8;

import Card from '../Card';

const classes = {
  root: 'w-1470px max-w-full mx-auto',
  row2col: 'grid grid-cols-2 w-full gap-x-2',
  column: 'h-345px',
};

const Type4 = ({ items }) => {
  return items ? (
    <div className={classes.root}>
      <div className={classes.row2col}>
        {items.map((i, key) => (
          <Card
            key={key}
            className={classes.column}
            contentClassName='pt-16 px-32'
            paragraphClassName='text-p4-24'
            {...i}
          />
        ))}
      </div>
    </div>
  ) : null;
};

export default Type4;

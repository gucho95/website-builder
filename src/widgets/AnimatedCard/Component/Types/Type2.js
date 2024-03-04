import Card from '../Card';

const classes = {
  root: 'w-1470px max-w-full mx-auto',
  row: 'grid grid-cols-3 w-full gap-x-2 gap-y-2',
  column: 'h-316px',
};

const Type2 = ({ items }) => {
  return items ? (
    <div className={classes.root}>
      <div className={classes.row}>
        {items.map((i, key) => (
          <Card
            key={key}
            className={classes.column}
            contentClassName='px-5 pt-14'
            paragraphClassName='text-p5'
            {...i}
          />
        ))}
      </div>
    </div>
  ) : null;
};

export default Type2;

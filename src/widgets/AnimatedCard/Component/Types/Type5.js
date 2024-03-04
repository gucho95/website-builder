import Card from '../Card';

const classes = {
  root: 'w-1470px max-w-full mx-auto',
  row3col: 'grid grid-cols-3 w-full gap-x-2 gap-y-2',
  column: 'h-316px',
};

const Type5 = ({ items }) => {
  return items ? (
    <div className={classes.root}>
      <div className={classes.row3col}>
        {items.map((i, key) => (
          <Card
            key={key}
            className={classes.column}
            contentClassName='px-5 pt-12'
            paragraphClassName='text-p5'
            {...i}
          />
        ))}
      </div>
    </div>
  ) : null;
};

export default Type5;

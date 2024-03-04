import { Spacing } from '@atoms';
import Card from '../Card';

const classes = {
  root: 'w-1470px max-w-full mx-auto',
  firstRow: 'grid grid-cols-2 w-full gap-x-2',
  secondRow: 'grid grid-cols-3 w-full gap-x-2 gap-y-2',
  bigColumn: 'h-345px',
  smallColumn: 'h-233px',
};

const Type1 = ({ items }) => {
  const firstRowData = items ? items.filter((i, key) => key < 2) : [];
  const secondRowData = items ? items.filter((i, key) => key > 1) : [];

  return items ? (
    <div className={classes.root}>
      <div className={classes.firstRow}>
        {firstRowData.map((i, key) => (
          <Card
            key={key}
            className={classes.bigColumn}
            contentClassName='px-32 pt-16'
            paragraphClassName='text-p4-24'
            {...i}
          />
        ))}
      </div>
      <Spacing className='pt-2' />
      <div className={classes.secondRow}>
        {secondRowData.map((i, key) => (
          <Card key={key} className={classes.smallColumn} contentClassName='p-5' paragraphClassName='text-p5' {...i} />
        ))}
      </div>
    </div>
  ) : null;
};

export default Type1;

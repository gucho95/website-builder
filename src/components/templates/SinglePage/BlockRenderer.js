import ColumnRenderer from './ColumnRenderer';

const classes = { columnWrapper: 'min-h-30px flex overflow-hidden' };

const BlockRenderer = ({ data }) => {
  const columns = data?.columns;
  const columnsLength = columns?.length;

  return columnsLength ? (
    <div className={classes.columnWrapper}>
      {columns.map((column) => (
        <ColumnRenderer key={column.id} data={column} />
      ))}
    </div>
  ) : null;
};

export default BlockRenderer;

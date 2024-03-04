import { useRef, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Spacing } from '@atoms';
import { useRouter, useWindowSize } from '@hooks';
import { selectBlockColumns, selectColumnsMaxIndex } from '@selectors/blockColumns';
import blockColumnsAction from '@actions/blockColumns';
import { COLUMN } from '@constants/system';
import BlockMenuButton from './BlockMenu';
import BlockGrid from './BlockGrid';

const MAX_COLUMNS = 12;
const generateColumnLayout = (id, index) => ({
  i: id,
  x: index,
  y: 0,
  w: 1,
  h: 1,
  isResizable: true,
  minW: 1,
  minH: 1,
  maxH: 1,
});

const classes = {
  wrapper: 'flex w-full flex-1 drag h-full',
  root: 'w-full border-1px border-grey-dark border-dashed hover:border-black h-full',
};

const Block = ({ data, onRemoveBlock, index }) => {
  const dispatch = useDispatch();
  const blockRef = useRef(null);
  const { windowWidth } = useWindowSize();
  const { history, pathname } = useRouter();
  const [menuVisible, setMenuVisible] = useState(false);

  const columns = useSelector((state) => selectBlockColumns(state, data.id));
  const columnsMaxIndex = useSelector((state) => selectColumnsMaxIndex(state, data.id));
  const columnsSum = columns.reduce((acc, cur) => (acc += cur.layout.w), 0);
  const allowAdd = columnsSum < MAX_COLUMNS;

  const blockWidth = useMemo(() => {
    const blockBoundingClientRect = blockRef.current?.getBoundingClientRect();
    return blockBoundingClientRect?.width;
  }, [windowWidth, blockRef.current]);

  // COLUMN ACTIONS
  const onAddColumn = () => {
    if (!allowAdd) {
      return;
    }
    const id = uuidv4();
    const index = isNaN(columnsMaxIndex) ? 0 : columnsMaxIndex + 1;

    const columnData = {
      id,
      type: COLUMN,
      parentId: data.id,
      layout: generateColumnLayout(id, index),
    };

    dispatch(blockColumnsAction.add(columnData));
  };

  const onRemoveColumn = (payload) => dispatch(blockColumnsAction.remove(payload));
  const onLayoutChange = (payload) => dispatch(blockColumnsAction.updateLayout(payload));

  return (
    <div className={classes.wrapper}>
      <div className={classes.root} ref={blockRef}>
        <BlockGrid
          onLayoutChange={onLayoutChange}
          width={blockWidth}
          columns={columns}
          onAppendWidget={(id) => history.push(`${pathname}/columns/${id}`)}
          onRemoveColumn={(id) => onRemoveColumn(id)}
        />
      </div>
      <Spacing className='pl-2' />
      <BlockMenuButton
        allowAdd={allowAdd}
        onAddColumn={onAddColumn}
        onRemoveBlock={onRemoveBlock}
        setMenuVisible={setMenuVisible}
        menuVisible={menuVisible}
      />
    </div>
  );
};

export default Block;

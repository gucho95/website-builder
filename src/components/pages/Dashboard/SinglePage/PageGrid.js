import React, { useMemo } from 'react';
import GridLayout from 'react-grid-layout';
import { Block } from '@atoms';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const generateLayout = (blocks) =>
  blocks.map((block) => ({ i: block.id, x: 0, y: block.index, w: 1, h: 1, maxw: 1, isResizable: false }));

const PageGrid = ({ width = window.innerWidth, data, onLayoutChange, onRemoveBlock }) => {
  const layout = useMemo(() => generateLayout(data), [data?.length]);

  return (
    <GridLayout
      onLayoutChange={onLayoutChange}
      cols={1}
      width={width}
      layout={layout}
      rowHeight={130}
      compactType='vertical'
      draggableHandle='.drag'
      draggableCancel='.no-row-drag'
      isBounded={true}
    >
      {data.map((item, index) => (
        <div key={item.id}>
          <Block index={index} onRemoveBlock={() => onRemoveBlock(item.id)} data={item} />
        </div>
      ))}
    </GridLayout>
  );
};

export default PageGrid;

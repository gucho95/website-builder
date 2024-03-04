import React from 'react';
import GridLayout from 'react-grid-layout';
import Column from './Column';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const BlockGrid = ({ width = window.innerWidth, columns, onLayoutChange, onAppendWidget, onRemoveColumn }) => {
  const layout = columns.map((c) => c.layout);

  return (
    <GridLayout
      maxRows={1}
      onLayoutChange={onLayoutChange}
      onDragStop={onLayoutChange}
      onResizeStop={onLayoutChange}
      width={width}
      cols={12}
      layout={layout}
      rowHeight={108}
      compactType='horizontal'
      draggableHandle='.drag'
      draggableCancel='.no-col-drag'
      isBounded={true}
    >
      {columns.map((column, index) => (
        <div key={column.id} className='no-row-drag'>
          <Column data={column} index={index + 1} onAppendWidget={onAppendWidget} onRemoveColumn={onRemoveColumn} />
        </div>
      ))}
    </GridLayout>
  );
};

export default BlockGrid;

import { BLOCK_COLUMNS } from '@store/actionTypes';
const { ADD, REMOVE, UPDATE_LAYOUT } = BLOCK_COLUMNS;

export const initialState = { data: [], loaded: false, failed: false };

const blockColumns = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD:
      return { ...state, data: [...state.data, payload] };

    case REMOVE:
      return { ...state, data: state.data.filter((p) => p.id !== payload) };

    case UPDATE_LAYOUT:
      const columnsSum = payload.reduce((acc, cur) => (acc += cur.w), 0);
      const emptyColumns = 12 - columnsSum;

      return {
        ...state,
        data: state.data.map((item) => {
          const itemData = payload.find((newItem) => newItem.i === item.id);
          let newData = {};
          if (itemData) {
            newData.x = itemData?.x;
            newData.w = itemData?.w;
            newData.maxW = columnsSum === 12 ? newData.w : newData.w + emptyColumns;
          }

          return itemData ? { ...item, layout: { ...item.layout, ...newData } } : item;
        }),
      };
    default:
      return state;
  }
};

export default blockColumns;

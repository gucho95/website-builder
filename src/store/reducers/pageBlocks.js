import { PAGE_BLOCKS } from '@store/actionTypes';
const { ADD, REMOVE, UPDATE_INDEX } = PAGE_BLOCKS;

export const initialState = { data: [], loaded: false, failed: false };

const pages = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD:
      return { ...state, data: [...state.data, payload] };
    case REMOVE:
      return { ...state, data: state.data.filter((p) => p.id !== payload) };
    case UPDATE_INDEX:
      return {
        ...state,
        data: state.data.map((item) => {
          const newData = payload.find((newItem) => newItem.i === item.id);
          const newIndex = newData?.y;
          return newIndex !== undefined ? { ...item, index: newIndex } : item;
        }),
      };
    default:
      return state;
  }
};

export default pages;

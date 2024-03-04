import { COLUMN_WIDGETS } from '@store/actionTypes';
const { ADD, UPDATE, REMOVE } = COLUMN_WIDGETS;

export const initialState = { data: [], loaded: false, failed: false };

const columnWidgets = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD:
      return { ...state, data: [...state.data, payload] };
    case UPDATE:
      return { ...state, data: state.data.map((i) => (i.parentId === payload.parentId ? { ...i, ...payload } : i)) };
    case REMOVE:
      return { ...state, data: state.data.filter((p) => p.id !== payload) };
    default:
      return state;
  }
};

export default columnWidgets;

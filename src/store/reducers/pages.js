import { PAGES } from '@store/actionTypes';
const { ADD, REMOVE } = PAGES;

export const initialState = { data: [], loaded: false, failed: false };

const pages = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD:
      return { ...state, data: [...state.data, payload] };
    case REMOVE:
      return { ...state, data: state.data.filter((p) => p.id !== payload) };
    default:
      return state;
  }
};

export default pages;

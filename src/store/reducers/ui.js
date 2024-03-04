import { MODALS } from '@store/actionTypes';
const { OPEN, CLOSE } = MODALS;

export const initialState = {
  modal: null,
};

const ui = (state = initialState, action) => {
  const { type, payload } = action;

  switch (true) {
    case [OPEN].includes(type):
      return { ...state, modal: payload };
    case [CLOSE].includes(type):
      return { ...state, modal: null };
    default:
      return state;
  }
};

export default ui;

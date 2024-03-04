import { AUTH } from '@store/actionTypes';
const { SIGN_IN, SIGN_OUT } = AUTH;

export const initialState = { data: null, loaded: false, failed: false };

const user = (state = initialState, action) => {
  const { type, response } = action;
  switch (true) {
    case [SIGN_IN.LOAD].includes(type):
      return { ...state, loaded: false };
    case [SIGN_IN.SUCCESS].includes(type):
      return { ...state, loaded: true, failed: false, data: response?.data };
    case [SIGN_OUT.SUCCESS].includes(type):
      return initialState;
    case [SIGN_IN.FAIL].includes(type):
      return { ...state, response, failed: true, loaded: true, data: null };
    default:
      return state;
  }
};

export default user;

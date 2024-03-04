import { MEDIA } from '@store/actionTypes';
import { data } from 'autoprefixer';
const { FIND, REMOVE, CREATE, UPDATE } = MEDIA;
const initialState = { data: { rows: [], count: 0 }, loaded: false, failed: false };

const media = (state = initialState, action) => {
  const { type, response } = action;
  switch (true) {
    case [FIND.LOAD, UPDATE.LOAD, CREATE.LOAD, REMOVE.LOAD].includes(type):
      return { ...state, loaded: false };

    case [FIND.FAIL, UPDATE.FAIL, CREATE.FAIL, REMOVE.FAIL].includes(type):
      return { ...state, failed: true, loaded: true };

    case [FIND.SUCCESS].includes(type):
      return { ...state, data: response?.data, loaded: true };

    case [CREATE.SUCCESS].includes(type):
      return {
        ...state,
        data: { rows: [...state.data.rows, response.data], count: state.data.count + 1 },
        loaded: true,
      };

    case [REMOVE.SUCCESS].includes(type):
      return {
        ...state,
        data: { rows: state.data.rows.filter((row) => row.id !== response.data), count: state.data.count - 1 },
        loaded: true,
      };

    case [UPDATE.SUCCESS].includes(type):
      return {
        ...state,
        data: {
          ...state.data.rows,
          rows: state.data.rows.map((row) => {
            if (row.id === response.data.id) {
              return { ...row, ...response.data };
            }
            return row;
          }),
        },
        loaded: true,
      };

    case [FIND.RESET].includes(type):
      return initialState;
    default:
      return state;
  }
};

export default media;

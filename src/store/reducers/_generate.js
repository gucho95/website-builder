export const initialState = { data: null, loaded: false, failed: false };

export const generateReducer = ({ state = initialState, actionType, action }) => {
  const { FIND, UPDATE, CREATE, REMOVE } = actionType;
  const { type, response } = action;

  switch (true) {
    case [FIND.LOAD, UPDATE.LOAD, CREATE.LOAD, REMOVE.LOAD].includes(type):
      return { ...state, loaded: false };
    case [FIND.FAIL, UPDATE.FAIL, CREATE.FAIL, REMOVE.FAIL].includes(type):
      return { ...state, failed: true, loaded: true };
    case [FIND.SUCCESS, UPDATE.SUCCESS, CREATE.SUCCESS, REMOVE.SUCCESS].includes(type):
      return { ...state, data: response?.data, loaded: true };
    case [FIND.RESET].includes(type):
      return initialState;
    default:
      return state;
  }
};

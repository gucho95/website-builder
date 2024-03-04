// import { COLUMN_WIDGETS } from '@store/actionTypes';
// const { ADD, REMOVE, UPDATE } = COLUMN_WIDGETS;

export const initialState = {};

const pageWidgets = (state = initialState, action) => {
  // const { type, payload } = action;
  // const page = payload?.page;
  // const widgetId = payload?.id;
  // const widgetData = payload?.widgetData;
  // switch (type) {
  //   case ADD:
  //     return { ...state, [page]: state?.[page] ? [...state[page], { ...widgetData, id: widgetId }] : [widgetData] };
  //   case UPDATE:
  //     return {
  //       ...state,
  //       [page]: state[page].map((w) => (w.id === widgetId ? { ...w, ...widgetData } : w)),
  //     };
  //   case REMOVE:
  //     return { ...state, [page]: state[page].filter((w, i) => w.id !== widgetId) };
  //   default:
  //     return state;
  // }
};

export default pageWidgets;

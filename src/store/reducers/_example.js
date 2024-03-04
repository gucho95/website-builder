import { generateReducer } from './_generate';

const example = (state, action) => generateReducer({ state, action, actionType: USERS });
export default example;

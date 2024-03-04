const key = 'users';
const ref = state[key];

const example = (state) => ({
  loaded: ref(state).loaded,
  failed: ref(state).failed,
  rows: ref(state).data?.rows,
  count: ref(state)?.data?.count,
});

export default example;

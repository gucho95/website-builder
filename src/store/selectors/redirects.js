const key = 'redirects';
const ref = (state) => state[key];

export const selectRedirects = (state) => ref(state);

export const selectRedirectsDataASC = (state) => {
  const rows = [...ref(state).data?.rows];
  return rows?.sort((a, b) => new Date(b.id) - new Date(a.id));
};

export const selectRedirectsDataDESC = (state) => {
  const rows = [...ref(state).data?.rows];
  return rows?.sort((a, b) => new Date(a.id) - new Date(b.id));
};

export const selectRedirectsCount = (state) => ref(state).data?.count;

export const hasMore = (state) => {
  const total = selectRedirectsCount(state);
  const rows = ref(state).data?.rows;
  return total > rows.length;
};

const key = 'media';
const ref = (state) => state[key];

export const selectMedias = (state) => ref(state);

export const selectMediaFiles = (state) =>
  ref(state).data?.rows?.sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });
export const selectMediasCount = (state) => !!ref(state).data?.count;

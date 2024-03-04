const key = 'pageBlocks';
const ref = (state) => state[key];

export const selectPageBlocks = (state, parentId) => ref(state)?.data.filter((block) => block.parentId === parentId);

export const selectBlocksMaxIndex = (state, parentId) => {
  const pageBlocks = selectPageBlocks(state, parentId);

  if (!pageBlocks.length) {
    return 0;
  }

  const maxIndex = Math.max.apply(
    Math,
    pageBlocks.map((i) => i.index)
  );

  return maxIndex;
};

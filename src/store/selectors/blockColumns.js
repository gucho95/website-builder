const key = 'blockColumns';
const ref = (state) => state[key];

export const selectBlockColumns = (state, parentId) =>
  ref(state)
    ?.data.filter((column) => column.parentId === parentId)
    .sort((a, b) => a.layout?.x - b.layout?.x);

export const selectColumnsMaxIndex = (state, parentId) => {
  const blockColumns = selectBlockColumns(state, parentId);

  if (!blockColumns.length) {
    return NaN;
  }

  const maxIndex = Math.max.apply(
    Math,
    blockColumns.map((i) => i.layout?.x)
  );
  return maxIndex;
};

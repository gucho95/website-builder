const key = 'columnWidgets';
const ref = (state) => state[key];

export const selectColumnWidget = (state, parentId) => ref(state)?.data.find((widget) => widget.parentId === parentId);

import { generateSinglePagePath } from '@constants/paths';
import { selectBlockColumns } from './blockColumns';
import { selectColumnWidget } from './columnsWidgets';
import { selectPageBlocks } from './pageBlocks';

const key = 'pages';
const ref = (state) => state[key];

export const selectPages = (state) => ref(state)?.data;

export const selectPagesMenu = (state) => {
  const data = selectPages(state);
  const menu = data?.map((item) => ({ ...item, label: item.title, path: generateSinglePagePath(item.id) }));
  return menu;
};

export const selectPage = (state, pageId) => {
  const pages = selectPages(state);
  return pages.find((p) => p.id === pageId);
};

export const selectPageByPath = (state, path) => {
  const pages = selectPages(state);
  return pages.find((p) => p.path === path);
};

export const selectPageData = (state, pageId) => {
  let pageBlocks = selectPageBlocks(state, pageId).sort((a, b) => a.index - b.index);
  // JOIN BLOCK COLUMNS
  pageBlocks = pageBlocks.map((block) => {
    let columns = selectBlockColumns(state, block.id);
    // JOIN COLUMNS WIDGETS
    columns = columns
      .map((column) => ({ ...column, widget: selectColumnWidget(state, column.id) }))
      .sort((a, b) => a.layout.x - b.layout.x);
    return { ...block, columns };
  });
  // JOIN WIDGETS COLUMNS

  return pageBlocks;
};

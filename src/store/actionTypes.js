const generate = (actionName) => ({
  WATCH: `${actionName}__WATCH`,
  LOAD: `${actionName}__LOAD`,
  FAIL: `${actionName}__FAIL`,
  SUCCESS: `${actionName}__SUCCESS`,
  RESET: `${actionName}__RESET`,
});

export const generateCrud = ({ actionName }) => ({
  FIND: generate(`FIND__${actionName}`),
  FIND_ONE: generate(`FIND_ONE__${actionName}`),
  CREATE: generate(`CREATE__${actionName}`),
  UPDATE: generate(`UPDATE__${actionName}`),
  REMOVE: generate(`REMOVE__${actionName}`),
});

export const AUTH = { SIGN_IN: generate('SIGN_IN'), SIGN_OUT: generate('SIGN_OUT') };

export const PAGES = {
  ADD: 'ADD_PAGE',
  UPDATE: 'UPDATE_PAGE',
  REMOVE: 'REMOVE_PAGE',
};

export const PAGE_BLOCKS = {
  ADD: 'ADD_PAGE_BLOCK',
  UPDATE: 'UPDATE_PAGE_BLOCK',
  UPDATE_INDEX: 'UPDATE_PAGE_BLOCK_INDEX',
  REMOVE: 'REMOVE_PAGE_BLOCK',
};

export const BLOCK_COLUMNS = {
  ADD: 'ADD_BLOCK_COLUMN',
  UPDATE: 'UPDATE_BLOCK_COLUMN',
  UPDATE_INDEX: 'UPDATE_BLOCK_COLUMN_INDEX',
  UPDATE_LAYOUT: 'UPDATE_BLOCK_COLUMN_LAYOUT',
  REMOVE: 'REMOVE_BLOCK_COLUMN',
};

export const COLUMN_WIDGETS = {
  ADD: 'ADD_COLUMN_WIDGET',
  UPDATE: 'UPDATE_COLUMN_WIDGET',
  REMOVE: 'REMOVE_COLUMN_WIDGET',
  DUPLICATE: 'DUPLICATE_COLUMN_WIDGET',
};

export const MEDIA = { ...generateCrud({ actionName: 'MEDIA' }), GENERATE_THUMBS: generate('GENERATE_THUMBS') };
export const REDIRECTS = generateCrud({ actionName: 'REDIRECTS' });

// UI ACTIONS
export const MODALS = {
  OPEN: 'OPEN_MODAL',
  CLOSE: 'CLOSE_MODAL',
};

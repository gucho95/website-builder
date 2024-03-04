import { combineReducers } from 'redux';
import user from './user';
import ui from './ui';
import pages from './pages';
import pageBlocks from './pageBlocks';
import blockColumns from './blockColumns';
import columnWidgets from './columnWidgets';
import media from './media';
import redirects from './redirects';

const reducers = combineReducers({ user, pages, pageBlocks, blockColumns, columnWidgets, ui, media, redirects });

export default reducers;

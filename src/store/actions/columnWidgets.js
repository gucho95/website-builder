import { COLUMN_WIDGETS } from 'store/actionTypes';
import generate from './generate';

const columnWidgets = {
  add: generate(COLUMN_WIDGETS.ADD),
  update: generate(COLUMN_WIDGETS.UPDATE),
  remove: generate(COLUMN_WIDGETS.REMOVE),
  duplicate: generate(COLUMN_WIDGETS.DUPLICATE),
};

export default columnWidgets;

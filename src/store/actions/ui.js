import { MODALS } from '@store/actionTypes';
import generate from './generate';

const ui = {
  openModal: generate(MODALS.OPEN),
  closeModal: generate(MODALS.CLOSE),
};

export default ui;

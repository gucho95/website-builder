import { PAGES } from 'store/actionTypes';
import generate from './generate';

const page = {
  add: generate(PAGES.ADD),
  remove: generate(PAGES.REMOVE),
};

export default page;

import { REDIRECTS } from 'store/actionTypes';
import generate from './generate';

const media = {
  find: generate(REDIRECTS.FIND.WATCH),
  create: generate(REDIRECTS.CREATE.WATCH),
  update: generate(REDIRECTS.UPDATE.WATCH),
  remove: generate(REDIRECTS.REMOVE.WATCH),
};

export default media;

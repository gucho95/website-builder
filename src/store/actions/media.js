import { MEDIA } from 'store/actionTypes';
import generate from './generate';

const media = {
  find: generate(MEDIA.FIND.WATCH),
  create: generate(MEDIA.CREATE.WATCH),
  update: generate(MEDIA.UPDATE.WATCH),
  remove: generate(MEDIA.REMOVE.WATCH),
  generateThumbs: generate(MEDIA.GENERATE_THUMBS.WATCH),
};

export default media;

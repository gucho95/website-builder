import { MEDIA } from '../actionTypes';
import { generateWatcher } from './_generate';
import mediaService from '@services/media';

export const findMedias = generateWatcher({
  actionType: MEDIA.FIND,
  service: mediaService.find,
});

export const uploadMedia = generateWatcher({
  actionType: MEDIA.CREATE,
  service: mediaService.upload,
});

export const updateMedia = generateWatcher({
  actionType: MEDIA.UPDATE,
  service: mediaService.update,
});

export const removeMedia = generateWatcher({
  actionType: MEDIA.REMOVE,
  service: mediaService.remove,
});

export const generateThumbs = generateWatcher({
  actionType: MEDIA.GENERATE_THUMBS,
  service: mediaService.generateThumbs,
});

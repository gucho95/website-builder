import { REDIRECTS } from '../actionTypes';
import { generateWatcher } from './_generate';
import redirectsService from '@services/redirects';

export const findRedirects = generateWatcher({
  actionType: REDIRECTS.FIND,
  service: redirectsService.find,
});

export const createRedirect = generateWatcher({
  actionType: REDIRECTS.CREATE,
  service: redirectsService.create,
});

export const updateRedirect = generateWatcher({
  actionType: REDIRECTS.UPDATE,
  service: redirectsService.update,
});

export const removeRedirect = generateWatcher({
  actionType: REDIRECTS.REMOVE,
  service: redirectsService.remove,
});

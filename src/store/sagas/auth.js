import { AUTH } from '../actionTypes';
import { generateWatcher } from './_generate';
import authService from '@services/auth';

export const signIn = generateWatcher({
  actionType: AUTH.SIGN_IN,
  service: authService.signIn,
});

export const signOut = generateWatcher({
  actionType: AUTH.SIGN_OUT,
  service: null,
});

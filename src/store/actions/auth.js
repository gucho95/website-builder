import { AUTH } from 'store/actionTypes';
import generate from './generate';

const auth = {
  signIn: generate(AUTH.SIGN_IN.WATCH),
  signOut: generate(AUTH.SIGN_OUT.WATCH),
};

export default auth;

import client from 'store/client';
import endpoints from 'store/endpoints';

const auth = {
  signIn: (payload) => client().post(endpoints.signIn, payload),
  signUp: (payload) => client().post(endpoints.signUp, payload),
};

export default auth;

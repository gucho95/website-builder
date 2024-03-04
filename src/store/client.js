import axios from 'axios';
import { store } from '@store/config';
import { selectUserToken } from '@selectors/user';
import { AUTH } from 'store/actionTypes';
import { toast } from 'react-toastify';
const { REACT_APP_ROOT_API } = process.env;

const client = () => {
  const state = store.getState();
  const userToken = selectUserToken(state);

  const service = axios.create({
    baseURL: REACT_APP_ROOT_API,
    headers: { Authorization: userToken ? `Bearer ${userToken}` : null },
  });

  service.interceptors.response.use(
    // SUCCESS CASE
    ({ data, config }) => ({ data, params: config }),
    // FAIL CASE
    (error) => {
      const code = error.response?.status;
      if (code === 401) {
        toast.info('Session expired');
        store.dispatch({ type: AUTH.SIGN_OUT.WATCH, payload: null });
        // logout
      }

      return Promise.reject(error);
    }
  );
  return service;
};

export default client;

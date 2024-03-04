import client from '../client';
import { usersApi as api } from 'store/endpoints';

const example = {
  find: (payload) => client().get(api, payload),
  findOne: (payload) => client().get(`${api}/${payload.id}`),
  post: (payload) => client().post(`${api}/${payload.id}`, payload),
  delete: (payload) => client().delete(`${api}/${payload.id}`, payload),
  put: (payload) => client().put(`${api}/${payload.id}`, payload),
};

export default example;

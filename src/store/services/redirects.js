import client from 'store/client';
import endpoints from 'store/endpoints';

const redirects = {
  find: (payload) => client().get(endpoints.redirects, { params: payload }),
  create: (payload) => client().post(endpoints.redirects, payload),
  update: (payload) => client().put(`${endpoints.redirects}/${payload.id}`, payload),
  remove: (payload) => client().delete(`${endpoints.redirects}`, payload),
};

export default redirects;

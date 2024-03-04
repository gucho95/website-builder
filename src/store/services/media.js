import client from 'store/client';
import endpoints from 'store/endpoints';

const media = {
  find: (payload) => client().post(endpoints.mediaAll, payload),
  upload: (payload) => {
    const data = {
      createdAt: payload.createdAt,
      lastModified: payload.fileData.lastModified,
      mimetype: payload.fileData.type,
      size: payload.fileData.size,
      displayName: payload.fileData.name,
      relativePath: payload.url,
      id: payload.id,
    };

    return Promise.resolve({ data });
  },
  update: (payload) => {
    return Promise.resolve({ data: { altText: payload.altText, description: payload.description, id: payload.id } });
  },
  remove: (payload) => {
    return Promise.resolve({ data: payload.params.id });
  },
  generateThumbs: (payload) => client().put(`${endpoints.mediaThumb}/${payload.id}`, payload),
};

export default media;

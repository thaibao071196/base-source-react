import Client from './AxiosClient';

const resource = '/posts';

export default {
  getPosts({ page, limit }) {
    return Client.get(resource, {
      params: {
        page,
        limit,
      },
    });
  },
  upPost({ contentPost, imagePost, videoPost }) {
    return Client.post(resource, {
      content: contentPost,
      images: imagePost,
      video: videoPost,
    });
  },
  getPostById({ postId }) {
    return Client.get(`${resource}/${postId}`);
  },
};

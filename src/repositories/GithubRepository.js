import Client from './AxiosClient';

const resource = '/users';

export default {
  getRepos(username) {
    return Client.get(`${resource}/${username}/repos`, {
      params: {
        per_page: 100,
      },
    });
  },
};

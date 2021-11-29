import GithubRepository from './GithubRepository';

const repositories = {
  github: GithubRepository,
};

export default {
  get: (name) => repositories[name],
};

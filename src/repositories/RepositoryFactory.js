import PostsRepository from './PostsRepository';
import S3Repository from './S3Repository';

const repositories = {
  posts: PostsRepository,
  s3: S3Repository,
};

export default {
  get: (name) => repositories[name],
};

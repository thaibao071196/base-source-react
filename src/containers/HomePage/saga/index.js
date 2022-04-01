/* eslint no-underscore-dangle: 0 */
import { select, call, put, delay, takeLatest } from 'redux-saga/effects';
import RepositoryFactory from '../../../repositories/RepositoryFactory';
import { REQUEST_GET_POSTS, REQUEST_GET_POST_BY_ID } from '../constants';
import { makeSelectPage } from '../selectors';

import { setIsLoading, setPosts, setPage, setPostById } from '../actions';

const PostsRepository = RepositoryFactory.get('posts');

function* getPost({ limit = 6 }) {
  try {
    const page = yield select(makeSelectPage());
    yield put(setIsLoading(true));
    yield delay(1000);
    const posts = yield call(PostsRepository.getPosts, {
      page,
      limit,
    });
    yield put(setPosts(posts.payload.posts));
    yield put(setPage());
  } catch (e) {
    console.error(e);
  } finally {
    yield put(setIsLoading(false));
  }
}

function* getPostById({ postId }) {
  try {
    yield put(setIsLoading(true));
    const responsePost = yield call(PostsRepository.getPostById, { postId });
    yield put(setPostById(responsePost.payload.post));
  } catch (e) {
    console.log(e);
  } finally {
    yield put(setIsLoading(false));
  }
}

// Individual exports for testing
export default function* homePageSaga() {
  yield takeLatest(REQUEST_GET_POSTS, getPost);
  yield takeLatest(REQUEST_GET_POST_BY_ID, getPostById);
}

import { call, put, select, delay, takeLatest } from 'redux-saga/effects';
import { setPosts } from 'containers/HomePage/actions';
import { REQUEST_UP_POST, REQUEST_FILE_POST } from '../constants';

import {
  makeSelectImagePost,
  makeSelectVideoPost,
  makeSelectContentPost,
} from '../selectors';
import {
  removeImagePost,
  setIsLoading,
  setVideoPost,
  setImagePost,
} from '../actions';
import RepositoryFactory from '../../../repositories/RepositoryFactory';

const PostsRepository = RepositoryFactory.get('posts');
const S3Repository = RepositoryFactory.get('s3');
function* upPost() {
  try {
    yield put(setIsLoading(true));
    const arrImageId = [];
    const contentPost = yield select(makeSelectContentPost());
    const arrImagePost = yield select(makeSelectImagePost());
    const videoPost = yield select(makeSelectVideoPost());
    for (let i = 0; i < arrImagePost.length; i += 1) {
      arrImageId.push(arrImagePost[i]._id);
    }
    yield delay(1000);
    const responsePost = yield call(PostsRepository.upPost, {
      contentPost,
      imagePost: arrImageId,
      videoPost: videoPost._id || null,
    });
    yield put(setPosts([responsePost.payload.post]));
    console.log(arrImagePost);
  } catch (e) {
    console.log(e);
  } finally {
    yield put(setIsLoading(false));
    yield put(removeImagePost());
  }
}

function* uploadFilePost({ filePost }) {
  try {
    yield put(setIsLoading(true));
    for (let i = 0; i < filePost.length; i += 1) {
      const responseFile = yield call(S3Repository.upLoadFile, filePost[i]);
      const completeFilePost = responseFile.payload.file;
      if (completeFilePost.mimeType !== 'video/mp4') {
        yield put(setImagePost(completeFilePost));
      } else {
        yield put(setVideoPost(completeFilePost));
      }
    }
  } catch (e) {
    console.log(e);
  } finally {
    yield put(setIsLoading(false));
  }
}

export default function* upPostSaga() {
  yield takeLatest(REQUEST_UP_POST, upPost);
  yield takeLatest(REQUEST_FILE_POST, uploadFilePost);
}

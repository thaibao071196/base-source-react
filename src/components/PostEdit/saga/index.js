import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { REQUEST_EDIT_POST } from '../constants';

function editPost({ idPostEdit, contentPost, videoPost, imagePosts }) {
  console.log(idPostEdit);
  console.log(contentPost);
  console.log(videoPost);
  console.log(imagePosts);
}

// Individual exports for testing
export default function* postEditSaga() {
  yield takeLatest(REQUEST_EDIT_POST, editPost);
}

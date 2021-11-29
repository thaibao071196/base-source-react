import { take, call, put, select, delay, takeLatest } from 'redux-saga/effects';
import RepositoryFactory from 'repositories/RepositoryFactory';
import { REQUEST_GET_REPOS } from '../constants';

import { setIsLoading, setRepos } from '../actions';

const GithubRepository = RepositoryFactory.get('github');

function* getRepos({ username }) {
  try {
    yield put(setIsLoading(true));
    yield delay(1000);
    const response = yield call(GithubRepository.getRepos, username);
    yield put(setRepos(response));
  } catch (e) {
    alert(e.messsage);
  } finally {
    yield put(setIsLoading(false));
  }
}

// Individual exports for testing
export default function* homePageSaga() {
  yield takeLatest(REQUEST_GET_REPOS, getRepos);
}

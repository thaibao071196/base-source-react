/*
 *
 * HomePage actions
 *
 */

import {
  DEFAULT_ACTION,
  REQUEST_GET_REPOS,
  SET_IS_LOADING,
  SET_REPOS,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function requestGetRepos(username) {
  return {
    type: REQUEST_GET_REPOS,
    username,
  };
}

export function setIsLoading(isLoading) {
  return {
    type: SET_IS_LOADING,
    isLoading,
  };
}

export function setRepos(payload) {
  return {
    type: SET_REPOS,
    payload,
  };
}

/*
 *
 * HomePage actions
 *
 */

import {
  DEFAULT_ACTION,
  REQUEST_GET_POSTS,
  SET_IS_LOADING,
  SET_POSTS,
  SET_PAGE,
  REQUEST_GET_POST_BY_ID,
  SET_POST_BY_ID,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function requestGetPosts() {
  return {
    type: REQUEST_GET_POSTS,
  };
}

export function setIsLoading(isLoading) {
  return {
    type: SET_IS_LOADING,
    isLoading,
  };
}

export function setPosts(posts) {
  return {
    type: SET_POSTS,
    posts,
  };
}

export function setPage() {
  return {
    type: SET_PAGE,
  };
}

export function requestGetPostById({ postId }) {
  return {
    type: REQUEST_GET_POST_BY_ID,
    postId,
  };
}

export function setPostById(post) {
  return {
    type: SET_POST_BY_ID,
    post,
  };
}

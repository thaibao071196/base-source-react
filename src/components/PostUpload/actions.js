/*
 *
 * UpPost actions
 *
 */

import {
  DEFAULT_ACTION,
  REQUEST_UP_POST,
  REMOVE_IMAGE_POST,
  REMOVE_IMAGE_PREVIEW,
  REMOVE_VIDEO_PREVIEW,
  SET_IS_LOADING,
  SET_POSTS,
  SET_IMAGE_POST,
  SET_VIDEO_POST,
  REQUEST_FILE_POST,
  SET_CONTENT_POST,
  SET_IS_POST_UPLOAD_MODAL,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function requestUpPost() {
  return {
    type: REQUEST_UP_POST,
  };
}

export function removeImagePost() {
  return {
    type: REMOVE_IMAGE_POST,
  };
}

export function removeImagePreview(imageKeyPost) {
  return {
    type: REMOVE_IMAGE_PREVIEW,
    imageKeyPost,
  };
}

export function removeVideoPreview() {
  return {
    type: REMOVE_VIDEO_PREVIEW,
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

export function setImagePost(imagePost) {
  return {
    type: SET_IMAGE_POST,
    imagePost,
  };
}

export function setVideoPost(videoPost) {
  return {
    type: SET_VIDEO_POST,
    videoPost,
  };
}

export function requestFilePost(filePost) {
  return {
    type: REQUEST_FILE_POST,
    filePost,
  };
}

export function setContentPost(contentPost) {
  return {
    type: SET_CONTENT_POST,
    contentPost,
  };
}

export function setIsPostUploadModal() {
  return {
    type: SET_IS_POST_UPLOAD_MODAL,
  };
}

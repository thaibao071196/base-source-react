/*
 *
 * BoxEdit actions
 *
 */

import {
  DEFAULT_ACTION,
  REQUEST_EDIT_POST,
  SET_IS_POST_EDIT,
  SET_ID_POST_EDIT,
  SET_VIDEO_POST_EDIT,
  SET_CONTENT_POST_EDIT,
  SET_IMAGES_POST_EDIT,
  REMOVE_IMAGE_POST_EDIT,
  REMOVE_VIDEO_POST_EDIT,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function requestEditPost({
  idPostEdit,
  contentPost,
  videoPost,
  imagePosts,
}) {
  return {
    type: REQUEST_EDIT_POST,
    idPostEdit,
    contentPost,
    videoPost,
    imagePosts,
  };
}

export function setIsPostEdit(bool) {
  return {
    type: SET_IS_POST_EDIT,
    bool,
  };
}

export function setIdPostEdit(idPostEdit) {
  return {
    type: SET_ID_POST_EDIT,
    idPostEdit,
  };
}

export function setContentPostEdit(contentPost) {
  return {
    type: SET_CONTENT_POST_EDIT,
    contentPost,
  };
}

export function setImagesPostEdit(imagePosts) {
  return {
    type: SET_IMAGES_POST_EDIT,
    imagePosts,
  };
}

export function setVideoPostEdit(videoPost) {
  return {
    type: SET_VIDEO_POST_EDIT,
    videoPost,
  };
}

export function removeImagePostEdit({ imageKey }) {
  return {
    type: REMOVE_IMAGE_POST_EDIT,
    imageKey,
  };
}

export function removeVideoPostEdit() {
  return {
    type: REMOVE_VIDEO_POST_EDIT,
  };
}

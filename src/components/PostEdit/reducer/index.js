/*
 *
 * BoxEdit reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  SET_IS_POST_EDIT,
  SET_ID_POST_EDIT,
  SET_CONTENT_POST_EDIT,
  SET_VIDEO_POST_EDIT,
  SET_IMAGES_POST_EDIT,
  REMOVE_IMAGE_POST_EDIT,
  REMOVE_VIDEO_POST_EDIT,
} from '../constants';

export const initialState = {
  isPostEdit: false,
  idPostEdit: null,
  contentPost: '',
  imagePosts: [],
  videoPost: {},
};

/* eslint-disable default-case, no-param-reassign */
const boxEditReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case SET_ID_POST_EDIT:
        draft.idDisplayPostEdit = action.idPostEdit;
        break;
      case SET_IS_POST_EDIT:
        draft.isPostEdit = action.bool;
        break;
      case SET_CONTENT_POST_EDIT:
        draft.contentPost = action.contentPost;
        break;
      case SET_VIDEO_POST_EDIT:
        draft.videoPost = action.videoPost;
        break;
      case SET_IMAGES_POST_EDIT:
        draft.imagePosts = action.imagePosts;
        break;
      case REMOVE_IMAGE_POST_EDIT:
        draft.imagePosts = draft.imagePosts.filter(
          (image, imageKey) => imageKey !== action.imageKey,
        );
        break;
      case REMOVE_VIDEO_POST_EDIT:
        draft.videoPost = {};
        break;
    }
  });

export default boxEditReducer;

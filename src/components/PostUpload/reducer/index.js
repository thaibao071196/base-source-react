/*
 *
 * UpPost reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  REMOVE_IMAGE_POST,
  REMOVE_IMAGE_PREVIEW,
  REMOVE_VIDEO_PREVIEW,
  SET_IS_LOADING,
  SET_IMAGE_POST,
  SET_VIDEO_POST,
  SET_CONTENT_POST,
  SET_IS_POST_UPLOAD_MODAL,
} from '../constants';

export const initialState = {
  imagePosts: [],
  videoPost: '',
  isLoading: false,
  contentPost: '',
  isPostUploadModal: false,
};

/* eslint-disable default-case, no-param-reassign */
const upPostReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case SET_IS_LOADING:
        draft.isLoading = action.isLoading;
        break;
      case REMOVE_IMAGE_POST:
        draft.imagePosts = [];
        break;
      case REMOVE_IMAGE_PREVIEW:
        draft.imagePosts = draft.imagePosts.filter(
          (image, imageKey) => imageKey !== action.imageKeyPost,
        );
        break;
      case REMOVE_VIDEO_PREVIEW:
        draft.videoPost = '';
        break;
      case SET_IMAGE_POST:
        draft.imagePosts.push(action.imagePost);
        break;
      case SET_VIDEO_POST:
        draft.videoPost = action.videoPost;
        break;
      case SET_CONTENT_POST:
        draft.contentPost = action.contentPost;
        break;
      case SET_IS_POST_UPLOAD_MODAL:
        draft.isPostUploadModal = !draft.isPostUploadModal;
    }
  });

export default upPostReducer;

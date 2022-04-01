/*
 *
 * HomePage reducer
 *
 */
/* eslint no-underscore-dangle: 0 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  SET_IS_LOADING,
  SET_POSTS,
  SET_PAGE,
  SET_POST_BY_ID,
} from '../constants';

export const initialState = {
  repos: [],
  posts: [],
  isLoading: false,
  page: 1,
  isDisplayPostMenu: false,
  idDisplayPostMenu: null,
};
/* eslint-disable default-case, no-param-reassign */
const homePageReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_POSTS:
        draft.posts = [...draft.posts, ...action.posts];
        break;
      case SET_PAGE:
        draft.page += 1;
        break;
      case SET_IS_LOADING:
        draft.isLoading = action.isLoading;
        break;
      case SET_POST_BY_ID:
        draft.postGetById = action.post;
        break;
    }
  });

export default homePageReducer;

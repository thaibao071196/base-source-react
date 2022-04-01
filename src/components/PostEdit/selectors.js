import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the boxEdit state domain
 */

const selectState = (state) => state.boxEdit || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by BoxEdit
 */

export const makeSelectBoxEdit = () =>
  createSelector(selectState, (state) => state);

export const makeSelectIsPostEdit = () =>
  createSelector(selectState, (state) => state.isPostEdit);

export const makeSelectIdPostEdit = () =>
  createSelector(selectState, (state) => state.idPostEdit);

export const makeSelectContentPost = () =>
  createSelector(selectState, (state) => state.contentPost);

export const makeSelectVideoPost = () =>
  createSelector(selectState, (state) => state.videoPost);

export const makeSelectImagePosts = () =>
  createSelector(selectState, (state) => state.imagePosts);

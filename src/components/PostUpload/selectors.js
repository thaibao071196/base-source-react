import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the upPost state domain
 */

const selectState = (state) => state.upPost || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by UpPost
 */

export const makeSelectUpPost = () =>
  createSelector(selectState, (state) => state);

export const makeSelectImagePost = () =>
  createSelector(selectState, (state) => state.imagePosts);

export const makeSelectVideoPost = () =>
  createSelector(selectState, (state) => state.videoPost);

export const makeSelectIsLoading = () =>
  createSelector(selectState, (state) => state.isLoading);

export const makeSelectContentPost = () =>
  createSelector(selectState, (state) => state.contentPost);

export const makeSelectIsPostUploadModal = () =>
  createSelector(selectState, (state) => state.isPostUploadModal);

import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the homePage state domain
 */

const selectState = (state) => state.homePage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by HomePage
 */

export const makeSelectHomePage = () =>
  createSelector(selectState, (state) => state);

export const makeSelectIsLoading = () =>
  createSelector(selectState, (state) => state.isLoading);

export const makeSelectPosts = () =>
  createSelector(selectState, (state) => state.posts);

export const makeSelectPage = () =>
  createSelector(selectState, (state) => state.page);

export const makeSelectBoxContent = () =>
  createSelector(selectState, (state) => state.content);

export const makeSelectPostGetById = () =>
  createSelector(selectState, (state) => state.postGetById);

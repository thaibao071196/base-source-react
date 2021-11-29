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

export const makeSelectRepos = () =>
  createSelector(selectState, (state) => state.repos);

import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the postItem state domain
 */

const selectState = (state) => state.postItem || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by PostItem
 */

export const makeSelectPostItem = () =>
  createSelector(selectState, (state) => state);

export const makeSelectIsPostMenu = () =>
  createSelector(selectState, (state) => state.isPostMenu);

export const makeSelectIdPostMenu = () =>
  createSelector(selectState, (state) => state.idPostMenu);

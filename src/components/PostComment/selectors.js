import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the boxComment state domain
 */

const selectState = (state) => state.postComment || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by BoxComment
 */

export const makeSelectBoxComment = () =>
  createSelector(selectState, (state) => state);

export const makeSelectIsPostComment = () =>
  createSelector(selectState, (state) => state.isPostComment);

export const makeSelectIdPostComment = () =>
  createSelector(selectState, (state) => state.idPostComment);

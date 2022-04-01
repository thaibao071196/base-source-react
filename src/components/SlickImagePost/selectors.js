import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the slickImagePost state domain
 */

const selectState = (state) => state.slickImagePost || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by SlickImagePost
 */

export const makeSelectSlickImagePost = () =>
  createSelector(selectState, (state) => state);

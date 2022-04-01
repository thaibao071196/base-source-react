import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the listFile state domain
 */

const selectState = (state) => state.listFile || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ListFile
 */

export const makeSelectListFile = () =>
  createSelector(selectState, (state) => state);

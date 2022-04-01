import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the baseInputFile state domain
 */

const selectState = (state) => state.baseInputFile || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by BaseInputFile
 */

export const makeSelectBaseInputFile = () =>
  createSelector(selectState, (state) => state);

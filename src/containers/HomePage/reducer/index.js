/*
 *
 * HomePage reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, SET_IS_LOADING, SET_REPOS } from '../constants';

export const initialState = {
  repos: [],
  isLoading: false,
};

/* eslint-disable default-case, no-param-reassign */
const homePageReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_IS_LOADING:
        draft.isLoading = action.isLoading;
        break;
      case SET_REPOS:
        draft.repos = action.payload;
        break;
    }
  });

export default homePageReducer;

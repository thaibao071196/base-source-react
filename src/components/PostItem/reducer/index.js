/*
 *
 * PostItem reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  SET_IS_POST_MENU,
  SET_ID_POST_MENU,
} from '../constants';

export const initialState = {
  isPostMenu: false,
  idPostMenu: null,
};

/* eslint-disable default-case, no-param-reassign */
const postItemReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case SET_IS_POST_MENU:
        draft.isPostMenu = !draft.isPostMenu;
        break;
      case SET_ID_POST_MENU:
        draft.idPostMenu = action.idPostMenu;
        break;
    }
  });

export default postItemReducer;

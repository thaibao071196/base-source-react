/*
 *
 * BoxComment reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  SET_IS_POST_COMMENT,
  SET_ID_POST_COMMENT,
} from '../constants';

export const initialState = { isPostComment: false, idPostComment: null };

/* eslint-disable default-case, no-param-reassign */
const postCommentReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case SET_IS_POST_COMMENT:
        draft.isPostComment = action.isPostComment;
        break;
      case SET_ID_POST_COMMENT:
        draft.idPostComment = action.idPostComment;
        break;
    }
  });

export default postCommentReducer;

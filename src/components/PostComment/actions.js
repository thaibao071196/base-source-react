/*
 *
 * BoxComment actions
 *
 */

import {
  DEFAULT_ACTION,
  SET_IS_POST_COMMENT,
  SET_ID_POST_COMMENT,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function setIsPostComment(isPostComment) {
  return {
    type: SET_IS_POST_COMMENT,
    isPostComment,
  };
}

export function setIdPostComment(idPostComment) {
  return {
    type: SET_ID_POST_COMMENT,
    idPostComment,
  };
}

/*
 *
 * PostItem actions
 *
 */

import {
  DEFAULT_ACTION,
  SET_IS_POST_MENU,
  SET_ID_POST_MENU,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function setIsPostMenu() {
  return {
    type: SET_IS_POST_MENU,
  };
}

export function setIdPostMenu(idPostMenu) {
  return {
    type: SET_ID_POST_MENU,
    idPostMenu,
  };
}

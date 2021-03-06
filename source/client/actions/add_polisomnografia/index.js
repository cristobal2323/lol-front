import {
  FETCH_LIST_POLISOMNOGRAFIA_INFO_INIT,
  FETCH_LIST_POLISOMNOGRAFIA_INFO_SUCCESS,
  FETCH_LIST_POLISOMNOGRAFIA_INFO_FAILURE,
  RESET_LIST_POLISOMNOGRAFIA_INFO
} from "./types";
import API from "./api";

/* Config setting */
export function resetAddPolisomnografia() {
  return {
    type: RESET_LIST_POLISOMNOGRAFIA_INFO
  };
}

/* Fetch */

function fetchApiSuccess(data) {
  return {
    type: FETCH_LIST_POLISOMNOGRAFIA_INFO_SUCCESS,
    payload: data
  };
}

function fetchApiFailure(error) {
  return {
    type: FETCH_LIST_POLISOMNOGRAFIA_INFO_FAILURE
  };
}

function fetchApiInit() {
  return {
    type: FETCH_LIST_POLISOMNOGRAFIA_INFO_INIT
  };
}

export function fetchPolisomnografiaInfoApi(data) {
  return async dispatch => {
    dispatch(fetchApiInit());
    try {
      const resp = await API.data.getInfo(data);
      return dispatch(fetchApiSuccess(resp));
    } catch (error) {
      return dispatch(fetchApiFailure(error));
    }
  };
}

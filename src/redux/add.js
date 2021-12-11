/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */
import {
  GET_ALL_ADDS_SUCCESS,
  GET_ALL_ADDS_FAIL,
  GET_SINGLE_ADD_SUCCESS,
  GET_SINGLE_ADD_FAIL,
} from "../actions/types";

const initialState = {
  adds: [],
  add: {},
  addLoading: true,
  singleAddLoading: true,
  addError: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_ADDS_SUCCESS:
      return {
        ...state,
        adds: payload,
        addLoading: false,
        add: null,
        singleAddLoading: true,
      };
    case GET_ALL_ADDS_FAIL:
    case GET_SINGLE_ADD_FAIL:
      return {
        ...state,
        addError: payload,
        addLoading: false,
      };
    case GET_SINGLE_ADD_SUCCESS:
      return {
        ...state,
        add: payload,
        singleAddLoading: false,
      };
    default:
      return state;
  }
}

import axios from "axios";
import {
  GET_ALL_ADDS_FAIL,
  GET_ALL_ADDS_SUCCESS,
  GET_SINGLE_ADD_SUCCESS,
  GET_SINGLE_ADD_FAIL,
  port,
} from "./types";

export const getAllAdds = () => async (dispatch) => {
  try {
    const res = await axios.get(`${port}/adds`);
    dispatch({
      type: GET_ALL_ADDS_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_ADDS_FAIL,
      payload: error.msg,
    });
  }
};

export const getSingleAdd = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${port}/add/${id}`);
    dispatch({
      type: GET_SINGLE_ADD_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_SINGLE_ADD_FAIL,
      payload: error.msg,
    });
  }
};

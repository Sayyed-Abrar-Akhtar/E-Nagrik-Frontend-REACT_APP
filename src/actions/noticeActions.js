import axios from 'axios';

import {
  ALL_NOTICES_FETCH_FAIL,
  ALL_NOTICES_FETCH_REQUEST,
  ALL_NOTICES_FETCH_SUCCESS,
  NOTICES_FETCH_FAIL,
  NOTICES_FETCH_REQUEST,
  NOTICES_FETCH_SUCCESS,
} from '../constants/noticeConstants';

export const getNotices = () => async (dispatch) => {
  try {
    dispatch({ type: NOTICES_FETCH_REQUEST });

    const {
      data: { notices },
    } = await axios.get(`https://e-nagrik-api.herokuapp.com/api/notice`);

    dispatch({ type: NOTICES_FETCH_SUCCESS, payload: notices });
  } catch (error) {
    dispatch({
      type: NOTICES_FETCH_FAIL,
      payload:
        error.response && error.response.data.mesage
          ? error.response.data.mesage
          : error.message,
    });
  }
};

export const getAllNotices = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_NOTICES_FETCH_REQUEST });

    const {
      data: { notices },
    } = await axios.get(`https://e-nagrik-api.herokuapp.com/api/notice/all`);

    dispatch({ type: ALL_NOTICES_FETCH_SUCCESS, payload: notices });
  } catch (error) {
    dispatch({
      type: ALL_NOTICES_FETCH_FAIL,
      payload:
        error.response && error.response.data.mesage
          ? error.response.data.mesage
          : error.message,
    });
  }
};

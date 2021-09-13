import axios from 'axios';

import {
  CITIZEN_LOGIN_FAIL,
  CITIZEN_LOGIN_REQUEST,
  CITIZEN_LOGIN_SUCCESS,
  CITIZEN_POST_FAIL,
  CITIZEN_POST_REQUEST,
  CITIZEN_POST_SUCCESS,
} from '../constants/citizenConstants';

export const saveCitizen = (citizenObj) => async (dispatch) => {
  try {
    dispatch({ type: CITIZEN_POST_REQUEST });

    const { data } = await axios.post(
      `https://e-nagrik-api.herokuapp.com/api/citizen`,
      citizenObj
    );

    dispatch({ type: CITIZEN_POST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CITIZEN_POST_FAIL,
      payload:
        error.response && error.response.data.mesage
          ? error.response.data.mesage
          : error.message,
    });
  }
};

export const citizenAuthorisation =
  (citizenCredentials) => async (dispatch) => {
    try {
      dispatch({ type: CITIZEN_LOGIN_REQUEST });

      const { data } = await axios.post(
        `https://e-nagrik-api.herokuapp.com/api/citizen/auth`,
        citizenCredentials
      );

      dispatch({ type: CITIZEN_LOGIN_SUCCESS, payload: data });
      localStorage.setItem(
        'citizenCredentials',
        JSON.stringify({ success: true, citizenData: data.citizenData })
      );
    } catch (error) {
      dispatch({
        type: CITIZEN_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

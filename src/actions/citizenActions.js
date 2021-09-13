import axios from 'axios';

import {
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

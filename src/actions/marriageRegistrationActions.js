import axios from 'axios';

import {
  MARRIAGE_REGISTRATION_FAIL,
  MARRIAGE_REGISTRATION_REQUEST,
  MARRIAGE_REGISTRATION_SUCCESS,
} from '../constants/marriageRegistrationConstants';

export const saveMarriage = (marriageObj) => async (dispatch) => {
  try {
    dispatch({ type: MARRIAGE_REGISTRATION_REQUEST });

    const { data } = await axios.post(
      'https://e-nagrik-api.herokuapp.com/api/marriage-record',
      marriageObj
    );

    dispatch({ type: MARRIAGE_REGISTRATION_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: MARRIAGE_REGISTRATION_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

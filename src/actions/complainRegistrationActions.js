import axios from 'axios';

import {
  COMPLAIN_REGISTRATION_FAIL,
  COMPLAIN_REGISTRATION_REQUEST,
  COMPLAIN_REGISTRATION_SUCCESS,
} from '../constants/complainRegistrationConstants';

export const saveComplain = (complainObj) => async (dispatch) => {
  try {
    dispatch({ type: COMPLAIN_REGISTRATION_REQUEST });

    const { data } = await axios.post(
      'https://e-nagrik-api.herokuapp.com/api/complain-record/',
      complainObj
    );

    dispatch({ type: COMPLAIN_REGISTRATION_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: COMPLAIN_REGISTRATION_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

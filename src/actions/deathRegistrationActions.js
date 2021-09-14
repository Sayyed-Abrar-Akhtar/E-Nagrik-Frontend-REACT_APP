import axios from 'axios';

import {
  DEATH_REGISTRATION_FAIL,
  DEATH_REGISTRATION_REQUEST,
  DEATH_REGISTRATION_SUCCESS,
} from '../constants/deathRegistrationConstants';

export const saveDeath = (deathObj) => async (dispatch) => {
  try {
    dispatch({ type: DEATH_REGISTRATION_REQUEST });

    const { data } = await axios.post(
      'https://e-nagrik-api.herokuapp.com/api/death-record/',
      deathObj
    );

    dispatch({ type: DEATH_REGISTRATION_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: DEATH_REGISTRATION_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

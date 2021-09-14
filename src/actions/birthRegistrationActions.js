import axios from 'axios';
import {
  BIRTH_REGISTRATION_FAIL,
  BIRTH_REGISTRATION_REQUEST,
  BIRTH_REGISTRATION_SUCCESS,
} from '../constants/birthRegistrationConstants';

export const saveBirth = (birthObj) => async (dispatch) => {
  try {
    dispatch({ type: BIRTH_REGISTRATION_REQUEST });

    const { data } = await axios.post(
      'https://e-nagrik-api.herokuapp.com/api/birth-record',
      birthObj
    );

    dispatch({ type: BIRTH_REGISTRATION_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: BIRTH_REGISTRATION_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

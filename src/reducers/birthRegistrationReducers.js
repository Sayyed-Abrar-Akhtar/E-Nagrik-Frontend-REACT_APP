import {
  BIRTH_REGISTRATION_FAIL,
  BIRTH_REGISTRATION_REQUEST,
  BIRTH_REGISTRATION_RESET,
  BIRTH_REGISTRATION_SUCCESS,
} from '../constants/birthRegistrationConstants';

export const savedBirthReducer = (state = { birthData: {} }, action) => {
  switch (action.type) {
    case BIRTH_REGISTRATION_REQUEST:
      return { loading: true };
    case BIRTH_REGISTRATION_SUCCESS:
      return { loading: false, success: true, birthData: action.payload };
    case BIRTH_REGISTRATION_FAIL:
      return { loading: false, error: action.payload };
    case BIRTH_REGISTRATION_RESET:
      return { loading: false, success: false, birthData: {} };
    default:
      return state;
  }
};

import {
  COMPLAIN_REGISTRATION_FAIL,
  COMPLAIN_REGISTRATION_REQUEST,
  COMPLAIN_REGISTRATION_RESET,
  COMPLAIN_REGISTRATION_SUCCESS,
} from '../constants/complainRegistrationConstants';

export const savedComplainReducer = (state = { complainData: {} }, action) => {
  switch (action.type) {
    case COMPLAIN_REGISTRATION_REQUEST:
      return { loading: true };
    case COMPLAIN_REGISTRATION_SUCCESS:
      return { loading: false, success: true, complainData: action.payload };
    case COMPLAIN_REGISTRATION_FAIL:
      return { loading: false, error: action.payload };
    case COMPLAIN_REGISTRATION_RESET:
      return { loading: false, success: false, complainData: {} };
    default:
      return state;
  }
};

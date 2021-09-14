import {
  MARRIAGE_REGISTRATION_FAIL,
  MARRIAGE_REGISTRATION_REQUEST,
  MARRIAGE_REGISTRATION_RESET,
  MARRIAGE_REGISTRATION_SUCCESS,
} from '../constants/marriageRegistrationConstants';

export const savedMarriageReducer = (state = { marriageData: {} }, action) => {
  switch (action.type) {
    case MARRIAGE_REGISTRATION_REQUEST:
      return { loading: true };
    case MARRIAGE_REGISTRATION_SUCCESS:
      return { loading: false, success: true, marriageData: action.payload };
    case MARRIAGE_REGISTRATION_FAIL:
      return { loading: false, error: action.payload };
    case MARRIAGE_REGISTRATION_RESET:
      return { loading: false, success: false, marriageData: {} };
    default:
      return state;
  }
};

import {
  DEATH_REGISTRATION_FAIL,
  DEATH_REGISTRATION_REQUEST,
  DEATH_REGISTRATION_RESET,
  DEATH_REGISTRATION_SUCCESS,
} from '../constants/deathRegistrationConstants';

export const savedDeathReducer = (state = { deathData: {} }, action) => {
  switch (action.type) {
    case DEATH_REGISTRATION_REQUEST:
      return { loading: true };
    case DEATH_REGISTRATION_SUCCESS:
      return { loading: false, success: true, deathData: action.payload };
    case DEATH_REGISTRATION_FAIL:
      return { loading: false, error: action.payload };
    case DEATH_REGISTRATION_RESET:
      return { loading: false, success: false, deathData: {} };
    default:
      return state;
  }
};

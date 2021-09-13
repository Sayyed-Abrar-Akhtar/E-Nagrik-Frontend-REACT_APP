import {
  CITIZEN_POST_FAIL,
  CITIZEN_POST_REQUEST,
  CITIZEN_POST_RESET,
  CITIZEN_POST_SUCCESS,
} from '../constants/citizenConstants';

export const newCitizenReducer = (state = { citizenData: {} }, action) => {
  switch (action.type) {
    case CITIZEN_POST_REQUEST:
      return { loading: true };
    case CITIZEN_POST_SUCCESS:
      return { loading: false, citizenData: action.payload, success: true };
    case CITIZEN_POST_FAIL:
      return { loading: false, error: action.payload };
    case CITIZEN_POST_RESET:
      return { loading: false, success: false };
    default:
      return state;
  }
};

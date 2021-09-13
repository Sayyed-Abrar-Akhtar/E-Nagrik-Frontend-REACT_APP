import {
  ALL_NOTICES_FETCH_FAIL,
  ALL_NOTICES_FETCH_REQUEST,
  ALL_NOTICES_FETCH_SUCCESS,
  NOTICES_FETCH_FAIL,
  NOTICES_FETCH_REQUEST,
  NOTICES_FETCH_SUCCESS,
} from '../constants/noticeConstants';

export const getNoticesReducer = (state = { notices: [] }, action) => {
  switch (action.type) {
    case NOTICES_FETCH_REQUEST:
      return { loading: true };
    case NOTICES_FETCH_SUCCESS:
      return { loading: false, notices: action.payload };
    case NOTICES_FETCH_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getAllNoticesReducer = (state = { allNotices: [] }, action) => {
  switch (action.type) {
    case ALL_NOTICES_FETCH_REQUEST:
      return { loading: true };
    case ALL_NOTICES_FETCH_SUCCESS:
      return { loading: false, allNotices: action.payload };
    case ALL_NOTICES_FETCH_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

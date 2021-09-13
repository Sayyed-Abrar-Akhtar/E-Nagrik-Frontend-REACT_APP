import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  getAllNoticesReducer,
  getNoticesReducer,
} from './reducers/noticeReducers';
import {
  authorisedCitizenReducer,
  newCitizenReducer,
} from './reducers/citizenReducers';

const reducer = combineReducers({
  getNotices: getNoticesReducer,
  getAllNotices: getAllNoticesReducer,
  newCitizen: newCitizenReducer,
  authorisedCitizen: authorisedCitizenReducer,
});

const citizenCredentialsFromStorage = localStorage.getItem('citizenCredentials')
  ? JSON.parse(localStorage.getItem('citizenCredentials'))
  : {};

const initialState = {
  getNotices: { notices: ['new notice!!', 'important notice!!'] },
  getAllNotices: { allNotices: ['new notice!!', 'important notice!!'] },
  newCitizen: { citizenData: {} },
  authorisedCitizen: {
    success: citizenCredentialsFromStorage.success || false,
    citizenData: citizenCredentialsFromStorage.citizenData || {},
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

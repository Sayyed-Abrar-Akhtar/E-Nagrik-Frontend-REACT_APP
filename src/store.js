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
import { savedBirthReducer } from './reducers/birthRegistrationReducers';
import { savedDeathReducer } from './reducers/deathRegistrationReducers';
import { savedMarriageReducer } from './reducers/marriageRegistrationReducers';
import { savedComplainReducer } from './reducers/complainRegistrationReducers';

const reducer = combineReducers({
  getNotices: getNoticesReducer,
  getAllNotices: getAllNoticesReducer,
  newCitizen: newCitizenReducer,
  authorisedCitizen: authorisedCitizenReducer,
  savedBirth: savedBirthReducer,
  savedDeath: savedDeathReducer,
  savedMarriage: savedMarriageReducer,
  savedComplain: savedComplainReducer,
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
  savedBirth: { birthData: {} },
  savedDeath: { deathData: {} },
  savedMarriage: { marriageData: {} },
  savedComplain: { complainData: {} },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

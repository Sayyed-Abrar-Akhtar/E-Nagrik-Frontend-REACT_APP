import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getNoticesReducer } from './reducers/noticeReducers';
import { newCitizenReducer } from './reducers/citizenReducers';

const reducer = combineReducers({
  getNotices: getNoticesReducer,
  newCitizen: newCitizenReducer,
});

const initialState = {
  getNotices: { notices: ['new notice!!', 'important notice!!'] },
  newCitizen: { citizenData: {} },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

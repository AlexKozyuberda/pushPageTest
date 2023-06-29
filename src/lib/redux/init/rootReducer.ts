import { combineReducers } from 'redux';
import { pushReducer as pushData } from '../reducers';

export const rootReducer = combineReducers({
  pushData,
});

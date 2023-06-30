import { combineReducers } from 'redux';
import { pushReducer as pushData, uiReducer as ui } from '../reducers';

export const rootReducer = combineReducers({
  pushData,
  ui,
});

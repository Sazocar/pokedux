import { combineReducers } from 'redux';
import dataSlice from '../slices/dataSlice';

const rootReducer = combineReducers({
  data: dataSlice,
});

export { rootReducer };

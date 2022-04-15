import { combineReducers } from 'redux';
import sampleReducer from './sampleReducer';
import sampleDetailsReducer from './sampleDetailsReducer';

export default combineReducers({
  sampleData: sampleReducer,
  sampleDetails: sampleDetailsReducer,
});

import { combineReducers } from 'redux';
import hospitalReducer from './hospital/reducer';

const allreducers = combineReducers({ hospitalReducer });

export default allreducers;

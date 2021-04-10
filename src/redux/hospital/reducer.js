import { SET_EMPLOYEES, SET_WORKLOG, SET_IS_LOADING } from './types';

const initialState = {
  employees: [],
  worklogs: [],
  isLoading: false
};

const hospitalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_LOADING: {
      return { ...state, isLoading: true };
    }
    case SET_EMPLOYEES: {
      return { ...state, employees: action.payload, isLoading: false };
    }
    case SET_WORKLOG: {
      return { ...state, worklogs: action.payload, isLoading: false };
    }
    default:
      return state;
  }
};

export default hospitalReducer;

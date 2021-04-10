import { SET_EMPLOYEES, SET_WORKLOG, SET_IS_LOADING } from './types';

export const setEmployees = (data) => ({ type: SET_EMPLOYEES, payload: data });
export const setWorklogs = (data) => ({ type: SET_WORKLOG, payload: data });
export const setIsLoading = () => ({ type: SET_IS_LOADING });

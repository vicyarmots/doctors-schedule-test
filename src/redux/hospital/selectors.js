import { isPermittedTimeExit } from 'utils';
import { MIN_DOCTORS_ON_WORKS } from 'constants/index';

export const getEmployees = (store) => store.hospitalReducer.employees;
export const getIsLoading = (store) => store.hospitalReducer.isLoading;

export const getWorklogByEmployerId = (id) => (store) => {
  const filteredLogs = store.hospitalReducer.worklogs.filter((worklog) => {
    return Number(id) === worklog.employee_id;
  });

  return filteredLogs.map((log) => ({
    ...log,
    isPermittedTimeExit: isPermittedTimeExit(
      Number(id),
      log.to,
      store.hospitalReducer.worklogs,
      MIN_DOCTORS_ON_WORKS
    )
  }));
};

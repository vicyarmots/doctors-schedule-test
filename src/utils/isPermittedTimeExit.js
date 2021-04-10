import { isBetweenDates } from 'utils';

export const isPermittedTimeExit = (
  employeeId,
  date,
  worklog,
  minDoctorsnInWork
) => {
  const result = [];

  const worklogs = worklog.filter((item) => item.employee_id !== employeeId);

  worklogs.map(
    (item) =>
      isBetweenDates(date, item.from, item.to) &&
      !result.includes(item.employee_id) &&
      result.push(item.employee_id)
  );

  return result.length >= minDoctorsnInWork;
};

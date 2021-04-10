//api
import { getEmployees, getWorklog } from 'api';

//actions
import { setEmployees, setIsLoading, setWorklogs } from './actions';

//utils
import { formatDate } from 'utils';

export const requestEmployees = () => async (dispatch) => {
  try {
    dispatch(setIsLoading());

    const employees = await getEmployees();

    const sortedEmployees = employees
      .map((item) => {
        return {
          ...item,
          fullName: `${item.lastName} ${item.firstName} ${item.middleName}`,
          birthDate: formatDate(item.birthDate)
        };
      })
      .sort((a, b) => (a.fullName > b.fullName ? 1 : -1));

    dispatch(setEmployees(sortedEmployees));
  } catch (error) {
    console.log(error);
  }
};

export const requestWorklog = () => async (dispatch) => {
  try {
    dispatch(setIsLoading());

    const worklogs = await getWorklog();

    dispatch(setWorklogs(worklogs));
  } catch (error) {
    console.log(error);
  }
};

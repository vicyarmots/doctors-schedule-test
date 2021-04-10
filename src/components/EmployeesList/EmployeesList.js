//libs
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//components
import { EmployerItem } from 'components';

//thunks
import { requestEmployees } from 'redux/hospital/thunks';

//thunks
import { getEmployees, getIsLoading } from 'redux/hospital/selectors';

//styles
import styles from './EmployeesList.module.css';

const EmployeesList = () => {
  const dispatch = useDispatch();
  const employees = useSelector(getEmployees);
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    if (employees.length === 0) {
      dispatch(requestEmployees());
    }
  }, [dispatch, employees]);

  return (
    <div className={styles.content}>
      {employees.length === 0 && isLoading && (
        <div className={styles.loader}>Loading...</div>
      )}
      {employees.length > 0 &&
        employees.map((employer) => (
          <EmployerItem key={employer.id} {...employer} />
        ))}
    </div>
  );
};

export default EmployeesList;

//libs
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

//components
import { ScheduleRow } from 'components';

//thunks
import { requestWorklog } from 'redux/hospital/thunks';

//selectors
import { getWorklogByEmployerId, getIsLoading } from 'redux/hospital/selectors';

import styles from './EmployerSchedule.module.css';

const EmployerSchedule = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const isLoading = useSelector(getIsLoading);

  const worklogsByEmployerId = useSelector(getWorklogByEmployerId(id));

  useEffect(() => {
    dispatch(requestWorklog());
  }, [dispatch]);

  return (
    <div>
      {worklogsByEmployerId.length === 0 && isLoading && (
        <div className={styles.loader}>Loading...</div>
      )}
      {worklogsByEmployerId.length > 0 &&
        worklogsByEmployerId.map((row) => (
          <ScheduleRow key={row.id} {...row} />
        ))}
    </div>
  );
};

export default EmployerSchedule;

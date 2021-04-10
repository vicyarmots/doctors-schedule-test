//libs
import React, { memo } from 'react';
import PropTypes from 'prop-types';

//utils
import { formatDate } from 'utils';

//styles
import styles from './ScheduleRow.module.css';

const ScheduleRow = ({ from, to, isPermittedTimeExit }) => {
  return (
    <div
      className={`${styles.row} ${isPermittedTimeExit ? '' : styles.errorRow}`}
    >
      <span>{formatDate(from)}</span>
      <span>&nbsp;-&nbsp;</span>
      <span>{formatDate(to)}</span>
    </div>
  );
};

ScheduleRow.propTypes = {
  from: PropTypes.string,
  to: PropTypes.string,
  isPermittedTimeExit: PropTypes.bool
};

export default memo(ScheduleRow);

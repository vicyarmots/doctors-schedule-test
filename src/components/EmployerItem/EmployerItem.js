//libs
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//styles
import styles from './EmployerItem.module.css';

const EmployerItem = ({ id, fullName, birthDate, phone }) => {
  return (
    <div className={styles.employer}>
      <Link to={`/employee/${id}`}>{fullName}</Link>
      <span>{birthDate}</span>
      <span>{phone}</span>
    </div>
  );
};

EmployerItem.propTypes = {
  id: PropTypes.number,
  fullName: PropTypes.string,
  birthDate: PropTypes.string,
  phone: PropTypes.string
};

export default memo(EmployerItem);

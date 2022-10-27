import CircularProgress from '@mui/material/CircularProgress';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './loader.module.css';

function LoaderComponent(props) {
  return (
    <div className={styles.container}>
      <CircularProgress {...props} />
    </div>
  );
}

const colorProps = ['primary', 'secondary', 'error', 'info', 'success', 'warning', 'inherit'];

LoaderComponent.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.oneOf(colorProps).isRequired,
};

LoaderComponent.defaultProps = {
  size: 60,
  color: 'primary',
};

export default LoaderComponent;

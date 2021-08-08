import React from 'react';
import PropTypes from '../../utils/PropTypes';
import * as styles from './Thumb.module.css';

const Thumb = ({ src }) => (
  <div className={styles.thumb} style={{ backgroundImage: `url(${src})` }} />
);

Thumb.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Thumb;

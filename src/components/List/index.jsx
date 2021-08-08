import classnames from 'classnames';
import React from 'react';
import PropTypes from '../../utils/PropTypes';
import * as styles from './List.module.css';

const List = ({ children, className, type, color }) => (
  <ul className={classnames(
    className,
    styles.list,
    {
      [styles[type]]: type,
    },
  )}
  >
    {children}
  </ul>
);

List.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.oneOf(['arrow', 'check', 'bullet']),
};

List.defaultProps = {
  children: null,
  className: '',
  type: 'arrow',
};

const ListItem = ({ children, className }) => (
  <li className={className}>
    {children}
  </li>
);

ListItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

ListItem.defaultProps = {
  children: null,
  className: null,
};

List.Item = ListItem;

export default List;

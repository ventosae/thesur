import classnames from 'classnames';
import * as React from 'react';
import * as styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className="py-4 px-4 bg-yellow-100 text-xs">
      <div className="container-md mx-auto">
        <div className="flex justify-between">
          <small>
            &copy; COPYRIGHT 2021 Anton Surov
          </small>
          <a href="/privacy">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

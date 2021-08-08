import classnames from 'classnames';
import * as React from 'react';
import Link from '../../components/Link';
import PropTypes from '../../utils/PropTypes';

const propTypes = {
  children: PropTypes.node,
  padding: PropTypes.oneOf(['', 'medium', 'small']),
  location: PropTypes.shape(PropTypes.object),
};

const defaultProps = {
  children: null,
  padding: '',
  location: {},
};

const Header = ({ children, padding, location }) => (
  <div className="bg-yellow-300 py-5 px-4">
    <div className="container-md mx-auto">
      <div>
          {location.pathname === '/' && (
              <span className="typo-h5 font-medium">
                  The Sur Space
              </span>
          )}
          {location.pathname != '/' && (
              <Link to="/" className="typo-h5">
                  Back to Base &#8617;
              </Link>
          )}
      </div>
      {children && (
          <div className={
            classnames(
              {
                'py-20 md:py-5': padding === '',
                'py-28': padding === 'medium',
                'py-12 md:py-28': padding === 'small',
              }
            )}
          >
              {children}
          </div>
      )}
      <div className="flex font-bold mt-5 justify-between md:justify-start text-sm md:text-base">
          <Link
              to="/appearances/"
              className="md:mr-6"
          >
              Appearances
          </Link>
          <Link
              to="/photography/"
              className="md:mr-6"
          >
              Photography
          </Link>
          <Link
              to="/contacts/"
          >
              Contacts
          </Link>
      </div>
    </div>
  </div>
);

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;

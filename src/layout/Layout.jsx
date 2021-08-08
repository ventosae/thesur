import * as React from 'react';
import Footer from './Footer';
import PropTypes from '../utils/PropTypes';

const propTypes = {
    children: PropTypes.node,
};

const defaultProps = {
    children: null,
};

const Layout = ({ children }) => (
    <>
        <div className="flex flex-col min-h-screen">
          <div className="flex-auto">
            {children}
          </div>
          <Footer />
        </div>
    </>
);

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;

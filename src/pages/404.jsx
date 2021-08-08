import * as React from 'react';
import Header from '../components/Header';

const NotFoundPage = ({ location }) => {
  return (
      <Header location={location}>
          404
      </Header>
  );
};

export default NotFoundPage;

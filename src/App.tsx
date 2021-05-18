import React from 'react';
import { useRoutes } from 'hookrouter';
import routes from './routes';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return useRoutes(routes) || <NotFoundPage />;
};

export default App;

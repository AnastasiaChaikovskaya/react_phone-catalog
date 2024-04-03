import { Outlet } from 'react-router-dom';
import './App.scss';
import { Header } from './modules/shared/Header/Header';

export const App = () => {
  return (
    <body className="page">
      <Header />
      <Outlet />
    </body>
  );
};

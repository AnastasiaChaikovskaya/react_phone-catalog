import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { App } from './App';
import { HomePage, AccessoriesPage, TabletsPage, PhonesPage } from './pages';
import { PUBLIC_ROUTS } from './contstants/routs';

export const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path={PUBLIC_ROUTS.HOME} element={<App />}>
          <Route index element={<HomePage />} />
          <Route path={PUBLIC_ROUTS.PHONES} element={<PhonesPage />} />
          <Route path={PUBLIC_ROUTS.TABLETS} element={<TabletsPage />} />
          <Route
            path={PUBLIC_ROUTS.ACCESSORIES}
            element={<AccessoriesPage />}
          />
        </Route>
      </Routes>
    </Router>
  );
};

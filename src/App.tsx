import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { routes } from './configs/routes';

export const App: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.element />} />
        ))}
      </Route>
    </Routes>
  );
};

import { useState } from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { store } from './store';

import { LayoutMainPage } from './components/layout-main-page';
import { Layout } from './components/layout/layout';
import { Login } from './pages/login/login';
import { privateRoutes } from './router';

export const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <Provider store={store}>
      <HashRouter>
        <Routes>
          {isAuth ? (
            <Route path='/' element={<Layout />}>
              <Route element={<LayoutMainPage />}>
                {privateRoutes.inLayout.map((route) => (
                  <Route path={route.path} element={route.element} index={route.index} key={route.path} />
                ))}
              </Route>

              {privateRoutes.outLayout.map((route) => (
                <Route path={route.path} element={route.element} index={route.index} key={route.path} />
              ))}
            </Route>
          ) : (
            <Route path='/' element={<Login />} />
          )}
        </Routes>
      </HashRouter>
    </Provider>
  );
};

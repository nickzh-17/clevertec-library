import { Provider } from 'react-redux';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { store } from './store';

import { AuthWrapper } from './components/auth-wrapper/auth-wrapper';
import { LayoutMainPage } from './components/layout-main-page';
import { Layout } from './components/layout/layout';
import { Authentication } from './pages/authentication/authentication';
import { BookPage } from './pages/book';
import { ForgotPassword } from './pages/forgot-password/forgot-password';
import { MainPage } from './pages/main';
import { Registration } from './pages/registration/registration';
import { Terms } from './pages/terms';

export const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  axios.defaults.baseURL = 'https://strapi.cleverland.by';

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      console.log('VOSHOOOL!');
      setIsAuth(true);
      // setUserName(localStorage.getItem('userName'));
    }
    // setIsLoading(false);
  }, []);

  return (
    <Provider store={store}>
      <HashRouter>
        {isAuth ? (
          <Routes>
            <Route path='/' element={<Layout isAuth={isAuth} setIsAuth={setIsAuth} />}>
              <Route element={<LayoutMainPage />}>
                <Route index={true} element={<Navigate to='books/all' />} />
                <Route path='/books/:category' element={<MainPage />} />
                <Route path='terms' element={<Terms contentView='terms' />} />
                <Route path='contract' element={<Terms contentView='contract' />} />
              </Route>
              <Route path='/books/:category/:bookId' element={<BookPage />} />
              <Route path='*' element={<Navigate to='/' />} />
            </Route>
          </Routes>
        ) : (
          <Routes>
            <Route path='/' element={<AuthWrapper />}>
              <Route index={true} element={<Navigate to='/auth' />} />
              <Route path='/auth' element={<Authentication setIsAuth={setIsAuth} />} />
              <Route path='/registration' element={<Registration />} />
              <Route path='/forgot-password' element={<ForgotPassword />} />
              <Route path='*' element={<Navigate to='/auth' />} />
            </Route>
          </Routes>
        )}
      </HashRouter>
    </Provider>
  );
};

import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

import { MainPage } from './pages/main';
import { BookPage } from './pages/book';
import { Terms } from './pages/terms';
import { Layout } from './components/layout/layout';
import { LayoutMainPage } from './components/layout-main-page';
import { ErrorPage } from './pages/error-page';


import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
    <HashRouter>
      <Routes>
        
        <Route path='/' element={<Layout />}>
          <Route element={<LayoutMainPage /> }>
            <Route index={true} element={<Navigate to='books/all' />} />
            <Route path='/books/:category' element={<MainPage />} />
            <Route path='terms' element={<Terms contentView='terms'/>} />
            <Route path='contract' element={<Terms contentView='contract'/>} />
          </Route>
          <Route path='/books/:category/:bookId' element={<BookPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </HashRouter>
  // </React.StrictMode>
);

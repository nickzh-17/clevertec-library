import { Registration } from '../pages/registration/registration';

import { Authentication } from '../pages/authentication/authentication';
import { BookPage } from '../pages/book';
import { MainPage } from '../pages/main';
import { Terms } from '../pages/terms';

export const privateRoutes = {
  inLayout: [
    { path: '/books/:categoryUrl', element: <MainPage />, index: true },
    { path: 'terms', element: <Terms contentView='terms' /> },
    { path: 'contract', element: <Terms contentView='contract' /> },
  ],
  outLayout: [{ path: '/books/:category/:bookId', element: <BookPage /> }],
};

export const publicRoutes = [
  { path: '/', element: <Authentication /> },
  { path: '/auth', element: <Authentication /> },
  { path: '/registration', element: <Registration /> },
];

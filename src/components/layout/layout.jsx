import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { ErrorModal } from '../error-modal';
import { Footer } from '../footer';
import { Header } from '../header/header';
import { LottieLoader } from '../lottie-loader';

import './layout.scss';

export const Layout = ({ setIsAuth }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const burgerButtonClickHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='layout'>
      <Header className='layout__header' onBurgerButtonClick={burgerButtonClickHandler} setIsAuth={setIsAuth} />

      <div className='layout__content'>
        <Outlet />
      </div>

      <Footer className='layout__footer' />

      <LottieLoader />
      <ErrorModal />
    </div>
  );
};

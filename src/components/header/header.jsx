import { useState } from 'react';
import { useWindowWidth } from '../../functions/get-window-width';
import { BurgerMenu } from '../burger-menu/burger-menu';
import { Logo } from './logo/logo';
import { Profile } from './profile/profile';

import './header.scss';

export function Header({ className, onBurgerButtonClick, setIsAuth }) {
  const currentWidth = useWindowWidth();
  const [hasShadow, setHasShadow] = useState(false);

  const profileToggleHandler = () => setHasShadow((prev) => !prev);

  return (
    <header className={`main__header  ${hasShadow ? 'has-shadow' : ''} ${className}`}>
      <div className='header__wrapper global-wrapper'>
        <Logo />
        <BurgerMenu setIsAuth={setIsAuth} />

        <span className='main-title'>Библиотека</span>
        {currentWidth > 1439 ? <Profile setIsAuth={setIsAuth} onProfileToggle={profileToggleHandler} /> : false}
      </div>
    </header>
  );
}

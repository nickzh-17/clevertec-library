import { useWindowWidth } from '../../functions/get-window-width';
import { Profile } from './profile/profile';
import { Logo } from './logo/logo';
import { BurgerMenu } from '../burger-menu/burger-menu';

import './header.scss';

export function Header({className, onBurgerButtonClick}) {
  const currentWidth = useWindowWidth();

  return (
    <header className={className}>
      {/* { ( currentWidth > 1439 ) ? <Logo /> : <BurgerMenu /> } */}

      <Logo />
      <BurgerMenu />

      <span className='main-title'>Библиотека</span>
      { ( currentWidth > 1439 ) ? <Profile /> : false }
      
    </header>
  );
}

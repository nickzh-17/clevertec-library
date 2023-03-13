import { useState } from 'react';
import { OutsideListener } from '../ui/outside-listener';
import { BurgerBody } from './burger-body';
import { BurgerButton } from './burger-button';
import './burger-menu.scss';

export const BurgerMenu = ({ setIsAuth }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const switchMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // OutsideListener has trouble with tests - if Burger menu is opened, tests don't see button
  // (couse if Open there is update in DOM - adding new div-tag with listener)

  if (isMenuOpen) {
    return (
      <div className={`burger-menu ${isMenuOpen ? 'opened' : ''}`}>
        <OutsideListener callback={switchMenu} isActive={isMenuOpen}>
          <BurgerButton isOpen={isMenuOpen} onBurgerButtonClick={switchMenu} />
          <BurgerBody isOpen={isMenuOpen} onChangeLink={switchMenu} setIsAuth={setIsAuth} />
        </OutsideListener>
      </div>
    );
  }

  return (
    <div className={`burger-menu ${isMenuOpen ? 'opened' : ''}`}>
      <BurgerButton isOpen={isMenuOpen} onBurgerButtonClick={switchMenu} />
      <BurgerBody isOpen={isMenuOpen} onChangeLink={switchMenu} setIsAut={setIsAuth} />
    </div>
  );
};

import { useState } from 'react';
import { OutsideListener } from '../ui/outside-listener';
import { BurgerBody } from './burger-body';
import { BurgerButton } from './burger-button';
import './burger-menu.scss';


export const BurgerMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const switchMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };



    if(isMenuOpen) {
        return <div className={`burger-menu ${ isMenuOpen ? 'opened' : '' }`} >
            <OutsideListener callback={switchMenu} isActive={isMenuOpen}>
                <BurgerButton isOpen={isMenuOpen} onBurgerButtonClick={switchMenu} />
                <BurgerBody isOpen={isMenuOpen} onChangeLink={switchMenu} />
            </OutsideListener>    
        </div>;
    }

    return <div className={`burger-menu ${ isMenuOpen ? 'opened' : '' }`} >
        <BurgerButton isOpen={isMenuOpen} onBurgerButtonClick={switchMenu} />
        <BurgerBody isOpen={isMenuOpen} onChangeLink={switchMenu} />
    </div>;
};
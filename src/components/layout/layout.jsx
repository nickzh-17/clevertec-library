import { Outlet } from 'react-router-dom';
import { useState } from 'react';

import { Header } from '../header/header';
import { Footer } from '../footer';

import './layout.scss';

export const Layout = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const burgerButtonClickHandler = () => {
        setIsMenuOpen( !isMenuOpen );
    };

    return <div className='layout'>
        <Header className='layout__header global-wrapper' onBurgerButtonClick={burgerButtonClickHandler} />
        
        <div className='layout__content'>
            <Outlet />
        </div>

        <Footer className='layout__footer'/>    

    </div>;
}
import { NavLink } from 'react-router-dom';
import './account-links.scss';

export const AccountLinks = () => <div className='account-links'>
    <NavLink to='/books/all'>
        Профиль
    </NavLink>
    
    <NavLink to='/books/all'>
        Выход
    </NavLink>
</div>;
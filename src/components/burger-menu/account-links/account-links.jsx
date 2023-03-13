import { NavLink } from 'react-router-dom';
import './account-links.scss';

export const AccountLinks = ({ setIsAuth }) => {
  const logout = () => {
    localStorage.setItem('auth', 'false');
    setIsAuth(false);
  };

  return (
    <div className='account-links'>
      <NavLink to='/books/all'>Профиль</NavLink>

      <button data-test-id='exit-button' className='account-links__button' onClick={logout} type='button'>
        Выход
      </button>
    </div>
  );
};

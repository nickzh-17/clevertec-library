import { Link } from 'react-router-dom';
import clevertecIcon from '../../../resources/img/logo.svg';
import './logo.css';

export function Logo() {
    return <Link className='logo' to='/books/all'>
          <img className='logo__icon' src={clevertecIcon} alt='clevertec-icon' />
        </Link>
}
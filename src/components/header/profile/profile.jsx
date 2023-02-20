import { Link } from 'react-router-dom';
import avatar from '../../../resources/img/avatar.png';
import './profile.css';

export function Profile() {
    return <div className='profile'>
        <span className='profile__greetings'>Привет, Иван!</span>
        <Link className='avatar__link' to='/books/all'>
            <img className='avatar__image' src={avatar} alt="avatar" />
        </Link>
    </div>    
}
import './profile-button.scss';

import avatar from '../../../../../resources/img/avatar.png';

export const ProfileButton = ({ onClick }) => (
  <button className='profile-button' type='button' onClick={onClick}>
    <img className='avatar__image' src={avatar} alt='avatar' />
  </button>
);

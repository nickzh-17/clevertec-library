import { ProfileMenu } from './profile-menu/profile-menu';
import './profile.css';

export function Profile({ setIsAuth, onProfileToggle }) {
  const firstName = localStorage.getItem('firstName');

  return (
    <div className='profile'>
      <span className='profile__greetings'>Привет, {firstName}!</span>

      <ProfileMenu setIsAuth={setIsAuth} onProfileToggle={onProfileToggle} />
    </div>
  );
}

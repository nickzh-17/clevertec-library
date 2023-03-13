import { useState } from 'react';
import { ProfileBody } from './profile-body/profile-body';
import { ProfileButton } from './profile-button/profile-button';
import './profile-menu.scss';

export const ProfileMenu = ({ setIsAuth, onProfileToggle }) => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const switchMenu = () => {
    // setIsProfileMenuOpen((prev) => !prev);
    setIsProfileMenuOpen(!isProfileMenuOpen);
    onProfileToggle();
  };

  return (
    <div className={`profile-menu ${isProfileMenuOpen ? 'opened' : ''}`}>
      {/* <OutsideListener callback={switchMenu} isActive={isProfileMenuOpen}> */}
      <ProfileButton onClick={switchMenu} />
      <ProfileBody isOpen={isProfileMenuOpen} setIsAuth={setIsAuth} />
      {/* </OutsideListener> */}
    </div>
  );
};

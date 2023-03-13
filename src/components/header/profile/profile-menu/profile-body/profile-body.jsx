import { AccountLinks } from '../../../../burger-menu/account-links';
import './profile-body.scss';

export const ProfileBody = ({ isOpen, setIsAuth }) => (
  <div className={`profile-body ${isOpen ? 'opened' : ''}`}>
    <AccountLinks setIsAuth={setIsAuth} />
  </div>
);

import { SocialLinks } from './social-links';
import './footer.css';

export const Footer = ({className}) => <footer className={`footer global-wrapper ${className}`}>
    <div className='footer__copyright'>
        <span>© 2020-2023 Cleverland. </span>
        <span>Все права защищены.</span>
    </div>

    <SocialLinks />
</footer>;
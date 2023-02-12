import facebookIcon from '../../../resources/img/social-links/facebook.svg';
import instagramIcon from '../../../resources/img/social-links/instargam.svg';
import vkIcon from '../../../resources/img/social-links/vk.svg';
import linkedinIcon from '../../../resources/img/social-links/linkedin.svg';
import './social-links.css';

export const SocialLinks = () => {
    const socialData = [
        {
            name: 'facebook',
            imgSource: facebookIcon,
            url: 'https://www.facebook.com',
            id: 'sic1'
        },
        {
            name: 'instagram',
            imgSource: instagramIcon,
            url: 'https://www.instagram.com',
            id: 'sic2'
        },
        {
            name: 'vkontakte',
            imgSource: vkIcon,
            url: 'https://www.vk.com',
            id: 'sic3'
        },
        {
            name: 'linkedin',
            imgSource: linkedinIcon,
            url: 'https://www.linkedin.com/',
            id: 'sic4'
        },
    ];

    return <ul className='social-links'>
        {
            socialData.map( (socialNetwork) => <li key={`key${socialNetwork.id}`}>
                <a href={socialNetwork.url} target='_blank' rel='noreferrer'>
                    <img src={socialNetwork.imgSource} alt={socialNetwork.name} />
                </a>
            </li> )
        }
    </ul>;
}


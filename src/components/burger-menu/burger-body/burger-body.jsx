import { Navigation } from '../../navigation';
import { AccountLinks } from '../account-links';
import './burger-body.scss';

// export const BurgerBody = ({isOpen}) => <div className={`burger-body ${ isOpen ? 'opened' : '' }`} >
//     <Navigation />
// </div>;

export const BurgerBody = ({isOpen, onChangeLink}) => 
<div 
    data-test-id='burger-navigation' 
    className={`burger-body ${ isOpen ? 'menu-opened' : '' }`} 
>
    <Navigation 
        isInsideBurger={true} 
        onNavigateItemClick={onChangeLink}
        showcaseId='burger-showcase'
        booksId='burger-books'
        termsId='burger-terms'
        contractId='burger-contract' 
    /> 

    <AccountLinks />
</div>;
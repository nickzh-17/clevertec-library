import { Outlet } from 'react-router-dom';
import { Navigation } from '../navigation';
import { useWindowWidth } from '../../functions/get-window-width';
import './layout-main-page.scss';


export const LayoutMainPage = () => <div className='layout-main-page global-wrapper'>
    <div className='content'>
        { 
            ( useWindowWidth() >= 1440 ) ? 
                <Navigation 
                    showcaseId='navigation-showcase'
                    booksId='navigation-books'
                    termsId='navigation-terms'
                    contractId='navigation-contract' 
                /> 
                : false }
        <Outlet />
    </div>
</div>;
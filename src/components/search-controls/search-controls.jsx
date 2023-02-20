import { useState } from 'react';
import { SearchBar } from './search-bar';
import { Filter } from './filter';
import { DisplaySettings } from './display-settings';

import './search-controls.scss';

export const SearchControls = ({onViewSwitch}) => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const searchIconClickHandler = () => {
        setIsSearchOpen(!isSearchOpen);
    }

    const viewSwitchHandler = (newViewType) => {
        onViewSwitch(newViewType);
    };

    return <div className={`search-controls ${isSearchOpen ? 'search-icon--open' : ''}`}>
        <div className='search-controls__left'>
            <SearchBar isSearchOpen={isSearchOpen} onSearchIconClick={searchIconClickHandler}/>
            <Filter />
        </div>
        <DisplaySettings onViewSwitch={viewSwitchHandler} />
    </div>;
};

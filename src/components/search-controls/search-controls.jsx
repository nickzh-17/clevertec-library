import { useState } from 'react';
import { SearchBar } from './search-bar';
import { Filter } from './filter';
import { DisplaySettings } from './display-settings';

import './search-controls.scss';

export const SearchControls = ({onViewSwitch, filter, setFilter}) => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const searchIconClickHandler = () => {
        setIsSearchOpen(!isSearchOpen);
    }

    const viewSwitchHandler = (newViewType) => {
        onViewSwitch(newViewType);
    };

    const setQuery = (value) => {
        setFilter( prevState => ({...prevState, query: value}) )
    };

    const setSort = (method) => {
        setFilter( prevState => ({...prevState, sort: method}) );
    };

    return <div className={`search-controls ${isSearchOpen ? 'search-icon--open' : ''}`}>
        <div className='search-controls__left'>
            <SearchBar
                query={filter.query}
                setQuery={setQuery} 
                isSearchOpen={isSearchOpen} 
                onSearchIconClick={searchIconClickHandler}
            />
            <Filter 
                sort={filter.sort}
                setSort={setSort}
            />
        </div>
        <DisplaySettings onViewSwitch={viewSwitchHandler} />
    </div>;
};

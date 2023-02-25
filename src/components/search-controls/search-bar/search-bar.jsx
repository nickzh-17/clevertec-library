import React, { useEffect, useRef } from 'react';
import { useWindowWidth } from '../../../functions/get-window-width';
import { IconButton } from '../../ui/icon-button';
import './search-bar.scss';

const useMountEffect = (fun) => useEffect(fun);

const useFocus = () => {
	const htmlElRef = useRef(null)
	const setFocus = function() {
        if(htmlElRef.current) {
            htmlElRef.current.focus();
        }
        return undefined;
    };

	return [ htmlElRef,  setFocus ] 
}

export const SearchBar = ({isSearchOpen, onSearchIconClick, query, setQuery}) => {
    const [inputRef, setInputFocus] = useFocus();
    useMountEffect( setInputFocus );


    const currentWidth = useWindowWidth();

    const onCloseInput = () => {
        onSearchIconClick();
    };

    if( currentWidth < 768  ) {

        
        return <div>
            <IconButton dataTestId='button-search-open' onIconButtonClick={onSearchIconClick} className={`search-icon ${isSearchOpen ? 'hidden' : ''}`} >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.3335 2.66671C4.75617 2.66671 2.66683 4.75605 2.66683 7.33337C2.66683 9.9107 4.75617 12 7.3335 12C9.91083 12 12.0002 9.9107 12.0002 7.33337C12.0002 4.75605 9.91083 2.66671 7.3335 2.66671ZM1.3335 7.33337C1.3335 4.01967 4.01979 1.33337 7.3335 1.33337C10.6472 1.33337 13.3335 4.01967 13.3335 7.33337C13.3335 10.6471 10.6472 13.3334 7.3335 13.3334C4.01979 13.3334 1.3335 10.6471 1.3335 7.33337Z" fill="#A7A7A7"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.6284 10.6286C10.8887 10.3683 11.3108 10.3683 11.5712 10.6286L14.4712 13.5286C14.7315 13.789 14.7315 14.2111 14.4712 14.4714C14.2108 14.7318 13.7887 14.7318 13.5284 14.4714L10.6284 11.5714C10.368 11.3111 10.368 10.889 10.6284 10.6286Z" fill="#A7A7A7"/>
                </svg>
            </IconButton>

            <div className={`search-bar mobile ${isSearchOpen ? 'visible' : ''}`}>
                        
                <input 
                    value={query} 
                    onChange={event => setQuery(event.target.value)}
                    data-test-id='input-search' 
                    ref={inputRef} 
                    type="text" 
                    placeholder='Поиск книги или автора...' />
                <button data-test-id='button-search-close' type='button' onClick={onCloseInput}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.4711 3.52859C12.7314 3.78894 12.7314 4.21105 12.4711 4.4714L4.47108 12.4714C4.21073 12.7317 3.78862 12.7317 3.52827 12.4714C3.26792 12.2111 3.26792 11.7889 3.52827 11.5286L11.5283 3.52859C11.7886 3.26824 12.2107 3.26824 12.4711 3.52859Z" fill="url(#paint0_linear_4221_38304)"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M3.52827 3.52859C3.78862 3.26824 4.21073 3.26824 4.47108 3.52859L12.4711 11.5286C12.7314 11.7889 12.7314 12.2111 12.4711 12.4714C12.2107 12.7317 11.7886 12.7317 11.5283 12.4714L3.52827 4.4714C3.26792 4.21105 3.26792 3.78894 3.52827 3.52859Z" fill="url(#paint1_linear_4221_38304)"/>
                        <defs>
                            <linearGradient id="paint0_linear_4221_38304" x1="7.83158" y1="-14.0208" x2="-28.2403" y2="14.5878" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#F83600"/>
                                <stop offset="1" stopColor="#F9D423"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_4221_38304" x1="7.83158" y1="-14.0208" x2="-28.2403" y2="14.5878" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#F83600"/>
                                <stop offset="1" stopColor="#F9D423"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </button>
            </div>
        </div> 
        
    }

    return <div className='search-bar'>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M7.3335 2.66671C4.75617 2.66671 2.66683 4.75605 2.66683 7.33337C2.66683 9.9107 4.75617 12 7.3335 12C9.91083 12 12.0002 9.9107 12.0002 7.33337C12.0002 4.75605 9.91083 2.66671 7.3335 2.66671ZM1.3335 7.33337C1.3335 4.01967 4.01979 1.33337 7.3335 1.33337C10.6472 1.33337 13.3335 4.01967 13.3335 7.33337C13.3335 10.6471 10.6472 13.3334 7.3335 13.3334C4.01979 13.3334 1.3335 10.6471 1.3335 7.33337Z" fill="#A7A7A7"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M10.6284 10.6286C10.8887 10.3683 11.3108 10.3683 11.5712 10.6286L14.4712 13.5286C14.7315 13.789 14.7315 14.2111 14.4712 14.4714C14.2108 14.7318 13.7887 14.7318 13.5284 14.4714L10.6284 11.5714C10.368 11.3111 10.368 10.889 10.6284 10.6286Z" fill="#A7A7A7"/>
        </svg>
        <input
            data-test-id='input-search'
            value={query} 
            onChange={event => setQuery(event.target.value)}
            type="text" 
            placeholder='Поиск книги или автора…' 
        />
    </div>;

}
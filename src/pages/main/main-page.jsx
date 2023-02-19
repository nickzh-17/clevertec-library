import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import axios from 'axios';

import { SearchControls } from '../../components/search-controls';
import { MainContent } from '../../components/main-content';

import './main-page.css';

export const MainPage = () => {
    const dispatch = useDispatch();

    const [books, setBooks] = useState(null);

    useEffect( () => {
        dispatch({type: 'START_FETCHING'});
        Promise.all([
            axios.get('https://strapi.cleverland.by/api/books'),
            axios.get('https://strapi.cleverland.by/api/categories')
        ]).then(responses => {
            if(responses[0].statusText === 'OK' && responses[1].statusText === 'OK') {
                dispatch({type: 'SET_BOOKS', payload: responses[0].data});
                dispatch({type: 'SET_GENRES', payload: responses[1].data});
                
                setBooks(responses[0].data);
                dispatch({type: 'END_FETCHING'});

                dispatch({type: 'SYNCHRO_NAV', payload: true});
                console.log('syncronize..');
                dispatch({type: 'SYNCHRO_NAV', payload: false});

            } else {
                throw new Error('Something went wrong');
                
            }
        }).catch( () => {
            dispatch({type: 'END_FETCHING'});
            dispatch({type: 'OPEN_FETCHING-ERROR'});
        } );
    }, [dispatch] );


    const {category} = useParams();
    const [viewConfig, setViewConfig] = useState('grid');

    const viewSwitchHandler = (newViewType) => setViewConfig(newViewType);

    return <div>
    {
        books &&

        <section className='main-page'>
            <SearchControls onViewSwitch={viewSwitchHandler} />
            <MainContent viewType={viewConfig} category={category} />
        </section>
    }

</div>
    
    
    
};
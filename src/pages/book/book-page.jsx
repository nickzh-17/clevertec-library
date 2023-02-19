import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux/es/exports';

import axios from 'axios';

import { CurrentPath } from '../../components/book-page/current-path';
import { BookMainContent } from '../../components/book-page/book-main-content';
import { BookInfo } from '../../components/book-page/book-info';


import './book-page.scss';

// const isParamValid = (params, currentParam) => {
//     if( !params.includes(currentParam) ) return false;

//     return true;
// };




export const BookPage = () => {
    const dispatch = useDispatch();
    const currentBook = useSelector(store => store.bookReducer.currentBook);

    const {bookId, bookCategory} = useParams();


    useEffect( () => {
        dispatch({type: 'START_FETCHING'});
        
        axios.get(`https://strapi.cleverland.by/api/books/${bookId}`)
            .then(response => {
                if(response.statusText === 'OK') {
                    dispatch({type: 'SET_CURRENT-BOOK', payload: response.data});
                    dispatch({type: 'END_FETCHING'});
                } else {
                    throw new Error('Error on Book loading:', response);
            }
            }).catch( () => {
                dispatch({type: 'END_FETCHING'});
                dispatch({type: 'OPEN_FETCHING-ERROR'});
            });
        }, [dispatch, bookId, bookCategory] );




    
    if(!currentBook) return false;

    return <section className='book-page'> 
                    <CurrentPath category={currentBook.categories[0]} title={currentBook.title}/>
                    <BookMainContent className='book-page__main-content' book={currentBook} />
                    <BookInfo book={currentBook} />
    </section>;
}
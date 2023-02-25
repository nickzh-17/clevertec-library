import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux/es/exports';

import axios from 'axios';

import { BookMainContent } from '../../components/book-main-content';
import { BookInfo } from '../../components/book-info';

import './single-book.scss';

export const SingleBook = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentBook = useSelector(store => store.bookReducer.currentBook);
    const categories = useSelector(store => store.bookReducer.genres);

    const {bookId, category} = useParams();


    useEffect( () => {
        console.log(bookId, category, categories.length);
        // if(category === 'all') {
        //     const newPath = `/newCategory/${bookId}`;
        //     console.log(newPath);
        //     navigate(newPath);
        //     return;
        // }
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
        }, [dispatch, navigate, bookId, category, categories] );

        return <section className='single-book global-wrapper'>
            {
                currentBook ?
                    <React.Fragment>
                        <BookMainContent className='single-book__main-content' book={currentBook} />
                        <BookInfo book={currentBook} />
                    </React.Fragment> 
                    : false
            }
            
        </section>

};
import React, { useState, useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux/es/exports';


import { FetchData } from '../../api/fetch-data';
import { booksData, bookGenres } from '../../resources/books';


import { CurrentPath } from '../../components/book-page/current-path';
import { BookMainContent } from '../../components/book-page/book-main-content';
import { BookInfo } from '../../components/book-page/book-info';


import './book-page.scss';

const hasCategory = (categories, current) => categories.includes(current);

const isParamValid = (params, currentParam) => {
    if( !params.includes(currentParam) ) return false;

    return true;
};

// const fetchBook = async () => {
//     // setIsPageLoading(true);
//     // console.log('loading started', isPageLoading);

//     const response = await FetchData.getBook('2');
    
//     // setIsPageLoading(false);
//     // console.log('loaded!', isPageLoading);
//     // console.log(response);
// };



export const BookPage = () => {
    const {bookId, category} = useParams();
    const genres = bookGenres.map( (item) => item.route );
    const currentBook = booksData.find( (book) => book.id === bookId );
    

    if( !isParamValid(genres, category) || !currentBook ) return <Navigate to='error' />
    
    return <section className='book-page'> 
                    <CurrentPath genre={currentBook.genre} name={currentBook.name}/>
                    <BookMainContent className='book-page__main-content' book={currentBook} />
                    <BookInfo book={currentBook}/>
    </section>;
}
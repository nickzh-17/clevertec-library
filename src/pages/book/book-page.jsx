import { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import { CurrentPath } from '../../components/book-page/current-path';
import { BookMainContent } from '../../components/book-page/book-main-content';
import { BookInfo } from '../../components/book-page/book-info';

import { booksData, bookGenres } from '../../resources/books';


import './book-page.scss';

const hasCategory = (categories, current) => categories.includes(current);
const isParamValid = (params, currentParam) => {
    if( !params.includes(currentParam) ) return false;

    return true;
};






export const BookPage = () => {
    const {bookId, category} = useParams();
    const genres = bookGenres.map( (item) => item.route );
    const currentBook = booksData.find( (book) => book.id === bookId );
    

    if( !isParamValid(genres, category) || !currentBook ) return <Navigate to='error' />
    
    return <section className='book-page'>
   

        <CurrentPath genre={currentBook.genre} name={currentBook.name}/>
        <BookMainContent className='book-page__main-content' book={currentBook} />
        <BookInfo book={currentBook}/>
    </section>
};

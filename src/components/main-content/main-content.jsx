import { useSelector } from 'react-redux';

import { BookCard } from '../book-card';
import { BookRow } from '../book-row';
import { booksData } from '../../resources/books';
import './main-content.css';


export const MainContent = ({viewType, category}) => {
    const booksTest = useSelector(store => store.bookReducer.books);

    // for Category filter
    // const books = (category === 'all') ? booksData : booksData.filter( (book) => book.genreEng === category );


    // return <div className={`main-content--${viewType}`}>
    //     {
    //         booksData.map( (book) => <BookCard 
    //             key={book.id}
    //             viewType={viewType}
    //             bookData={book}

    //         /> )
    //     }
    // </div>;

return <div className={`main-content--${viewType}`}>
{
    booksTest.slice(0, 10).map( (book) => <div 
        key={book.id}
    >{book.id}{book.authors}{book.title}</div> )
}
</div>;
}; 

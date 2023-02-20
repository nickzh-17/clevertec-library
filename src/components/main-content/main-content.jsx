import { useSelector } from 'react-redux';

import { BookCard } from '../book-card';
import './main-content.css';


export const MainContent = ({viewType}) => {
    const books = useSelector(store => store.bookReducer.books);


    return <div className={`main-content--${viewType}`}>
    {
        // .slice(0, 10)
        books.map( (book) => <BookCard 
            key={book.id}
            viewType={viewType}
            book={book}
        /> )
    }
    </div>;
}; 

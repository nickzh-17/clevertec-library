import { BookCard } from '../book-card';
import { BookRow } from '../book-row';
import { booksData } from '../../resources/books';
import './main-content.css';


export const MainContent = ({viewType, category}) => {
    const books = (category === 'all') ? booksData : booksData.filter( (book) => book.genreEng === category );

    // paste books instead booksData (but fix footer!!)

    return <div className={`main-content--${viewType}`}>
        {
            booksData.map( (book) => <BookCard 
                key={book.id}
                viewType={viewType}
                bookData={book}

            /> )
        }
    </div>;
}; 

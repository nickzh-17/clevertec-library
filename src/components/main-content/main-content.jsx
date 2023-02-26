import classNames from 'classnames';
import { BookCard } from '../book-card';
import './main-content.css';


export const MainContent = ({books, booksByCategory, viewType, query}) => <div className={classNames(
    `main-content--${viewType}`,
    {'no-books__wrapper': !books.length}
)}
// {`main-content--${viewType}`}
>
    {
        !booksByCategory.length ?
            <h3 className='no-books__content' data-test-id='empty-category'>В этой категории книг ещё нет</h3>
            :
                books.length ? 
                // .slice(0, 10)
                books.map( (book) => <BookCard 
                    key={book.id}
                    viewType={viewType}
                    book={book}
                    query={query}
                /> )
                :
                <h3 className='no-books__content' data-test-id='search-result-not-found'>По запросу ничего не найдено</h3>
    }
</div>;


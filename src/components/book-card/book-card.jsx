import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Highlighter from "react-highlight-words";

import { SmartBookImage } from '../smart-book-image';
import { RatingStars } from '../ui/rating-stars';
import { BookButton } from './book-button';

import { cutName } from '../../functions/cut-name';
import { useWindowWidth } from '../../functions/get-window-width';
import { getPathByCategory } from '../../functions/compare-path-and-category';

import './book-card.scss';

const HighlightedText = ({ children, highlightIndex }) => 
    <span data-test-id='highlight-matches' className="highlighted-text">{children}</span>;


export const BookCard = ({viewType, book, query}) => {
    const genres = useSelector(store => store.bookReducer.genres);

    const path = {
        category: getPathByCategory(book.categories[0], genres),
        id: book.id
    };


    const currentWidth = useWindowWidth();
    let cardContent = null;



    


    if(viewType === 'grid') {
        cardContent = <div className={`book-card book-card--${viewType}`}>
            <div className='top-section'>
                <SmartBookImage imageUrl={book.image?.url} className={`${viewType} book-card__image`} />
                <RatingStars rate={book.rating} className='rate' />
            </div>
            {/* <h3 className='book-name'>{cutName(book.title, 40)}</h3> */}
            <h3 className='book-name'>
                <Highlighter
                    highlightClassName="book-name--highlighted"
                    searchWords={[query]}
                    autoEscape={true}
                    textToHighlight={cutName(book.title, 55)}
                    highlightTag={HighlightedText}
                >
                    <span data-test-id='txthlt' className='txthlt' />
                </Highlighter>
            </h3>
            <div className='bottom-section'>
                <span className='book-author'>{`${book.authors}, ${book.issueYear}`} </span>
                <BookButton
                    booking={book.booking}
                    delivery={book.delivery} 
                    className={`book-card__button ${viewType}`} 
                />
            </div>
        </div>;
    }
    
    if(viewType === 'rows') {
        cardContent = <div className={`book-card book-card--${viewType}`}>
            <SmartBookImage imageUrl={book.image?.url} className={`${viewType} image-wrapper`} />
            <h3 className='name'>{ ( currentWidth >= 768 ) ? book.title : cutName(book.title, 60)}</h3>
            <span className='author'>
                {`${book.authors}, ${book.issueYear}`}
            </span>
            <RatingStars className='rate' rate={book.rating} />
            <BookButton
                booking={book.booking}
                delivery={book.delivery}
                className={`button ${viewType}`} 
            />
        </div>;
    }


    return <Link 
        data-test-id='card' 
        to={`/books/${path.category}/${path.id}`}
    >
        {cardContent}
    </Link>;
};
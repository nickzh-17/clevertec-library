import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { SmartBookImage } from '../smart-book-image';
import { RatingStars } from '../ui/rating-stars';
import { BookButton } from './book-button';

import { cutName } from '../../functions/cut-name';
import { useWindowWidth } from '../../functions/get-window-width';
import { getPathByCategory } from '../../functions/get-path-by-category';

import './book-card.scss';


export const BookCard = ({viewType, book}) => {
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
            <h3 className='book-name'>{cutName(book.title, 40)}</h3>
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
            <SmartBookImage image={book.image} className={`${viewType} image-wrapper`} />
            <h3 className='name'>{ ( currentWidth >= 768 ) ? book.title : cutName(book.title, 50)}</h3>
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
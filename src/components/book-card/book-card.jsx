import { Link } from 'react-router-dom';
import { cutName } from '../../functions/cut-name';
import { useWindowWidth } from '../../functions/get-window-width';
import { SmartBookImage } from '../smart-book-image';
import { RatingStars } from '../ui/rating-stars';
import { BookButton } from './book-button';

import './book-card.scss';

export const BookCard = ({viewType, bookData}) => {
    const currentWidth = useWindowWidth();
    let cardContent = null;
    


    if(viewType === 'grid') {
        cardContent = <div className={`book-card book-card--${viewType}`}>
            <div className='top-section'>
                <SmartBookImage book={bookData} className={`${viewType} book-card__image`} />
                <RatingStars className='rate' ratingInfo={bookData.reviews} />
            </div>
            <h3 className='book-name'>{cutName(bookData.name, 57)}</h3>
            <div className='bottom-section'>
                <span className='book-author'>{`${bookData.author}, ${bookData.publishDate}`} </span>
                <BookButton book={bookData} className={`book-card__button ${viewType}`} />
            </div>
        </div>;
    }
    
    if(viewType === 'rows') {
        cardContent = <div className={`book-card book-card--${viewType}`}>
            <SmartBookImage className={`${viewType} image-wrapper`} book={bookData} />
            <h3 className='name'>{ ( currentWidth >= 768 ) ? bookData.name : cutName(bookData.name, 50)}</h3>
            <span className='author'>
                {`${bookData.author}, ${bookData.publishDate}`}
            </span>
            <RatingStars className='rate' ratingInfo={bookData.reviews} />
            <BookButton className={`button ${viewType}`} book={bookData} />
        </div>;
    }


    return <Link data-test-id='card' to={`/books/${bookData.genreEng}/${bookData.id}`} >{cardContent}</Link>;
};
import { useState } from 'react';
import { useWindowWidth } from '../../../../functions/get-window-width';
import { BookReviews } from '../../../../components/book-reviews';
import { LargeButton } from '../../../../components/ui/large-button';
import { RatingStars } from '../../../../components/ui/rating-stars';
import { SmallButton } from '../../../../components/ui/small-button';
import './book-info.scss';

const getRowsForWidth = (book, width) => {
    const rowsDesktop = [
        {parameter: 'Издательство', property: 'publish'},
        {parameter: 'Год издания', property: 'issueYear'},
        {parameter: 'Страниц', property: 'pages'},
        {parameter: 'Переплёт', property: 'cover'},
        {parameter: 'Формат', property: 'format'},
        {parameter: 'Жанр', property: 'categories'},
        {parameter: 'Вес', property: 'weight'},
        {parameter: 'ISBN', property: 'ISBN'},
        {parameter: 'Изготовитель', property: 'producer'}
    ];

    const rowsMobile = [
        {parameter: 'Издательство', property: 'publish'},
        {parameter: 'Год издания', property: 'issueYear'},
        {parameter: 'Страниц', property: 'pages'},
        {parameter: 'Переплёт', property: 'cover'},
        {parameter: 'Формат', property: 'format'},
        {parameter: 'Вес', property: 'weight'},
        {parameter: 'ISBN', property: 'ISBN'},
        {parameter: 'Изготовитель', property: 'producer'}
    ];

    const currentRows = (width >= 768) ? rowsDesktop : rowsMobile ;

    return currentRows.map( (row) => 
        <div 
            key={Math.random().toString()}
            className="info__row"
        >
            <span className='parameter'>{row.parameter}</span>
            <span className='value'>{book[row.property]}</span>
        </div>
    ); 
    
};


export const BookInfo = ({book}) => {
    const currentViewWidth = useWindowWidth();
    const [isReviewsOpen, setIsReviewsOpen] = useState(false);


    const reviewsArrowClickHandler = () => setIsReviewsOpen(!isReviewsOpen);


    return <div className='book-info global-wrapper'>
        <div className='rate-section'>
            <div className='title border-title'>Рейтинг</div>
            <RatingStars className='rate' rate={book.rating} showAnswer={true} />
        </div>

        <div className='info-section'>
            <div className='title'>Подробная информация</div>
            <div className='border-title' />
            <div className='info__table'>
                { getRowsForWidth(book, currentViewWidth) }
            </div>
        </div>

        <div className='reviews-section'>
            <div className={`reviews-title title border-title  ${(!book.comments?.length ? 'no-reviews' : '')} ${isReviewsOpen ? 'open' : ''}`}>
                Отзывы
                <span className='review-count'>{book.comments?.length || 0}</span>
                {
                    (book.comments?.length) ? 
                        <button 
                            data-test-id='button-hide-reviews'
                            className={`review-arrow ${isReviewsOpen ? 'open' : ''}`} 
                            onClick={reviewsArrowClickHandler} 
                            type='button'>
                                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L7.70711 7.70711C7.31658 8.09763 6.68342 8.09763 6.29289 7.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" fill="#363636"/>
                                </svg>
                        </button>
                        : false
                }
                
                


            </div>
            <BookReviews reviews={book.comments} isOpen={isReviewsOpen} />
            { 
                ( currentViewWidth >= 768 ) ? 
                    <LargeButton className='reviews__button' dataTestId='button-rating' >Оценить книгу</LargeButton> 
                    : <SmallButton className='reviews__button' dataTestId='button-rating' >Оценить книгу</SmallButton> 
            }
            
        </div>
    </div>;
}; 
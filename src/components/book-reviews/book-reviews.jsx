import { BookReview } from "./book-review/book-review";
import './book-reviews.scss';

export const BookReviews = ({reviews, isOpen}) => {

    if( !reviews?.length ) return false;

    return <div className={`book-reviews ${isOpen ? 'open' : ''}`}>
        {
            reviews.map( (review) => <BookReview review={review} key={Math.random().toString()} /> )
        }
    </div>
};
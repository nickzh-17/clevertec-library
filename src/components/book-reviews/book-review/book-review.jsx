import { RatingStars } from '../../ui/rating-stars';
import userImageBypass from '../../../resources/img/user-bypass.svg';
import './book-review.scss';

export const BookReview = ({review}) => <div className='book-review'>
    <img className='user__image' src={userImageBypass} alt="user-bypass" />
    <span className='user__name'>{review.user}</span>
    <span className='date'>{review.date}</span>
    <RatingStars className='rate' rate={review.rating} />
    <p className={`description ${!review.description ? 'no-discription' : ''}`}>{review.description}</p>
</div>;
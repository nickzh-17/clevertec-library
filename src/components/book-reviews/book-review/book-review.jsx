import { RatingStars } from '../../ui/rating-stars';
import userImageBypass from '../../../resources/img/user-bypass.svg';
import './book-review.scss';

const getReviewDate = (dateString) => {
    const getMontChangedEnding = (month) => {
        if(month === 'март' || month === 'август') return month.slice(0, -1).concat('а');

        return month.slice(0, -1).concat('я');
    };

    const date = new Date(dateString);
    
    const day = date.getDate();
    const month = date.toLocaleDateString('ru-RU', {month: 'long'});
    const year = date.getFullYear();

    return `${day} ${getMontChangedEnding(month)} ${year}`;
};

export const BookReview = ({review}) => {
    const date = getReviewDate(review.createdAt);

    return <div className='book-review'>
        {
            review.user.avatarUrl ?
                <img className='user__image' src={`https://strapi.cleverland.by${review.user.avatarUrl}`} alt="user-bypass" />
                : <img className='user__image' src={userImageBypass} alt="user-bypass" />
        }

        <span className='user__name'>
            {`${review.user.firstName} ${review.user.lastName}`}
        </span>

        <span className='date'>{date}</span>

        <RatingStars className='rate' rate={review.rating} />

        <p className={`description ${!review.text ? 'no-discription' : ''}`}>{review.text}</p>
    </div>;
};

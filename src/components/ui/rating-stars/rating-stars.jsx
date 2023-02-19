import classNames from 'classnames';
import './rating-stars.scss';

const getRate = (source) => 
    ( source.reduce( (aver, review) => +aver + +review.rating, 0 ) / source.length ).toFixed(1);

export const RatingStars = ({rate, showAnswer = false, className}) => {
    const maxRate = 5;


    if(!rate && !showAnswer) {
        return <span className='rate--bypass'>ещё нет оценок</span>;
    }


    const currentRate = rate ? rate : 0; 
   
    const stars = Array.from( Array(maxRate) ).map( (item, index) =>   
        <svg className={index < +currentRate ? 'star--filled' : 'star--unfilled'} key={Math.random().toString()} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.59798 8.30426L12 2.54946L14.402 8.30426C14.5419 8.63938 14.8576 8.86723 15.2187 8.89608L21.4493 9.39383L16.7036 13.4448C16.4276 13.6804 16.3064 14.0508 16.391 14.4042L17.8415 20.4636L12.5041 17.215C12.1945 17.0266 11.8055 17.0266 11.4959 17.215L6.15848 20.4636L7.60898 14.4042C7.69359 14.0508 7.57245 13.6804 7.29644 13.4448L2.55067 9.39383L8.78134 8.89608C9.14244 8.86723 9.4581 8.63938 9.59798 8.30426Z" stroke="#FFBC1F"/>
        </svg>);
    
    const rateLabel = rate ?
        <span className='calculation'>{currentRate}</span>
        : <span className='rate--bypass'>ещё нет оценок</span>;

    return <div className={`rating-stars ${className}`}>
        <div className='stars'>
            {stars}
        </div>
        { showAnswer ? rateLabel : false }
    </div>
};
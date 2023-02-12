import { SmallButton } from '../../ui/small-button';
import { LargeButton } from '../../ui/large-button';
import './book-button.scss';

const getDateTwoDigit = (date, choise) => {
    if(choise === 'month') {
        const res = date.getMonth() + 1;
        return (res.length > 1) ? res : `0${res}`;
    }  
    
    if(choise === 'day') {
        const res = date.getDate().toString();
        return (res.length > 1) ? res : `0${res}`;
    }

    return null;
};

const getLargeButtonContent = (status, returnDate, className) => {
    const date = new Date(returnDate);
    const [day, month] = [getDateTwoDigit(date, 'day'), getDateTwoDigit(date, 'month')];

    switch(status) {
        case 'available':
            return <LargeButton disabled={false} className={`book-button ${className}`}>Забронировать</LargeButton>;
        case 'booked':
            return <LargeButton disabled={false} className={`book-button ${className} booked`}>Забронирована</LargeButton>;
        case 'issued':
            return <LargeButton disabled={true} className={`book-button ${className} issued`}>Занята до {day}.{month}</LargeButton>;
        default:
            return null;
    }
};

const getSmallButtonContent = (status, returnDate, className) => {
    const date = new Date(returnDate);
    const [day, month] = [getDateTwoDigit(date, 'day'), getDateTwoDigit(date, 'month')];

    switch(status) {
        case 'available':
            return <SmallButton disabled={false} className={`book-button ${className}`}>Забронировать</SmallButton>;
        case 'booked':
            return <SmallButton disabled={false} className={`book-button ${className} booked`}>Забронирована</SmallButton>;
        case 'issued':
            return <SmallButton disabled={true} className={`book-button ${className} issued`}>Занята до {day}.{month}</SmallButton>;
        default:
            return null;
    }
};


export const BookButton = ({book, className, size = 'small'}) => {
    if(size === 'large') return getLargeButtonContent(book.status, book.returnDate, className);
    
    return getSmallButtonContent(book.status, book.returnDate, className);

} 
import { SmallButton } from '../../ui/small-button';
import { LargeButton } from '../../ui/large-button';
import './book-button.scss';

// const getDateTwoDigit = (date, choise) => {
//     if(choise === 'month') {
//         const res = date.getMonth() + 1;
//         return (res.length > 1) ? res : `0${res}`;
//     }  
    
//     if(choise === 'day') {
//         const res = date.getDate().toString();
//         return (res.length > 1) ? res : `0${res}`;
//     }

//     return null;
// };

const getLargeButtonContent = (booking, delivery, className) => {
    // const date = new Date(returnDate);
    // const [day, month] = [getDateTwoDigit(date, 'day'), getDateTwoDigit(date, 'month')];

    if(booking) {
        return <LargeButton 
            disabled={false} 
            className={`book-button ${className} booked`}
        >
            Забронирована
        </LargeButton>;
    }

    // if(delivery) {
    //     return <LargeButton 
    //         disabled={true} 
    //         className={`book-button ${className} issued`}
    //     >
    //         Занята до {day}.{month}
    //     </LargeButton>;
    // }

    return <LargeButton 
        disabled={false} 
        className={`book-button ${className}`}
        >
            Забронировать
        </LargeButton>;
};

const getSmallButtonContent = (booking, delivery, className) => {
    // const date = new Date(returnDate);
    // const [day, month] = [getDateTwoDigit(date, 'day'), getDateTwoDigit(date, 'month')];


    if(booking) {
        return <SmallButton 
            disabled={false} 
            className={`book-button ${className} booked`}
        >
            Забронирована
        </SmallButton>;
    }

    // if(delivery) {
    //     return <SmallButton 
    //         disabled={true} 
    //         className={`book-button ${className} issued`}
    //     >
    //         Занята до {day}.{month}
    //     </SmallButton>;
    // }


    return <SmallButton 
        disabled={false} 
        className={`book-button ${className}`}
    >
        Забронировать
    </SmallButton>;
};


export const BookButton = ({booking, delivery, className, size = 'small'}) => {
    if(size === 'large') return getLargeButtonContent(booking, delivery, className);
    
    return getSmallButtonContent(booking, delivery, className);

} 
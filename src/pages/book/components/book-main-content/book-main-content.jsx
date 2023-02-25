import { useWindowWidth } from '../../../../functions/get-window-width';

import { BookButton } from '../../../../components/book-card/book-button';
import { BookPreview } from './book-preview';

import './book-main-content.scss';



export const BookMainContent = ({book, className}) => {
    const currentViewWidth = useWindowWidth();

    return <div className={`book-main-content global-wrapper ${className}`}>

        <BookPreview book={book} />

        <div className="name-section">
            <span data-test-id='book-title' className='name'>{book.title}</span>
            <span className='author'>{book.authors}, {book.issueYear}</span>
            <BookButton 
                booking={book.booking} 
                delivery={book.delivery} 
                className='button' 
                size={ ( currentViewWidth >= 768 ) ? 'large' : 'small' } />
        </div>
        <div className="description-section">
            <span className='title'>О книге</span>
            <p className='description'>
                {book.description}
            </p>
        </div>
    </div>;
};


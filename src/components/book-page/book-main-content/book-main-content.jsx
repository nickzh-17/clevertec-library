import { useWindowWidth } from '../../../functions/get-window-width';
import { BookButton } from '../../book-card/book-button';
import { Slider } from '../../slider';
import { SmartBookImage } from '../../smart-book-image';
import './book-main-content.scss';
import { BookPreview } from './book-preview';



export const BookMainContent = ({book, className}) => {
    const currentViewWidth = useWindowWidth();

    return <div className={`book-main-content global-wrapper ${className}`}>

        <BookPreview book={book} />

        <div className="name-section">
            <span className='name'>{book.name}</span>
            <span className='author'>{book.author}, {book.publishDate}</span>
            <BookButton className='button' book={book} size={ ( currentViewWidth >= 768 ) ? 'large' : 'small' } />
        </div>
        <div className="description-section">
            <span className='title'>О книге</span>
            <p className='description'>
                {book.description}
            </p>
        </div>
    </div>;
};


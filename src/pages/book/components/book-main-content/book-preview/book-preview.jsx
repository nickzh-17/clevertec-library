import { Slider } from '../../../../../components/slider';
import { SmartBookImage } from '../../../../../components/smart-book-image';


const hasSlides = (book) => Boolean( book.images?.length && book.images?.length > 1 );

export const BookPreview = ({book}) => {
    // 1. empty -> smartImg
    // 2. 1 -> smartImg
    // 3. >1 -> Slider


    if( !hasSlides(book) ) {
        const simpleImage = (book.images?.length) ? book.images[0].url : null;
        
        return <SmartBookImage imageUrl={simpleImage} className='image' />
    }

    return <Slider book={book} />;
};
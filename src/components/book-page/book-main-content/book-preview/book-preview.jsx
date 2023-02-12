import { Slider } from "../../../slider"
import { SmartBookImage } from "../../../smart-book-image";


const hasSlides = (book) => Boolean( book.slidesBig && book.slidesBig.length > 1 );

export const BookPreview = ({book}) => {
    // 1. empty -> smartImg
    // 2. 1 -> smartImg
    // 3. >1 -> Slider

    if( !hasSlides(book) ) {
        return <SmartBookImage book={book} className='image' />
    }

    return <Slider book={book} />;
};
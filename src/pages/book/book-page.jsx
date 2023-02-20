import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux/es/exports';


import { CurrentPath } from './components/current-path';
import { SingleBook } from './modules/single-book';


import './book-page.scss';

// const isParamValid = (params, currentParam) => {
//     if( !params.includes(currentParam) ) return false;

//     return true;
// };




export const BookPage = () => {

    const {bookId, category} = useParams();
    const currentBook = useSelector(store => store.bookReducer.currentBook);




    return <section className='book-page'> 
                    <CurrentPath category={currentBook ? currentBook.categories[0] : 'Все книги'} title={currentBook?.title}/>
                    <SingleBook />
    </section>;
}
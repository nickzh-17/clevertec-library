import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux/es/exports';


import { CurrentPath } from './components/current-path';
import { SingleBook } from './modules/single-book';


import './book-page.scss';

// const isParamValid = (params, currentParam) => {
//     if( !params.includes(currentParam) ) return false;

//     return true;
// };




export const BookPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const categories = useSelector(store => store.bookReducer.genres);
    const {bookId, category} = useParams();
    const currentBook = useSelector(store => store.bookReducer.currentBook);
    


    // if(category === 'all') navigate()
    


    return <section className='book-page'> 
                    <CurrentPath categoryPath={category} categoryRu={currentBook ? currentBook.categories[0] : 'Все книги'} title={currentBook?.title}/>
                    <SingleBook />
    </section>;
}
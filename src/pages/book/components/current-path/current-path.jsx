import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCategoryByPath } from '../../../../functions/compare-path-and-category';
import './current-path.scss';

export const CurrentPath = ({ title }) => {
  const categoryPath = useSelector(store => store.mainReducer.currentCategory);
  const categories = useSelector(store => store.bookReducer.genres);
  
  let categoryRu = 'Все книги';

  if(categoryPath !== 'all' && categories?.length) {
    categoryRu = getCategoryByPath(categoryPath, categories);
    console.log(categoryPath, categoryRu);
  }

  return   <div className='current-path__wrapper'>
    <div className='current-path__content global-wrapper'>
      <span className='current-route'>
          <Link 
            data-test-id='breadcrumbs-link' 
            to={`/books/${categoryPath}/`}
        >
            {categoryRu}
        </Link>
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M7 21L16 3' stroke='#BFC4C9' strokeWidth='2' strokeLinecap='round' />
        </svg>
        <span data-test-id='book-name'>{title}</span>
      </span>
    </div>
  </div>;
};

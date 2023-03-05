import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { MainContent } from '../../components/main-content';
import { SearchControls } from '../../components/search-controls';
import { useBooksByPath, useBooksBySortSearch } from '../../hooks/use-books';

import './main-page.css';

export const MainPage = () => {
  const dispatch = useDispatch();

  const [books, setBooks] = useState(null);
  const categories = useSelector((store) => store.bookReducer.genres);
  // const [categories, setCategories] = useState(null);

  // useEffect( () => {
  //     dispatch({type: 'START_FETCHING'});
  //     // console.log(`CATEGORIES length is ${categories?.length}`);
  //     Promise.all([
  //         axios.get('https://strapi.cleverland.by/api/books'),
  //         axios.get('https://strapi.cleverland.by/api/categories')
  //     ]).then(responses => {
  //         if(responses[0].statusText === 'OK' && responses[1].statusText === 'OK') {
  //             dispatch({type: 'SET_BOOKS', payload: responses[0].data});
  //             dispatch({type: 'SET_GENRES', payload: responses[1].data});

  //             setBooks(responses[0].data);

  //             dispatch({type: 'END_FETCHING'});
  //         } else {
  //             throw new Error('Something went wrong');

  //         }
  //     }).catch( () => {
  //         dispatch({type: 'END_FETCHING'});
  //         dispatch({type: 'OPEN_FETCHING-ERROR'});
  //     } );
  // }, [dispatch] );

  const { categoryUrl } = useParams();
  const [viewConfig, setViewConfig] = useState('grid');

  // sort = 'desc' | 'asc'
  const [filter, setFilter] = useState({ sort: 'desc', query: '' });

  useEffect(() => {
    dispatch({ type: 'SET-CATEGORY', payload: categoryUrl });
  }, [dispatch, categoryUrl]);

  const booksByPath = useBooksByPath(books, categories, categoryUrl);
  const booksByCategorySortSearch = useBooksBySortSearch(booksByPath, filter.sort, filter.query);

  // const booksByPath = useBooksByPath(books, categoryUrl, categories);
  // console.log(`books by path are:`, booksByPath);

  // if(categoryUrl && categories) {
  //     // const category = getCategoryByPath(categoryUrl, categories);
  //     const test = (categories.length) ?
  //         categories.find( (category) => category.path === categoryUrl )?.name
  //         :
  //         null;
  //     console.log(`category on main is ${categoryUrl} and genre length is ${categories.length}, category done: ${test}`);
  //     // console.log(category);
  // }

  const viewSwitchHandler = (newViewType) => setViewConfig(newViewType);

  return (
    <div>
      {books && (
        <section className='main-page'>
          {/* <h1>Query:{filter.query}, Sort:{filter.sort}</h1> */}
          <SearchControls filter={filter} setFilter={setFilter} onViewSwitch={viewSwitchHandler} />
          <MainContent
            viewType={viewConfig}
            books={booksByCategorySortSearch}
            booksByCategory={booksByPath}
            query={filter.query}
          />
        </section>
      )}
    </div>
  );
};

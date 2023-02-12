import { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { booksData, bookGenres } from '../../resources/books';
import './navigation.scss';

const comparePathToBook = (path) => path.startsWith('/books');

export const Navigation = ({
  isInsideBurger, 
  onNavigateItemClick: closeBurger,
  showcaseId, booksId, termsId, contractId
}) => {
  const currentPath = useLocation().pathname;
  const [isBooksOpen, setIsBooksOpen] = useState( comparePathToBook(currentPath) || currentPath === '/' );
  const navigate = useNavigate();



  const mainItemClickHandler = (event) => {
    const nextHash = event.target.closest('a').hash.slice(1);

    // event.stopPropagation();

    if( comparePathToBook(currentPath) && comparePathToBook(nextHash) ) {
      event.preventDefault();
      setIsBooksOpen(!isBooksOpen);
      return;
    };

    if(isInsideBurger) {
      if( !comparePathToBook(currentPath) && comparePathToBook(nextHash) ) {
        setIsBooksOpen(true);
        return;
      }

      closeBurger();
    }

    navigate(nextHash);
    setIsBooksOpen(false);
  };

  const subItemClickHandler = (event) => {
    if(isInsideBurger) closeBurger();
  };
  

  return (
    <nav className='navigation'>
      <ul className='main-links'>
        <li>
          <NavLink
            data-test-id={showcaseId}
            to='/books/all'
            onClick={mainItemClickHandler}
            className={ classNames(
              'all-books__wrapper', 
              'navigation__main-item', 
              {'main-item--active': comparePathToBook(currentPath)},
              {'navigation__item--active': comparePathToBook(currentPath)}
            ) }
          >
            <span>Витрина книг</span>

            <svg 
              className={ classNames(
                'arrow-button', 
                {'open': isBooksOpen}, 
                {'active': comparePathToBook(currentPath)} 
              ) }
              width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
              <path fillRule="evenodd" clipRule="evenodd" d="M6.29289 0.292893C6.68342 -0.0976311 7.31658 -0.0976311 7.70711 0.292893L13.7071 6.29289C14.0976 6.68342 14.0976 7.31658 13.7071 7.70711C13.3166 8.09763 12.6834 8.09763 12.2929 7.70711L7 2.41421L1.70711 7.70711C1.31658 8.09763 0.683417 8.09763 0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289L6.29289 0.292893Z" fill="url(#paint0_linear_4221_32898)"/>
              <defs>
                <linearGradient id="paint0_linear_4221_32898" x1="6.74785" y1="-14.875" x2="-23.3724" y2="26.9297" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F83600"/>
                <stop offset="1" stopColor="#F9D423"/>                      </linearGradient>
              </defs>
            </svg>

          </NavLink>

          

          <ul className={`navigation__books sub-liks ${isBooksOpen ? 'open' : ''}`}>
            <li className='navigation__book-item'>
              <NavLink
                data-test-id={booksId}
                to='/books/all'
                onClick={subItemClickHandler}
                className={({ isActive }) =>
                  isActive ? 'navigation__item--active' : ''
                }
              >
                Все книги
              </NavLink>
            </li>

            {bookGenres.map((genre) => {
              const bookCount = booksData.reduce((total, book) => (book.genreEng === genre.route ? total + 1 : total), 0);

              return (
                <li className='navigation__book-item' key={Math.random().toString()}>
                  <NavLink
                    onClick={subItemClickHandler}
                    to={`/books/${genre.route}`}
                    className={({ isActive }) =>
                      isActive ? 'navigation__item--active' : ''
                    }
                  >
                    {genre.name}
                  </NavLink>
                  <span className='book-count'>{bookCount}</span>
                </li>
              );
            })}
          </ul>
        </li>
        <li>
          <NavLink
            data-test-id={termsId}
            to='/terms'
            onClick={mainItemClickHandler}
            className={({ isActive }) =>
              isActive ? 'navigation__main-item navigation__item--active main-item--active' : 'navigation__main-item'
            }
          >
            Правила пользования
          </NavLink>
        </li>
        <li>
          <NavLink
            data-test-id={contractId}
            to='/contract'
            onClick={mainItemClickHandler}
            className={({ isActive }) =>
              isActive ? 'navigation__main-item navigation__item--active main-item--active' : 'navigation__main-item'
            }
          >
            Договор оферты
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

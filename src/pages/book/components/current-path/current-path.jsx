import './current-path.scss';

export const CurrentPath = ({ category, title }) => (
  <div className='current-path__wrapper'>
    <div className='current-path__content global-wrapper'>
      <span className='current-route'>
        {category}
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M7 21L16 3' stroke='#BFC4C9' strokeWidth='2' strokeLinecap='round' />
        </svg>
        {title}
      </span>
    </div>
  </div>
);

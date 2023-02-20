import './burger-button.scss';


export const BurgerButton = ({isOpen, onBurgerButtonClick}) => <button 
    data-test-id='button-burger'
    className={`burger-button ${ isOpen ? 'menu-opened' : '' }`} 
    onClick={onBurgerButtonClick} 
    type='button' >
        <div className='line top-line' />
        <div className='line middle-line' />
        <div className='line bottom-line' />
</button>;
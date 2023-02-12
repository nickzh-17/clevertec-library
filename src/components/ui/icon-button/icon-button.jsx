import './icon-button.scss';

export const IconButton = 
    ({children, onIconButtonClick, active, className, dataTestId}) => 
    
    <button 
            data-test-id={dataTestId}
            className={`icon-button ${active ? 'icon-button--active' : '' } ${className}`} 
            onClick={onIconButtonClick} 
            type='button' >  
        {children}
    </button>; 
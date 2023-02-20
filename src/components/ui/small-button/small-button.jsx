import './small-button.scss';

export const SmallButton = ({children, dataTestId, className, disabled}) => 
    <button 
        data-test-id={dataTestId} 
        className={`small-button ${className}`} 
        disabled={disabled} 
        type='button'
    >
        {children}
    </button>;
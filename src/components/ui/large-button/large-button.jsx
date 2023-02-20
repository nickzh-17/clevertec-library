import './large-button.scss';

export const LargeButton = ({children, dataTestId, className, disabled = false}) => 
    <button
        data-test-id={dataTestId} 
        className={`large-button ${className}`} 
        disabled={disabled} 
        type='button'>
        {children}
    </button>;
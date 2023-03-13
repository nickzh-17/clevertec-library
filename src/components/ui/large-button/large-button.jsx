import './large-button.scss';

export const LargeButton = ({ children, dataTestId, className, disabled = false, ...props }) => (
  <button data-test-id={dataTestId} className={`large-button ${className}`} type='button' {...props}>
    {children}
  </button>
);

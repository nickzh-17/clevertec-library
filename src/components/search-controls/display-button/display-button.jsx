import './display-button.scss';

export const DisplayButton = ({children, viewType, currentView, onButtonViewClick, dataTestId}) => {
    const clickHandler = () => {
        if(currentView === viewType) return;
        onButtonViewClick(viewType);
    };

    return <button  
            className={`display-button ${viewType === currentView ? 'display-button--active' : ''}`} 
            onClick={clickHandler} 
            data-test-id={dataTestId}
            type='button' >  
        {children}
    </button>;
};
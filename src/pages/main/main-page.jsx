import { useState } from "react";
import { useParams } from "react-router-dom";
import { SearchControls } from "../../components/search-controls";
import { MainContent } from "../../components/main-content";
import './main-page.css';

export const MainPage = ({booksData}) => {
    const {category} = useParams();
    const [viewConfig, setViewConfig] = useState('grid');

    const viewSwitchHandler = (newViewType) => setViewConfig(newViewType);

    return <section className='main-page'>
        <SearchControls onViewSwitch={viewSwitchHandler} />
        <MainContent viewType={viewConfig} category={category} />
    </section>;
};
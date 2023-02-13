import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import axios from 'axios';

import { SearchControls } from "../../components/search-controls";
import { MainContent } from "../../components/main-content";

import './main-page.css';

export const MainPage = ({booksData}) => {
    const dispatch = useDispatch();
    const isFetching = useSelector(state => state.mainReducer.isFetching); 

    const addBook = (book) => {
        dispatch({type: 'ADD_BOOK', payload: book})
    };

    const [testBook, setTestBook] = useState(null);
    const [testLoading, setTestLoading] = useState(false);

    useEffect( () => {
        dispatch({type: 'START_FETCHING'});
        axios.get(`https://strapi.cleverland.by/api/books`)
            .then(res => res.data)
            .then(books => {
                console.log(books);
                setTestBook(books);
                dispatch({type: 'SET_BOOKS', payload: books});
                dispatch({type: 'END_FETCHING'});
            });
    }, [dispatch] );




    const {category} = useParams();
    const [viewConfig, setViewConfig] = useState('grid');

    const viewSwitchHandler = (newViewType) => setViewConfig(newViewType);

    return <div>
    {
        testBook &&

        <section className='main-page'>
            <SearchControls onViewSwitch={viewSwitchHandler} />
            <MainContent viewType={viewConfig} category={category} />
        </section>
    }

</div>
    
    
    
};
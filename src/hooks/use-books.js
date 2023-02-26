import { useMemo } from "react";
import { getCategoryByPath } from "../functions/compare-path-and-category";

export const useBooksByPath = (books, categories, path) => {
    const booksByPath = useMemo( () => {
        if(!books) return null;
        if(path === 'all') return books;

        const category = getCategoryByPath(path, categories);
        if(!category) return books;

        console.log('CATEGORY done!');
        return books.filter( book => book.categories.includes(category) );
    }, [books, categories, path] );

    return booksByPath; 
};

export const useBooksBySort = (books, sort) => {
    // const booksByPath = useBooksByPath(books, categories, path);

    const sortedBooks = useMemo( () => {
        console.log('SORT done!');
        if(!books) return null;

        if(sort === 'desc') {
            return [...books].sort((a, b) => {
                if(a.rating === null) return 1;
                if(b.rating === null) return -1;

                return b.rating - a.rating;
            });      
        }
    
        // for 'asc'
        return [...books].sort((a, b) => {
            if(a.rating === null) return -1;
            if(b.rating === null) return 1;
            return a.rating - b.rating;
        });
    }, [sort, books] );

    return sortedBooks;
};

export const useBooksBySortSearch = (books, sort, query) => {
    const sortedBooks = useBooksBySort(books, sort);

    const searchedBooks = useMemo( () => {
        if(!sortedBooks) return null;

        console.log('SEARCH done!');
        return sortedBooks.filter( book => book.title.toLowerCase().includes(query.toLowerCase()) );
    }, [query, sortedBooks] );

    return searchedBooks;
};
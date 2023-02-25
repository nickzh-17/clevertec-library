export const getPathByCategory = (category, genresList) => 
    genresList.find( (genre) => genre.name === category )?.path;

export const getCategoryByPath = (path, genresList) => 
    genresList.find( (genre) => genre.path === path )?.name;

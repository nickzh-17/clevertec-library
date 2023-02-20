export const getPathByCategory = (category, genresList) => 
    genresList.find( (genre) => genre.name === category ).path;

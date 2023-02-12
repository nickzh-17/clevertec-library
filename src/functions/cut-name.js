export const cutName = (str, maxSymb) => {
    if(str.length > maxSymb) return str.slice(0, maxSymb - 3).concat('...');

    return str;
};
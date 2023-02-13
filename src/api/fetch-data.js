import axios from 'axios';

export class FetchData {
    
    static async getBook(bookId) {
        try {
            const response = await axios.get(`https://strapi.cleverland.by/api/books/${bookId}`);
            return response.data;
        } catch (err) {
            console.log(err);
            return 'error';
        }
    }
    
}
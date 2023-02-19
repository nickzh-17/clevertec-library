import axios from 'axios';

export class FetchData {
    
    static async getBook(bookId) {
        try {
            console.log('SIMPLE-book loading STARTED !!');
            const response = await axios.get(`https://strapi.cleverland.by/api/books/${bookId}`);
            return response.data;
        } catch (err) {
            console.log(err);
            return 'error';
        }
    }
    
}
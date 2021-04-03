import axios from 'axios'

const URL = "http://localhost:8080/books";

class BookServices {
    getBooks() {
        return axios.get(URL);
    }
    deletebook(bookid){
        return axios.delete(URL + '/' + bookid);
    }
    getbookById(bookid){
        return axios.get(URL + '/' + bookid);
    }
    createbookentry(books){
        return axios.post(URL,books);
    }
    updatebook(book){
        return axios.put(URL,book);
    }
    upload(data)
    {        return axios.post("http://localhost:8080/upload",data);


    }
}

export default new BookServices();
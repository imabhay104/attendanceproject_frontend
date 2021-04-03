import axios from 'axios'

const URL = "http://localhost:8080/books";

class service {
    SubmitAttendance(data) {
        return axios.post("http://localhost:8080/check",data);
    }
    
    getattendance(){
        return axios.get("http://localhost:8080/getattendance");
    }
    getdetected_prn(){
        return axios.get("http://localhost:8080/getallprns");
    }
    Submitdetected_prn(data) {
        return axios.post("http://localhost:8080/submitattendance",data);
    }

    Submitteachersdata(data) {
        return axios.post("http://localhost:8080/submitteachersdata",data);
    }

    getteachersdata(){
        return axios.get("http://localhost:8080/getallteacherdata");
    }
    
    Submitteachersteachingdata(data) {
        return axios.post("http://localhost:8080/TeacherTeachesdata",data);
    }
    getteachersteachingdata(){
        return axios.get("http://localhost:8080/getallTeacherTeachesdata");
    }
    Submittstudent(data) {
        return axios.post("http://localhost:8080/submitstudentdata",data);
    }

    getbyprn(prn)
{
  return axios.get('http://localhost:8080/attendance/getbyprn/',{ 
    params: 
    {prn: prn}},);

}
getbycourse_id(couseid)
{
  return axios.get('http://localhost:8080/attendance/getbycourseid',{ 
    params: 
    {couseid:  couseid}} );

}





    deletebook(bookid){
        return axios.delete(URL + '/' + bookid);
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

export default new service();
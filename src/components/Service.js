import axios from "axios";

const baseURL = "http://localhost:3002/students";
class Service {
    getStudent(){
        return axios.get(baseURL);
    }
    getStudentById(stdid){
        return axios.get(baseURL+stdid)
    }

    addStudent(student){
        return axios.post(baseURL,student);
    }
    updateStudent(student,stdid){
        return axios.put(baseURL+stdid,student);
    }
    deleteStudent =(stdid) =>{
        return axios.delete(baseURL+'/'+stdid);
    }
}
export default new Service;
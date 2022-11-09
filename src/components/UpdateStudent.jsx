import { Link, useParams} from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import { useEffect } from "react";


const UpdateStudent = (props) => {
  const [fname, setFName] = useState();
  const [lname, setLName] = useState();
  const [location, setLocation] = useState();
  const [email, setEmail] = useState();
  const [education, setEducation] = useState();
  const [about, setAbout] = useState();
  const [dt, setDt] = useState();
  const [mm, setMm] = useState();
  const [yr, setYr] = useState();
  const [student,setStudent] = useState([]);
  const dob =     dt+"-"+mm+"-"+yr;
  const param = useParams();
  const id = param.id;
      // const student1 ={
        // fname,
        // lname,
        // dob,
        // location,
        // email,
        // education,
        // about
    // }
// 


  const updateData = (e) =>{
    e.preventDefault();
      
    const stdData ={
      fname,
      lname,
      dob,
      location,
      email,
      education,
      about
    }
      const URL = "http://localhost:3002/update/"+id;
      axios.put(URL,stdData)
      .then(res=>{
      if(res.status === 200){
        alert("Student successfully updated");
        window.location = "/";
      }else{
        alert("Error");
        window.location = "/";
      }
      });
  };
  useEffect(()=>{
    
    // const getData=()=>{
      // const id = param.id;
      axios.get("http://localhost:3002/students/"+id).then(res=>{
        setStudent(res.data);
        const dobArray =res.data.dob.split("-");
        setDt(dobArray[0]);
        setMm(dobArray[1]);
        setYr(dobArray[2]);

      }).catch((err)=>console.log(err));
    // }
    // getData();
  },[id]);
  return (
    <div className="container" >
      <h4 className="text-center">Update Student</h4>
      {/* <button onClick={getData}>click me </button> */}
      <Link to="/">
        <i className="fa fa-arrow-left"></i>
      </Link>

      <form action="" className="form" >
        <div className="row m-2">
          <div className="col-md-2">
            <label className="form-label">First Name:</label>
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              name="fname"
              onChange={(e)=>setFName(e.target.value)}
              defaultValue={student.fname}
              
            />
          </div>
          <div className="col-md-2">
            <label className="form-label">Last Name:</label>
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              name="lname"
              // placeholder="Enter Last Name"
              defaultValue={student.lname}
              onChange={(e)=>setLName(e.target.value)}
            />
          </div>
        </div>
        <div className="row m-2">
          <div className="col-md-2">
            <label classname="form-label">Location</label>
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              name="location"
              // placeholder="Enter Location"
              defaultValue={student.location}
              onChange={(e)=>setLocation(e.target.value)}
            />
          </div>
        </div>
        <div className="row m-2">
          <div className="col-md-2">
            <label classname="form-label">E-mail</label>
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              name="email"
              defaultValue={student.email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="row m-2">
          <div className="col-md-2">
            <label classname="form-label">DOB</label>
          </div>
          <div className="col-md-1">
            <input
              type="text"
              className="form-control"
              name="dt"
              defaultValue={student.dt}
              maxLength={2}
              onChange={(e)=>setDt(e.target.value)}
            />
          </div>
          <div className="col-md-1">
            <input
              type="text"
              className="form-control"
              name="mm"
              defaultValue={student.mm}
              maxLength={2}
              onChange={(e)=>setMm(e.target.value)}   
            />
          </div>
          <div className="col-md-1">
            <input
              type="text"
              className="form-control"
              name="yr"
              defaultValue={student.yr}
              maxLength={4}
              onChange={(e)=>setYr(e.target.value)}
            />
          </div>
        </div>
        <div className="row m-2">
          <div className="col-md-2">
            <label classname="form-label">Education</label>
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              name="education"
              defaultValue={student.education}
              onChange={(e)=>setEducation(e.target.value)}
            />
          </div>
        </div>
        <div className="row m-2">
          <div className="col-md-2">
            <label classname="form-label">About</label>
          </div>
          <div className="col-md-4">
            <textarea
              name="about"
              id=""
              cols="25"
              rows="5"
              defaultValue={student.about}
              onChange={(e)=>setAbout(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="row m-3">
          <div className="offset-2 col-md-4">
            <button className="btn btn-dark btn-radius-25" onClick={updateData} >Update</button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default UpdateStudent ;

import { Link} from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import {stude} from './Table';
// import { useEffect } from "react";

const UpdateStudent = (props) => {
    
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState({});
  const [education, setEducation] = useState("");
  const [about, setAbout] = useState("");
  const [dt, setDt] = useState("");
  const [mm, setMm] = useState("");
  const [yr, setYr] = useState("");
  const [student,setStudent] = useState({});
    
  const setData = (e) =>{
    e.preventDefault();
    
    const DOB = yr+"-"+mm+"-"+dt;
    const stdData ={
        fname,
        lname,
        DOB,
        location,
        email,
        education,
        about
    }
      axios.put("http://localhost:3002/addSTD/"+props.matchparams.id,stdData).then(res=>{
      alert("Studend updated" + res.status);
      window.location = "/";
      });
  }
  setStudent(student);
  const getData=()=>{
        const id = props.match.params.id;
    axios.get("http://localhost:3002/students/"+id).then(res =>{
        setStudent(res.data);
        alert(res.status);
    });

  }
  // useEffect(()=>{
    // getData();
  // },[]);
  return (
    <div className="container" onLoad={getData}>
      <h5 className="text-center">Update Student</h5>
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
              // placeholder="Enter First Name"
              value={student.fname}
              onChange={(e)=>setFName(e.target.value)}
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
              value={student.lname}
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
              value={student.location}
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
              // placeholder="Enter E-mail"
              value={student.email}
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
              placeholder="DD"
              maxLength={2}
              onChange={(e)=>setDt(e.target.value)}
            />
          </div>
          <div className="col-md-1">
            <input
              type="text"
              className="form-control"
              name="mm"
              placeholder="MM"
              maxLength={2}
              onChange={(e)=>setMm(e.target.value)}   
            />
          </div>
          <div className="col-md-1">
            <input
              type="text"
              className="form-control"
              name="yr"
              placeholder="YYYY"
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
              value={student.education}
              // placeholder="Enter Education"
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
              // placeholder="About Yourself..."
              value={student.about}
              onChange={(e)=>setAbout(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="row m-3">
          <div className="offset-2 col-md-4">
            <button className="btn btn-dark btn-radius-25" onClick={setData} >Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default UpdateStudent ;

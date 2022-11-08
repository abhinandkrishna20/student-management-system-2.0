import { Link} from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
const Addstd = (props) => {
    const [id,setId] = useState(0);
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState({});
  const [education, setEducation] = useState("");
    const [about, setAbout] = useState("");
    const [dt, setDt] = useState("");
    const [mm, setMm] = useState("");
    const [yr, setYr] = useState("");
    const dob =     dt+"-"+mm+"-"+yr;
  const setData = (e) =>{
    e.preventDefault();
    
    
    const stdData ={
        id,
        fname,
        lname,
        dob,
        location,
        email,
        education,
        about
    }
          axios.get("http://localhost:3002/").then(res=>{
            if(res.data.length<2){
              setId(1);
            }
          })

          
          axios.post("http://localhost:3002/addSTD/",stdData).then(res=>{
      alert("Studend added" + res.status);
      window.location = "/";
      });
  }
  
  return (
    <div className="container">
      <h5 className="text-center">Add New Student</h5>
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
              placeholder="Enter First Name"
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
              placeholder="Enter Last Name"
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
              placeholder="Enter Location"
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
              placeholder="Enter E-mail"
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
              placeholder="Enter Education"
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
              placeholder="About Yourself..."
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
export default Addstd ;

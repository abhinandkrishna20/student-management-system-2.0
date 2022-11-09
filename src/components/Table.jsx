import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Confirmbox1 from './Confirmbox';





const Table = () =>{
    const [stdlist, updateList] = useState([
        {
            id: 1,
            fname:"Abhinand",
            lname: "Krishna",
            dob: "20-02-1996",
            location: "Bangalore",
            education: "BSc",
            about: "MERN Developer",
            email: "abhinand@gmail.com"
        },
        {
            id: 2,
            fname:"Rajesh",
            lname: "Kanna",
            dob: "13-02-1990",
            location: "Chennai",
            education: "BE",
            about: "Front-end Developer",
            email: "rajesh@gmail.com"
        },
        {
            id: 3,
            fname:"Kishore",
            lname: "Kumar",
            dob: "10-12-1993",
            location: "Mumbai",
            education: "BCA",
            about: "Back-end Developer",
            email: "kishore@gmail.com"
        }


    ]);
    // const [student, updateStudent] = useState("");
    
    const onload =() =>{
        axios.get("http://localhost:3002/students/")
        .then(res =>{
            updateList(res.data);
        });
    };
    // Searching Method not working 
    // const searchInput =(e)=>{
        // 
        // const idata = e.target.value;
        // const newList= [];
        // stdlist = stdlist.filter((student)=>{
            // if(idata === ""){
            // return student;
            // }else
            // {
                // if(student.fname.toLowerCase().includes(idata.toLowerCase)){
                    // return student;
                // }
                // 
            // }
            //    
            // });
            // updateList(newList);
        // }
    
    // const updateSTD = (id)=>{
        // axios.get("http://localhost:3002/students/"+id)
        // .then(res=>{
            // updateStudent(res.data);
        // })
        // 
    // }
    const deleteStd = (id,e) =>{
        e.preventDefault();
        
        if(window.confirm("Are you sure?")){
        const url= "http://localhost:3002/students/"+id;
          axios.delete(url).then(res=>{
            alert(res.affectedRows);
          })
        }else{
            alert("No deletion!!!")
        }
    };

    useEffect(()=>{
        onload();
    },[]);
return(

    <div className="text-dark table-modal">
        <div className="container text-center">
            <div className="row">
                <div className="col-sm-6 text-start">
                    <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search" 
                    // onChange={searchInput} 
                    />
                    <span className="input-group-text"><i className='fa fa-search'></i> </span>
                    </div>
                
                </div>
                <div className="col-md-6 text-end">
               <Link to="/addstd">
                <button className="btn btn-dark text-end text-center" style={{"border-radius":"40px","width":"100px"}}><i class="fa fa-user-plus" aria-hidden="true"></i>Add</button></Link>
                </div>
            </div>
                    
        <table className="table table-bordered p-4 m-2">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Location</th>
                    <th>E-Mail</th>
                    <th>DOB</th>
                    <th>Education</th>
                    <th>Action</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody >{
                stdlist.map((std,index) =>{
                    return(
    
                        <tr key={index}>
                        <td className="p-3">{std.id}</td>
                        <td className="p-3">{std.fname}</td>
                        <td className="p-3">{std.lname}</td>
                        <td className="p-3">{std.location}</td>
                        <td  className="p-3">{std.email}</td>
                        <td className="p-3">{std.dob}</td>
                        <td className="p-3">{std.education}</td>
                        <td  className="p-3"                       
                        >
                        <Link to={"/update/"+std.id} 
                        //  student = {student}
                         >
                            <i class="fas fa-user-edit text-primary p-1"></i>Edit</Link>
                            
                            </td>

                        <td className="p-3"><button onClick={(e)=>{deleteStd(std.id,e)}} className='btn text-decoration-none text-danger'>
                            <i class="fa fa-trash text-danger p-2" aria-hidden="true"></i>Delete</button></td>
                    </tr>
    
                    );
                })

                }
            </tbody>
        </table>
        <Confirmbox1 />
        </div>
        
    </div>
);

}
export default Table;


    // const stdlist = [
        // {
    // id:1,
    // fname:"Abhi",
    // lname:"Krish",
    // location: "Bangalore",
    // email:"abhi@gmail.com",
    // dob:"20-02-1996",
    // education:"Bsc",
    // about:"I'm a Full stack Developer"
    // 
    // },
    // {
        // id:2,
        // fname:"Shalini",
        // lname:"Krish",
        // location: "Bangalore",
        // email:"abhi@gmail.com",
        // dob:"20-02-1996",
        // education:"Bsc",
        // about:"I'm a Full stack Developer"
        // 
        // },
        // {
            // id:3,
            // fname:"Arjun",
            // lname:"Krish",
            // location: "Bangalore",
            // email:"abhi@gmail.com",
            // dob:"20-02-1996",
            // education:"Bsc",
            // about:"I'm a Full stack Developer"
            // 
            // }
    // ];








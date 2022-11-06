import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';



const Table = () =>{
    const [stdlist, updateList] = useState([]);
    const deleteStd = (id) =>{
        // const url= "http://localhost:3002/students/"+id;
        //   axios.delete(url).then(res=>{
            // alert(res.status);
        //   })
    };
    const onload =() =>{
        axios.get("http://localhost:3002/students/")
        .then(res =>{
            updateList(res.data);
        });
    };
    const updateSTD = (id)=>{

    }
    useEffect(()=>{
        onload();
    },[]);
return(

    <div className="text-dark">
        <div className="container text-center">
            <div className="row">
                <div className="col-sm-6 text-start">
                    <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search" />
                    <span className="input-group-text"><i className='fa fa-search'></i> </span>
                    </div>
                
                </div>
                <div className="col-md-6 text-end">
               <Link to="/addstd">
                <button className="btn btn-dark text-end text-center" style={{"border-radius":"40px","width":"100px"}}><i class="fa fa-user-plus" aria-hidden="true"></i>dd</button></Link>
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
                        <td  className="p-3" onClick={()=>{updateSTD(std.id)}}>
                        <Link to={"/update/"+std.id}>
                            <i class="fas fa-user-edit text-primary p-1"></i>Edit</Link>
                            
                            </td>

                        <td className="p-3"><button onClick={deleteStd(std.id)} className='btn text-decoration-none text-danger'>
                            <i class="fa fa-trash text-danger p-2" aria-hidden="true"></i>Delete</button></td>
                    </tr>
    
                    );
                })

                }
            </tbody>
        </table>
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








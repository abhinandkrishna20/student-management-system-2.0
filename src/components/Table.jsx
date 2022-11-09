import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Confirmbox1 from './Confirmbox';




const Table = () =>{
    const [stdlist, updateList] = useState([]);
    const [student, updateStudent] = useState("");
    
    const onload =() =>{
        axios.get("http://localhost:3002/students/")
        .then(res =>{
            updateList(res.data);
        });
    };
    const searchInput =(e)=>{
        
        const idata = e.target.value;
        const newList= [];
        newList = stdlist.filter((student)=>{
            if(idata === ""){
            return student;
            }else
            {
                if(student.fname.toLowerCase().includes(idata.toLowerCase)){
                    return student;
                }
                
            }
               
            });
            updateList(newList);
        
        
            
        }
    
    const updateSTD = (id)=>{
        axios.get("http://localhost:3002/students/"+id)
        .then(res=>{
            updateStudent(res.data);
        })
        
    }
    const deleteStd = (id) =>{
        Confirmbox1.setView();
        if(window.confirm("Are you sure?")){
        const url= "http://localhost:3002/students/"+id;
          axios.delete(url).then(res=>{
            alert(res.affectedRows);
          })
        }else{
            alert("No deletion!!!")
        }
        return(
            <Confirmbox1 />
        )
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
                    <input type="text" className="form-control" placeholder="Search" onChange={searchInput} />
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
                        <Link to={"/update/"+std.id}  student = {student}>
                            <i class="fas fa-user-edit text-primary p-1"></i>Edit</Link>
                            
                            </td>

                        <td className="p-3"><button onClick={(e)=>{deleteStd(std.id)}} className='btn text-decoration-none text-danger'>
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








import { useState } from "react";
import "./confirm.css"
var Confirmbox = (props)=>{
    const [vis, setVise] =useState(false);

    const setView =(props)=>{
        if(props.vise=== true){
            setVise(true);
        }
        
        if(vis){
            document.getElementById("box").style.display ="none";
            return true;
        }else{
            document.getElementById("box").style.display ="none";
            return false;
        }
        
        
    }

    return(
        <div className="confirm-box" id="box" style={{"display":"none"}}>
        <div className="container text-center text-light">
            <div className="row">
                <div className="col-md-4 offset-8">
        <div className='card bg-secondary'>
            <div className='card-body text-center'>
                <h1><i className='fa fa-trash'></i></h1>
                <h3>Are you sure to want Delete the Student?</h3>
            </div>
            <div className='card-footer'>
            <div className='row'>
                <div className="col btn text-light" onClick={()=>setView(true)} style={{"background-color":"#333333"}} >
                    Yes
                </div>
                <div className="col btn text-light" onClick={setView} style={{"background-color":"#555555"}} >
                    No
                </div>
            </div>
            </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    );
}
export  default Confirmbox;

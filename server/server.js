const express = require('express');
const cors = require('cors');
const mysql = require('mysql');


const app = express();
const PORT = process.env.PORT | 3002;
app.use(cors({origin: true, credentials: true}));
app.use(express.json());

const connection = mysql.createConnection({
    host: "localhost",   user: "sha",   password: "Asdf@1234",    database: "studentDB"
})
connection.connect((err)=>{
    if(err)throw err;
    console.log("Connection successfull");
});



app.get("/students/",(req,res)=>{
    let sql = "SELECT * FROM students";
    connection.query(sql,(err,result)=>{
        if(err){
            console.log(err);
                    }else{
                        res.send(result);
                    }
        
    });
});
app.get("/students/:id", (req,res)=>{
    let sql = "SELECT * FROM students WHERE id="+req.params.id;
    connection.query(sql, (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result[0]);
        }
        // console.log(res.data);
    });
})
app.delete("/students/:id",(req,res)=>{
let sql = "DELETE FROM students WHERE id="+req.params.id;
connection.query(sql,(err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Delted "+result.affectedRows);
        
    }
})
});
app.put("/update/:id",(req,res) =>{
    let std1=   {
        
        fname:req.body.fname,
        lname:req.body.lname,
        location: req.body.location,
        email:req.body.email,
        dob:req.body.dob,
        education:req.body.education,
        about:req.body.about
        
        };
        
        
        // const std = [std1.fname,std1.lname,std1.location,std1.dob,std1.education,std1.about];
        // const sql = "UPDATE students SET fname=?, lname=?, .. WHERE id="+req.params.id;
        // const sql =`UPDATE students SET fname=${std1.fname}, lname=${std1.lname}, location=${std1.location}, dob=${std1.dob},  education=${std1.education}, about=${std1.about} WHERE id=`+req.params.id;
        const sql = "UPDATE students SET ? WHERE id="+req.params.id;
        connection.query(sql,std1,(err,result)=>{
            if(err){
                return console.error(err);
            }
                console.log(err);
            console.log(result.affectedRows+"Reord updated");
            
            res.send(res.status);
        });
    
    
});
app.post("/addSTD",(req,res)=>{
let std1=    {
    
    fname:req.body.fname,
    lname:req.body.lname,
    location: req.body.location,
    email:req.body.email,
    dob:req.body.dob,
    education:req.body.education,
    about:req.body.about
    
    };
    let sql ="INSERT INTO students SET?"
    connection.query(sql,std1,(err)=>{
        if(!err){
            console.log("One record added into students table");
            
        }
        res.send("One record Added");
    });
    
});


app.listen(PORT,()=>{
    console.log("server running on PORT : " + PORT);
});



const express = require('express');
const cors = require('cors');
const mysql = require('mysql');


const app = express();
const PORT = process.env.PORT | 3002;
app.use(cors());
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
            console.log(result[0]);
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
        console.log(res);
    }
})
});
app.put("/update/:id",(req,res) =>{
    let std1=    {
        id:req.body.id,
        fname:req.body.fname,
        lname:req.body.lname,
        location: req.body.location,
        email:req.body.email,
        dob:req.body.dob,
        education:req.body.education,
        about:req.body.about
        
        };
        let sql = "UPDATE students SET fname ="+fname+ "WHERE id="+std1.id;
        connection.query(sql,std1,(err)=>{
            if(!err){
                console.log("One record Updated");
                
            }
            res.send("One record updatad");
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


/////////////////////////////////////
const stdlist = [
    {
id:1,
fname:"Abhi",
lname:"Krish",
location: "Bangalore",
email:"abhi@gmail.com",
dob:"20-02-1996",
education:"Bsc",
about:"I'm a Full stack Developer"

},
{
    id:2,
    fname:"Shalini",
    lname:"Krish",
    location: "Bangalore",
    email:"abhi@gmail.com",
    dob:"20-02-1996",
    education:"Bsc",
    about:"I'm a Full stack Developer"
    
    },
    {
        id:3,
        fname:"Arjun",
        lname:"Krish",
        location: "Bangalore",
        email:"abhi@gmail.com",
        dob:"20-02-1996",
        education:"Bsc",
        about:"I'm a Full stack Developer"
        
        },
        {
            id:4,
            fname:"Jeyanthi",
            lname:"Krish",
            location: "Bangalore",
            email:"abhi@gmail.com",
            dob:"20-02-1996",
            education:"BE",
            about:"I'm a Full stack Developer"
            
            }
    
];

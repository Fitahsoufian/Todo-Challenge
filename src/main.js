const mysql = require('mysql');
const http = require('http');
const Project = require('../models/projectModel');
const { getProj,createProj, deleteProj, updateProj } = require('../controllers/projectController');
const Task = require('../models/taskModel');
const { getTask,createTask, deleteTask, updateTask } = require('../controllers/taskController');





const server = http.createServer((req,res)=>{
    if(req.url === "/api/projects" && req.method ==="GET"){
        getProj(req,res)

        }
        
        else if(req.url.match(/\/api\/projects\/([0-9]+)/) && req.method === "GET"){
            // id = req.url.split("/")[3]
            // getProj(req,res,id)
        }
        
        else if(req.url === "/api/projects" && req.method === "POST"){
            createProj(req,res)
        }
        
        else if(req.url.match(/\/api\/projects\/([0-9]+)/) && req.method === "PUT"){
            id = req.url.split("/")[3]
            updateProj(req,res,id)
        }
        
        else if(req.url.match(/\/api\/projects\/([0-9]+)/) && req.method === "DELETE"){
            id = req.url.split("/")[3]
            deleteProj(req,res,id)
        }
        else if(req.url === "/api/tasks" && req.method ==="GET"){
            getTask(req,res)
        }
        else if(req.url.match(/\/api\/tasks\/([0-9]+)/) && req.method === "GET"){
            id = req.url.split("/")[3]
            getTask(req,res,id)
        }
        
        else if(req.url === "/api/tasks" && req.method === "POST"){
            createTask(req,res)
        }
        
        else if(req.url.match(/\/api\/tasks\/([0-9]+)/) && req.method === "PUT"){
            id = req.url.split("/")[3]
            updateTask(req,res,id)
        }
        
        else if(req.url.match(/\/api\/tasks\/([0-9]+)/) && req.method === "DELETE"){
            id = req.url.split("/")[3]
            deleteTask(req,res,id)
        }
        else {
            res.writeHead(404,{"content-type":"application/json"})
            res.end(JSON.stringify({message: "NOT FOUND"}))
            
        }
        
        
    })
    
    const PORT = 8080
    
    server.listen(PORT)
    
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'node.js',
        multipleStatements: true
    
    });
     connection.connect((err) => {
        if (err){
            console.log(err)
        };
        console.log('Connected!');
    });
    




module.exports = {
    connection,
}
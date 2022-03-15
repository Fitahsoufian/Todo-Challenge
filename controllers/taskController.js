const Task = require("../models/taskModel")
const qs = require("query-string")

let createTask = (req,res)=>{
    let body = ''
    var tasks
    req.on('data',(chunk)=>{
        body += chunk
    }).on('end',async()=>{
        tasks = qs.parse(body);
        let name = tasks.name
        let description = tasks.description
        console.log(description)
        let task = new Task
        
        createTask = await task.create(name,description)
        res.writeHead(200,{ 'Content-Type': 'application/json' })
        res.end()
    })
    

}

module.exports = {
    createTask
    
}
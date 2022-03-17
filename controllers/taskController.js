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
let getTask = async (req,res) => {
   try{
    let getAll = new Task
    allTask = await getAll.getAll()
    res.writeHead(200,{ 'Content-Type': 'application/json' })
    res.end(JSON.stringify(allTask))} 
    catch (error) {
    console.log(error)
}
}
let updateTask = (req,res)=>{

    try {
        let body = ''
        let  task
        req.on('data',(chunk)=>{
            body += chunk
        }).on('end', async ()=>{
            task = qs.parse(body)
            let key
            let value
            console.log(task)
            for (var k of Object.keys(task)) {
                key = k
                value = task[key]
                console.log(key + " -> " + task[key])
                console.log(k+"/"+value)
            }
            let tas = new Task
            updateTask = await tas.update(id,k,value)
            res.writeHead(200,{ 'Content-Type': 'application/json' })
            res.end(JSON.stringify(updateTask))
            console.log(updateTask);
        })

        
    } catch (error) {
        console.log(error)
        
    }   
}

module.exports = {
    createTask,
    getTask,
    updateTask
}
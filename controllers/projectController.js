const Project = require("../models/projectModel");
const qs = require("query-string")

let createProj = async (req,res)=>{
    try {
        let body = ''
        var project
        req.on('data',(chunk)=>{
            body += chunk
        }).on('end', async ()=>{
            project = qs.parse(body);
            let name = project.name
            let description = project.description
            let proj = new Project            
            createProje = await proj.create(name,description)
            res.writeHead(200,{ 'Content-Type': 'application/json' })
            res.end(JSON.stringify(createProje))
        })
    } catch (error) {
        console.log(error)
        
    };    
}
let getProj = async (req,res) => {

    try {
        let getAll = new Project
        allProj = await getAll.getAll()
        res.writeHead(200,{ 'Content-Type': 'application/json' })
        res.end(JSON.stringify(allProj))
        
    } catch (error) {
        console.log(error)
    }


} 
let updateProj = async (req,res,id)=>{

    try {
        let body = ''
        let  project
        req.on('data',(chunk)=>{
            body += chunk
        }).on('end', async ()=>{
            project = qs.parse(body)
            let k
            let value
            console.log(project)
            for (var key of Object.keys(project)) {
                k = key
                value = project[key]
                console.log(key + " -> " + project[key])
                console.log(k+"/"+value)
            }
            let proj = new Project
            updateProje = await proj.update(id,k,value)
            res.writeHead(200,{ 'Content-Type': 'application/json' })
            res.end(JSON.stringify(updateProje))
        })

        
    } catch (error) {
        console.log(error)
        
    }   
}
module.exports = {
    createProj,
    getProj,
    updateProj
    
    
    
}
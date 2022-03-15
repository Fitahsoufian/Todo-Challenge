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
        
    }
    

        
    
}
module.exports = {
    createProj,
    
    
    
}
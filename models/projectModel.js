const mysql = require('mysql');


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

class Project {
    getAll = ()=>{
        return new Promise((resolve,reject)=>{
            let sql = "SELECT * FROM projects"
            connection.query(sql,(err,result)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(result) 
                }
            })


        })


    }

    create = (name,description)=>{

            return new Promise((resolve,reject)=>{
                let sql = `INSERT INTO projects(name,description) VALUES("${name}","${description}")`
                let create = connection.query(sql,(err,result)=>{
                    if(err){
                        reject(err)
                    }
                    resolve(result)
                    })                 
            })

    }


    update = (id, key, value)=>{
        
        return new Promise((resolve,reject)=>{
            let sql = `UPDATE projects SET ${key} = "${value}" WHERE id = "${id}"`
            let update = connection.query(sql,(err,result)=>{
                if(err){
                    reject(err)
                }
                    resolve(result)
            })
        })
        

        
    }


    delete = (id)=>{
        return new Promise((resolve,reject)=>{
            let sql = `DELETE FROM projects WHERE id = "${id}"`
            
            connection.query(sql,(err,result)=>{
                if(err){
                    reject(err) 
                }
                    resolve(result)
            })
        })        
    }
}












module.exports = Project



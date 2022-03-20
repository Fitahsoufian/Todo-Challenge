const chai = require('chai');
const chaiHttp = require('chai-http') 
const server = require('../src/main') 

chai.should();

chai.use(chaiHttp);

describe('Projects API', () => {
    //test the GET route
describe("Get /api/projects", ()=>{
    it("It should Get all task from Database", (done)=>{ 
        chai.request(server)
        .get("/api/projects")
        .end((err, response) =>{
            response.should.have.status(200);
            response.body.should.be.a('array')
            done();
        })

    })
})


    //test the POST route 
    describe("POST /api/projects", ()=>{
        it("It should POST a new task to Database", (done)=>{
            const task = {
                name: "",
                description: ""
            };
            chai.request(server)
            .post("/api/projects")
            .send(task)
            .end((err, response) =>{
                response.should.have.status(200);
                response.body.should.be.a('object');
                response.body.should.be.property('id');
                response.body.should.be.property('name');
                response.body.should.be.property('description');
                done();
            })
        })
        
    })



    //test the PUT route

    describe("PUT /api/projects", ()=>{
        it("It should PUT a new task to Database", (done)=>{
            const task = {
                name: "",
                description: ""
            };
            chai.request(server)
            .put("/api/projects/" + taskId)
            .send(task)
            .end((err, response) =>{
                response.should.have.status(200);
                response.body.should.be.a('object');
                response.body.should.be.property('id');
                response.body.should.be.property('name');
                response.body.should.be.property('description');
                done();
            })
        })
        
    })



    //test the Delete route

    describe("DELETE /api/projects", ()=>{
        it("It should DELETE a new task to Database", (done)=>{
            const taskId = 1;
            chai.request(server)
            .delete("/api/projects" + taskId)
            .end((err, response) =>{
                response.should.have.status(200);
                done();
            })
        })
        
    })

})
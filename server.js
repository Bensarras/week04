
const express = require('express');
const app = express();
const Server_Port = 8088;

app.get('/', (req, res) => {
  res.send('<h1>GET - Hello World!</h1>');
});

app.post('/', (req, res) => {
  res.send('<h1>POST - Hello World!</h1>');
});




//http://localhost:8088/name

app.post('/name', (req, res) => {
  res.send('<h1>POST - Hello World!</h1>');
});
app.get('/student', (req, res) => {
    var student ={
        id: 1,
        name: "John",
        last_name: "Doe",
        result: "fail"
    }

    res.send(JSON.stringify(student));
    //res.send(student);
});
//http://localhost:8088/person/1/John
app.get("/person/:pid/:name", (req, res) => {
    const person =  req.params.pid
    const name = req.params.name
    res.send({person,
            name}) })

//http://localhost:8088/person?pid=1&name=John
app.get("/person", (req, res) => {
    const person =  req.query.pid
    const name = req.query.name
    console.log(req.query)
    res.send({person,
            name}) })

app.listen(Server_Port, () => {
  console.log(`Server is running at http://localhost:${Server_Port}/`);
});
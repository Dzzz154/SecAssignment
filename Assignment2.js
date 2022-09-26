const secAssignment = require("express");

const app = secAssignment();


app.get("",(req,res) => {
    res.send( "<h1>Hello World</h1>")
 })

 app.get("/more",(req,res)=>{
    res.sendFile(__dirname + "/random1.html")
 })

app.get("/Home", (req,res)=> {
    res.sendFile(__dirname + "/random2.html")
})

app.get("/about", (req,res) => {
    res.sendFile(__dirname + "/random3.html")
})

app.get("/anothersite", (req,res)=> {
    res.sendFile(__dirname + "/random4.html")
})


app.listen(3000, () => {
    console.log("Sever starting up at: port:3000")
})


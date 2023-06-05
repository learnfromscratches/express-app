const express = require("express")

const app = express();
const middleWare = (req,res,next) =>{
    console.log(req.url)
    console.log(req.method)
    next();
}

app.use(express.static("public")); //To make the files for public folder accessible for users
app.use(express.json());

app.get('/',(req,res)=>{
    res.sendFile('index.html')
})

app.post('/submit',(req,res)=>{
    res.send("Dear user, you have selected the contact us option")
    console.log(req.body)
})
app.get('/contact',middleWare,(req,res)=>{
    res.sendFile(__dirname + '/public/contact.html')
})

app.get("/submit/admin",(req,res)=>{
    res.send("Welcome to the admin panel")
})

app.get("/submit/:id",(req,res)=>{
    const params = req.params.id;
    res.send(`Welocme  ${params}`)
})

app.listen(3000,()=>{
    console.log("The server is running on the port 3000")
})
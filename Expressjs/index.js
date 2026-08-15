const express = require("express");
const app = express();

// console.dir(app);

let port = 8080;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

// app.use usually sends response to all requests made to the server.

// app.use((req,res)=>{
//     console.log("Request Received.");
//     res.send({
//         name:"Priyanshu Jha",
//         age:22
//     });
// })

// ROUTING
// Process of Defining Paths in a Network Application
app.get("/",(req,res)=>{
    res.send("Route Path");
});

// app.get("/about",(req,res)=>{
//     res.send("About Route");
// });

// app.get("/contact",(req,res)=>{
//     res.send("Contact Route");
// });

// For all Undefined Paths in Latest Methods
// app.get('/*splat',(req,res)=>{ 
//     res.send("404 Page Not Found");
// });

// app.post("/login",(req,res)=>{
//     res.send("Login Route");
// });

// app.put("/update",(req,res)=>{
//     res.send("Update Route");
// });

// app.delete("/delete",(req,res)=>{
//     res.send("Delete Route");
// });

// Path Parameters

// app.get("/:username/:id",(req,res)=>{
//     console.log(req.params);
//     let {username,id} = req.params;
//     res.send(`Welcome ${username}, Your ID is ${id}`);
// });

// Query String Parameters

app.get("/search",(req,res)=>{
    let {q} = req.query;
    // console.log(req.query);
    if(q==undefined){
        res.send("Please provide a search query.");
    }
    res.send(`Search Results for ${q}`);
});
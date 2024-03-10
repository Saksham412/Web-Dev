const mongoose = require("mongoose")
const express = require("express")
mongoose.connect("mongodb+srv://admin:2mtgUWBXp7yVvT5J@cluster0.ohjymd8.mongodb.net/")

const app = express()
app.use(express.json()) 
const User = mongoose.model('Users', { name: String, email: String, password: String });

app.post("/signup", async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;
    const email = req.body.email;

    const existingUser = await User.findOne({email:email});

    if(existingUser) return res.send({"message":"User already exists!"});

    const user = new User({ 
        username: username, 
        email:email, 
        password: password,
        name: name,
    });
    user.save();

    res.json({
        "msg":"User created succesfully!"
    })
})

app.listen(3000)
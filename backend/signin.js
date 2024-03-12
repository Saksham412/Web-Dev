const express = require("express")
const z = require('zod')
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const jwtPassword = "12345"

mongoose.connect("mongodb+srv://admin:2mtgUWBXp7yVvT5J@cluster0.ohjymd8.mongodb.net/")

const app = express();

const schema = z.object({
    username: z.string().email(),
    password:z.string().min(6),
    name: z.string()
});

const User = mongoose.model('Users', { username: String, name: String, password: String });

function userValidation(req,res,next) {
    const inputs = req.body;
    const response = schema.safeParse(inputs)
    if(response.success == false){
        return  res.status(400).send(response.error);
    }else{
        next()
    }
}


app.use(express.json())
app.use(userValidation);

app.post('/signin',async (req,res)=>{
    const username = req.body.username;
    const name = req.body.name;
    const password = req.body.password;
    const existingUser = await User.findOne({username:username});

    if(existingUser) return res.send({"message":"User already exists!"});

    var token = jwt.sign({username:username}, jwtPassword)

    const user = new User({ 
        username: username, 
        password: password,
        name: name,
    });

    user.save()

    res.json({
        "msg":"User created succesfully!"
    })
})

app.listen(3000)
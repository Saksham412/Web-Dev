const express = require("express")
const jwt = require('jsonwebtoken')
const jwtPassword = "123456"

const app = express()
app.use(express.json())

const ALL_USERS = [
    {
        username: "saksham@gmail.com",
        password: "password123",
        name: "saksham"

    },
    {
        username: "gaurav@gmail.com",
        password: "password1234",
        name: "gaurav"

    },
    {
        username: "sudhanshu@gmail.com",
        password: "password12345",
        name: "sudhanshu"

    },
]

function userExists(username, password){

    let userExists = false;
    for (let i=0;i<ALL_USERS.length;i++){
        if(ALL_USERS[i].username==username && ALL_USERS[i].password==password){
            userExists=true;
            break;
        }
    }
    return userExists;

}

app.post("/signin", (req,res) => {
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username, password)){
        return res.status(403).json({
            msg:"User doesnt exist!"
        });
    }

    var token = jwt.sign({username:username}, jwtPassword)
    return res.json({
        token,
    })
});

app.get("/users",(req,res)=>{
    const token = req.headers.authorization;
    const decoded = jwt.verify(token,jwtPassword)

    const username = decoded.username;

    return res.json({
        users:ALL_USERS.filter((value)=>{
            if(value.username==username){
                return false;
            }else{
                return true;
            }
        })
    })
})

app.listen(3000)
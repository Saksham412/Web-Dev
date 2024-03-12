const express = require('express')
const app = express()
const z = require("zod")

const schema = z.object({
    email: z.string().email(),
    password:z.string().min(8)
})
app.use(express.json())

app.post('/health-checkup',(req,res)=>{
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys)
    res.send({
        response
    })
});
app.post('/login',(req,res)=>{
    const inputs = req.body;
    const response = schema.safeParse(inputs)
    res.send({
        response
    })
})

app.listen(3000);
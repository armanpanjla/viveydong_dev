import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express()

app.get('/' , (req,res) =>{
    res.send("taskvive api")
})

const port = process.env.PORT;
app.listen(port , () =>{
    console.log(`server is running on port http://localhost:${port}`)
})



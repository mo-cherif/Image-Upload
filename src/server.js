import express from 'express';
import studentRouter from '../student/route.js';


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get("/", (req,res) => {
    console.log("Hello from express 😁");
    res.json({message: "hello"}).status(200);
})

app.use('/api', studentRouter);

export default app;
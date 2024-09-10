import express from 'express';
import userRouter from './routes/user.router.js'
import cors from 'cors';



const app = express();

app.use(express.json());
app.use(cors());

app.use('/api',userRouter)

app.listen(4000,()=>{
    try {
        console.log('Server is created localhost:4000');
        
    } catch (error) {
        console.log(error);
        
    }
    
})
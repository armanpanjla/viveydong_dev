import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js'
import animeRoutes from './routes/animeRoutes.js'
import connectDB from './config/db.js';
dotenv.config();


const app = express();
connectDB();
app.use(express.json());

app.use('/api', userRoutes);
app.use('/api/collection', animeRoutes);


const port = process.env.PORT;
app.listen(port, () => {
    console.log(`server is running on port http://localhost:${port}`)
})
const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const connectDB = require('./config/db');
connectDB();
const limiter = rateLimit({
    windowMs : 15*60*1000,
    max:100,
    message: "Too many requests"
});
const port = process.env.PORT||5000;
const {errorHandler} = require('./middleware/errorMiddleware');
const app = express();
app.use(limiter);
app.use(cors({
    origin:'http://localhost:5173'
}));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/api/goals',require('./routes/goalRoutes'));
app.use('/api/users',require('./routes/userRoutes'));
app.use(errorHandler);
app.listen(port,()=>{
    console.log(`Server started on port ${port}`)
}); 

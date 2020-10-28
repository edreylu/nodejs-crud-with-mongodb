import usersRoutes from './routes/users.js';
import indexRoutes from './routes/index.js';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

//ROUTES
app.get('/', indexRoutes);
app.use('/users', usersRoutes);

//connection to MongoDB
mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => console.log('Connected to mongodb!!')
);

app.listen(PORT, () => console.log(`server running on port: http://localhost:${PORT}`));



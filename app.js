import usersRoutes from './routes/users.js';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
require('dotenv/config');
const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use('/users', usersRoutes);

app.get('/', (req, res) => res.send('hello from Homepage!!!'));

//connection to MongoDB
mongoose.connect(process.env.DB_CONNECTION, 
{useNewUrlPerser : true} ,() => console.log('Connected to mongodb!!')
);

app.listen(PORT, () => console.log(`server running on port: http://localhost:${PORT}`));



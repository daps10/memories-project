import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

// routes
app.use('/posts', postRoutes);

// middlewares
app.use(express.json({ limit: '50mb' }));
app.use(cors());

const CONNECTION_URL= "mongodb+srv://daps:YpGY8a1Ow9rg5RZf@cluster0.nrn2f.mongodb.net/memoriesProject?retryWrites=true&w=majority";

const PORT= process.env.PORT || 5000;

mongoose.set('strictQuery', false);
mongoose.connect(CONNECTION_URL)
.then(() => app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`)))
.catch((error) => console.log(error.message));


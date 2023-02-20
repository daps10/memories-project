import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

// middlewares
app.use(express.json({ limit: '50mb' }));
app.use(cors());
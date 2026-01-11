import express from 'express';
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';
import errorMiddleware from './middlewares/error.middleware.js';

const app = express();

// Middlewares
app.use(express.json());

// Routes
app.use('/api', authRoutes);
app.use('/api', userRoutes);

// Error handling
app.use(errorMiddleware);

export default app;

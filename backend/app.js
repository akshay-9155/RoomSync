import express from 'express'
import cors from 'cors';

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({
    limit: "16kb"
}));

import authRouter from './routes/auth.route.js';
import userRouter from './routes/user.route.js';

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);

import pageNotFound from './middlewares/pageNotFound.middleware.js';
import errorHandler from './middlewares/error.middleware.js';

app.use(pageNotFound);
app.use(errorHandler);

export { app };
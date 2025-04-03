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

app.get("/", (req, res) => {
    res.json({ "message": "You are on homepage." });
})


import pageNotFound from './middlewares/pageNotFound.middleware.js';
import errorHandler from './middlewares/error.middleware.js';

app.use(pageNotFound);
app.use(errorHandler);

export { app };
import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.json({"message":"Server is Live"});
})

app.listen("5000");
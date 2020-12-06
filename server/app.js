import express from "express";
import data from "./data.js";
import cors from "cors";

const app = express();

app.use(cors({ origin: true, credentials: true }));

app.get("/api/products", (req, res) => {
    res.send(data.products);
});

app.get("/", (req, res) => {
    res.send("Successfully connected to the server");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server's on port ${port}`);
});
import express from "express";
import data from "./data.js";
import cors from "cors";

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use("/static", express.static('public'))

app.get("/api/products", (req, res) => {
    res.send(data.products);
});

app.get("/api/products/:id", (req, res) => {
    const ID = req.params.id;
    const result = data.products.find((product) => {
        return product._id == ID;
    })
    result ? res.send(result) : res.status(404).send("Product information not found")
})

app.get("/", (req, res) => {
    res.send("Successfully connected to the server");
});



let port = process.env.PORT;
if (port == null || port == "") {
    port = 8000;
};
app.listen(port, () => {
    console.log(`Server's on port ${port}`);
});
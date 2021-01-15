// require statements and imports at the top
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


// create my express app
const app = express();

// config middleware and settings
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost/drink-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const DrinkSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [2, "Your drink name must be two or more characters!"]
    },
    type: String,
    taste: String,
    amount: Number
}, {timestamps: true});

const Drink = mongoose.model("Drink", DrinkSchema);



// routes in the middle
app.get("/", (req, res) => {
    res.json({message: "Hello world!"});
})

app.get("/drinks", (req, res) => {
    Drink.find()
        .then(data => {
            console.log(data);
            res.json(data);
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        })
})

app.post("/drinks", (req, res) => {
    Drink.create(req.body)
        .then(data => {
            console.log(data);
            res.json(data);
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        })
})



// listen statement at the bottom
app.listen(8080, () => {
    console.log("Listening on port 8080!");
});
// require statements and imports at the top
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


// create my express app
const app = express();

// config middleware and settings
app.use(cors());
app.use(express.json());

// database connection
mongoose.connect("mongodb://localhost/drink-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// schema
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

// model object
const Drink = mongoose.model("Drink", DrinkSchema);



// routes
// get all drinks
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


// create new drink
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

// find one by id
app.get("/drinks/:id", (req, res) => {
    Drink.findOne({"_id": req.params.id})
        .then(data => {
            console.log(data);
            res.json(data);
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        })
})

app.put("/drinks/:id", (req, res) => {
    Drink.findOneAndUpdate({"_id": req.params.id}, req.body)
        .then(data => {
            console.log(data);
            res.json(data);
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        })
})

app.delete("/drinks/:id", (req, res) => {
    Drink.deleteOne({"_id": req.params.id})
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
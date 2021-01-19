const mongoose = require("mongoose");
const Todo = mongoose.model("Todo");

module.exports = {
    create: (req, res) => {
        Todo.create(req.body)   // trip to the DB
            .then(item => {    // on success
                console.log(item);
                res.json(item);
            })
            .catch(err => {  // on failure
                console.log(err);
                res.status(400).json(err);
            })
    },
    findAll: (req, res) => {
        Todo.find()
            .then(todos => res.json(todos))
            .catch(err => res.status(400).json(err))
    },
    findOne: (req, res) => {
        Todo.findOne({_id: req.params.id})
            .then(todo => res.json(todo))
            .catch(err => res.status(400).json(err))
    },
    update: (req, res) => {
        Todo.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
            .then(todo => res.json(todo))
            .catch(err => res.status(400).json(err))
    },
    delete: (req, res) => {
        Todo.deleteOne({_id: req.params.id})
            .then(success => res.json(success))
            .catch(err => res.status(400).json(err))
    }
}
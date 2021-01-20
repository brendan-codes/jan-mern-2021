const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "You need a title!"],
        minlength: [3, "Todo titles must be 3 or more characters!"]
    },
    desc: {
        type: String,
        required: [true, "You need a desc!"],
        minlength: [6, "Todo desc must be 6 or more characters!"]
    },
    completed: {
        type: Boolean,
        default: false
    }
}, {timestamps: true})

mongoose.model("Todo", TodoSchema);
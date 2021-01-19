const mongoose = require("mongoose");
const db = "jan-todos"

mongoose.connect(`mongodb://localhost/${db}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
})
.then(() => console.log(`You have connected to ${db}!`))
.catch((err) => console.log(err))



require("../models/Todo");
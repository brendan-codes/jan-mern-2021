const todos = require("../controllers/todos");

module.exports = (app) => {
    app.get("/todos", todos.findAll);
    app.get("/todos/:id", todos.findOne);
    app.post("/todos", todos.create);
    app.delete("/todos/:id", todos.delete);
    app.put("/todos/:id", todos.update);
}
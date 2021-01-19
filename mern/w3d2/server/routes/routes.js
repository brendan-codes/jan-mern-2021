const todos = require("../controllers/todos");

module.exports = (app) => {
    app.get("/todos", todos.findAll);
    app.post("/todos", todos.create);
    app.get("/todos/:id", todos.findOne);
    app.delete("/todos/:id", todos.delete);
    app.put("/todos/:id", todos.update);
}
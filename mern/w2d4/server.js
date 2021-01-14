const express = require("express");
const faker = require("faker");
const app = express();

class Fake{
    constructor(){
        this.name = `${faker.name.jobTitle()} ${faker.name.findName()} ${faker.name.lastName()}`
        this.phrase = faker.hacker.phrase();
        this.data = faker.phone.phoneNumber();
    }
}


app.get("/api", (request, response) => {
    response.json({data: new Fake()});
})

app.post("/api", (req, res) => {
    res.json({message: "You have posted!!!"})
})


app.listen(8080, () => {
    console.log("App is running well on port 8080!");
})

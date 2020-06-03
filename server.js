const app = require("./app");

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.json({"data": "Hello World - docker-todo-node - test failed - should not deploy!!!"})
});

app.listen(PORT, () => {
    console.log("Server is up and running!!!!");
});

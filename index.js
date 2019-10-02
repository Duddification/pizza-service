const express = require('express');

const port = 8080;
const app = express();

const pizzas = [
    {
        id: 1,
        name: "hawiian",
        size: 12,
        spicy: true
    },
    {
        id: 2,
        name: "meat feast",
        size: 24,
        spicy: false
    },
    {
        id: 3,
        name: "veggie",
        size: 24,
        spicy: false
    },
    {
        id: 4,
        name: "spicy veg",
        size: 12,
        spicy: true

    }

];

app.get('/pizzas', (req, resp) => {
    console.log('Returning pizzas');
    resp.setHeader('Content-Type', 'application/json');
    resp.send(pizzas);
});

app.get('./pizzas/*', (req, resp) => {

    const id = parseInt(req.params[0]);

    console.log('Endpoint /pizzas/${id} hit');

    const pizza = pizzas.find(pizza => pizza.id === id);

    

    resp.setHeader('Content-Type', 'application/json');
//    resp.send(pizzas);

    if (pizza) {
        resp.send(pizza);
    } else {
        resp.status(404).send(`{error:"Pizza with ID ${id} not found"}`);
    }
});

console.log(`server listening on ${port}`);
app.listen(port);
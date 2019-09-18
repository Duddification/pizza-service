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
    }

];

app.get('/pizzas', (req,resp)=> {
    console.log('Returning pizzas');
    resp.setHeader('Content-Type','application/json');
    resp.send(pizzas);
});

console.log(`server listening on ${port}`);
app.listen(port);
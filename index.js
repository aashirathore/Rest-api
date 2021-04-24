
const express = require('express'); 
const Joi = require('joi'); 
const app = express(); 
app.use(express.json()); 
 
const customers = [
{title: 'George', id: 1},
{title: 'Josh', id: 2},
{title: 'Tyler', id: 3},
{title: 'Alice', id: 4},
{title: 'Candice', id: 5}
]
 

app.get('/', (req, res) => {
res.send('Welcome to REST API!');
});
app.get('/api/customers', (req,res)=> {
res.send(customers);
});
app.get('/api/customers/:id', (req, res) => {
const customer = customers.find(c => c.id === parseInt(req.params.id));
if (!customer) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Ooops... Cant find what you are looking for!</h2>');
res.send(customer);
});
 

app.post('/api/customers', (req, res)=> {
 

const customer = {
id: customers.length + 1,
title: req.body.title
};
customers.push(customer);
res.send(customer);
});
 
//Update Request Handler
// Update Existing Customer Information
app.put('/api/customers/:id', (req, res) => {
const customer = customers.find(c=> c.id === parseInt(req.params.id));
if (!customer) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Not Found!! </h2>');
 

 
customer.title = req.body.title;
res.send(customer);
});
app.delete('/api/customers/:id', (req, res) => {
 
    const customer = customers.find( c=> c.id === parseInt(req.params.id));
    if(!customer) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Not Found!!</h2>');
     
    const index = customers.indexOf(customer);
    customers.splice(index,1);
     
    res.send(customer);
    });
     
    const port = process.env.PORT || 6050;
    app.listen(port, () => console.log(`Listening on port ${port}..`));
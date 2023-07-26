// Import the express library
import express from 'express';

// Instantiate Express
const app = express();

app.get('/', (req, res, next) => {
    console.log("Hello My Server is Running" + new Date());
    res.send('Hello My Server is Running' + new Date());
}); 
app.get('/hello', (req, res, next) => {
    console.log("Hello Express!" + new Date());
    res.send('Hello Express!' + new Date());
}); 

const names = {1: 'John', 2: 'Jane', 3: 'Joe'};

app.get('/hello/:id', (req, res, next) => {
    res.send(`Hello ${names[req.params.id]}` + new Date());
});

// Configure the port to listen on
const PORT = process.env.PORT || 4001;

// Call the listen() method on the server object
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/', (req,res) => res.send("I work!"));

app.get('/Home', (req,res) => res.sendFile(__dirname, './Home.html'));    //HOME PAGE
app.get('/Make', (req,res) => res.sendFile(__dirname, './Make.html'));   //ADD A RESERVATION PAGE
app.get('/View', (req,res) => res.sendFile(__dirname, './View.html'));  //VIEW RESERVATIONS AND WAITLIST


//this is for getting reservations
//should pull from reservation Array
//DO THE SAME WITH WAITLIST 
//use star wars as reference

app.get('/api/reservations/:reservation', (req, res) => {

})




const reservations = [];
 
const waitList = [];

//res.sendFile(path.join(__dirname,'home.html')));

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
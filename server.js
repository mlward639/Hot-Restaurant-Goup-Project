const express = require('express');
const path = require('path');
const { inherits } = require('util');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/', (req,res) => res.sendFile(path.join(__dirname, './Home.html')));    //HOME PAGE
app.get('/Make', (req,res) => res.sendFile(path.join(__dirname, './Make.html')));   //ADD A RESERVATION PAGE
app.get('/View', (req,res) => res.sendFile(path.join(__dirname, './View.html')));  //VIEW RESERVATIONS AND WAITLIST

<<<<<<< HEAD

const reservations = [
    {
        routeName: '',
        name: '',
        phone: '',
        email: '',
        uID: '',
    },
];

const waitList = [
    {
        name: '',
        phone: '',
        email: '',
        uID: '',
    },
];
=======
const reservations = [];

//example reservation
    // {
    //     routeName: '',
    //     name: '',
    //     phone: '',
    //     email: '',
    //     uID: '',
    // },

const waitList = [];

    // {
    //     name: '',
    //     phone: '',
    //     email: '',
    //     uID: '',
    // },
>>>>>>> 97b84db6032ea2d305304202dab368a281b453fa

//this is for getting reservations
//should pull from reservation Array
//DO THE SAME WITH WAITLIST 
//use star wars as reference

app.get('/api/reservations', (req, res) => res.json(reservations));
<<<<<<< HEAD

app.get('/api/waitList', (req, res) => res.json(waitList));

// if(reservations.length < 5){
// app.post('/api/reservations', (req, res) )
//     const newReservation = req.body;

//     newReservation.routeName = newReservation.name.replace(/\s+/g, '').toLowerCase();
//     console.log(newReservation);
// }
// else
// app.post('/api/waitlist', (req,res) =>  {

// })
=======

app.get('/api/waitList', (req, res) => res.json(waitList));

app.post('/api/reservations', (req, res) => {
    const newReservation = req.body;

    console.log(newReservation);
    reservations.push(newReservation);
    res.json(newReservation);
});

<<<<<<< HEAD
// else
// app.post('/api/waitlist', (req,res) =>  {

// // })
>>>>>>> 97b84db6032ea2d305304202dab368a281b453fa
=======
app.post('/api/waitList', (req,res) =>  {
    const newWaitList = req.body;
>>>>>>> 3faa1d0a07001942f55e7c0e8ece49b382587f5e

    console.log(newWaitList);
    waitList.push(newWaitList);
    res.json(newWaitList);
 })

// //res.sendFile(path.join(__dirname,'home.html')));

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));



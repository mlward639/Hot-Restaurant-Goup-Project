const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/', (req,res) => res.send("I work!"));

//res.sendFile(path.join(__dirname,'home.html')));

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
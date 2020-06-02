const express=require('express');
const mongoose=require('mongoose');
const bodyparser=require('body-parser');
const cors=require('cors');
const path=require('path');

const app=express();

const route=require('./routes/route');

//testing server

const port=3000;

app.use(cors());
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', route);

app.get('/',(req,res)=>{
    res.send('Foobar');
})
app.listen(port,()=>{
    console.log('Server started at port:'+port);
});



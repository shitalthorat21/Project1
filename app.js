const express=require('express');
const mongoose=require('mongoose');
mongoose.Promise=global.Promise;
const bodyparser=require('body-parser');
const cors=require('cors');
const path=require('path');

const app=express();

const route=require('./routes/route');

//mongodb connection
mongoose.connect('mongodb://localhost:27017/contactlist',  { useNewUrlParser: true }, (err) =>
{
  if (!err) 
  {
      console.log("Success");
  }
  else{
    console.log("Error in conection");
  }
  
});



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



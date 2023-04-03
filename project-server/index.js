const express = require('express');
const db = require('./config/db')
const cors = require('cors')

const app = express();
const  PORT = 3030;
app.use(cors());
app.use(express.json())

// Route to get all athletes
app.get("/api/get", (req,res)=>{
db.query("SELECT * FROM athletes", (err,result)=>{
    if(err) {
    console.log(err)
    } 
res.send(result)
});   });


// Route for creating the athlete
app.post('/api/create', (req,res)=> {


const name = req.body.name;
const photoUrl = req.body.photoUrl;
const bio  =  req.body.bio;
const height  =  req.body.height;
const weight  = req.body.weight;
const age =  req.body.age;
const sport = req.body.sport;


db.query("INSERT INTO athletes (name, photoUrl, bio, height, weight, age, sport) VALUES (?,?,?,?,?,?,?)",[name, photoUrl, bio, height, weight, age, sport], (err,result)=>{
   if(err) {
   console.log(err)
   } 
   console.log(result)
});   })


// Route to delete a post

app.delete('/api/delete/:athleteNumber',(req,res)=>{
const athleteNumber = req.params.athleteNumber;

db.query("DELETE FROM athletes WHERE athleteNumber= ?", athleteNumber, (err,result)=>{
if(err) {
console.log(err)
        } }) })

app.listen(PORT, ()=>{
    console.log(`Server is running on port`)
})

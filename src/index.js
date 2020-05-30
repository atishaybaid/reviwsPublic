import { resolve } from 'upath';

const express = require('express');
const app = express();
const path = require('path');
const pug = require('pug');
const publicDirectoryPath = path.join(__dirname,'../src/public');
const fetch = require("node-fetch");
let Questions;
// const templatePath=path.join(__dirname,'../templates');

app.set('view engine','pug');
app.set('views',publicDirectoryPath);
app.use(express.static(publicDirectoryPath));

app.get('/form',async (req,res)=>{
    let Data;
    function myFetch(){
        var promise = new Promise((resolve,reject)=>{
            fetch('http://localhost:3000/api/v1/question/get',{
                method:'GET',
                headers:{
                    'Authorization':"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZWNmZjNjNDExMzM0ODU3OGMwM2NjZTUiLCJlbWFpbCI6InByYWRodW1hbkBnbWFpbC5jb20iLCJpYXQiOjE1OTA2ODY2NzIsImV4cCI6MTU5MDc3MzA3Mn0.1v-bszi3FJVFrhTo2Bin0z-k3432_-0BzJ8FFUNYVeA"
                }
            })
            .then((res)=>{
                res.json().then((data)=>{
                    Data=data;
                    console.log(data);
                    resolve(Data);
                })
            })
        })
        return promise;
    }
    Questions = await myFetch();
    // console.log(Questions.questions);
    Questions=Questions.questions;
    res.status(200);
    res.render('form',{
        questions:Questions
    });

})

app.post('/submitResponses',(req,res)=>{
    
})

app.listen(5000,()=>{
    console.log('Running on port 5000');
})

export default Questions;
"use strict";

const express = require('express');

const app = express();

const path = require('path');

const pug = require('pug');

const publicDirectoryPath = path.join(__dirname, '../src/public');

const fetch = require("node-fetch");

let Questions; // const templatePath=path.join(__dirname,'../templates');

app.set('view engine', 'pug');
app.set('views', publicDirectoryPath);
app.use(express.static(publicDirectoryPath));
app.get('/form', async (req, res) => {
  console.log("form c=roeuter called");

  try {
    var response = await fetch('http://localhost:3000/api/v1/question/get', {
      method: 'GET',
      headers: {
        'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZWFlN2YwYzAzOGM1ZDI5MDk4ZTczMzEiLCJlbWFpbCI6ImR1bW11eUlkODBAZ21haWwuY29tIiwiaWF0IjoxNTkwODIzOTk5LCJleHAiOjE1OTA5MTAzOTl9.JUN8TzX96x-szZ5y0_gGhO_PVeR_k7078851EqNvO2k"
      }
    });
    const data = await response.json();
    console.log("question data");
    console.log(data);
    const questions = data.questions;
    res.status(200);
    res.render('form', {
      questions: questions
    });
  } catch (error) {
    console.log("data fatching error");
    console.log(error);
  }
});
app.post('/submitResponses', (req, res) => {});
app.listen(5000, () => {
  console.log('Running on port 5000');
});
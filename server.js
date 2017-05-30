const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/pets', function (req, res, next) {
  // This GETS all the pets
  res.send(req.params);
});

app.get('/pets/:id', function (req, res, next) {
  // This GETS a specific pet based on the id
  res.send(req.params.id);
});

app.post('/pets', function(req, res, next) {
  // This CREATES a new pet
  res.send(req.body);
});

app.patch('/pets/:id', function(req, res, next) {
  // This UPDATES a specific pet based on id
  res.send(req.params.id);
});

app.delete('/pets/:id', function(req, res, next) {
  // This DELETES a specific pet based on id
  res.send(req.params.id);
});

app.use(function(req, res, next) {
  // This throws a 404 status code if not found
  res.sendStatus(404);
});

app.use(function(err, req, res, next) {
  // This throws a 500 status code for server error
  res.sendStatus(500);
});

app.listen(port, function() {
  console.log('Listening on Port:', + port);
});

module.exports = app;

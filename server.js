// Dependencies

import express from "express";
import bodyParser from "body-parser";

// Sets up the Express app
const PORT = process.env.PORT || 8080;
const app = express();

// Sets up express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// Sets up Handlebars

import exphbs from "express-handlebars";

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Sets up the static directory
app.use(express.static('public'));

// Import router
const htmlRoutes = require('./controllers/htmlController.js');

app.use(htmlRoutes);


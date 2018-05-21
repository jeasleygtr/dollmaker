"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require("morgan");

var _morgan2 = _interopRequireDefault(_morgan);

var _expressHandlebars = require("express-handlebars");

var _expressHandlebars2 = _interopRequireDefault(_expressHandlebars);

var _htmlController = require("./controllers/htmlController.js");

var _htmlController2 = _interopRequireDefault(_htmlController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Sets up the Express app
var PORT = process.env.PORT || 8080; // Dependencies

var app = (0, _express2.default)();

// Sets up express app to handle data parsing
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());

// Sets up Handlebars

app.engine('handlebars', (0, _expressHandlebars2.default)({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Sets up the static directory
app.use(_express2.default.static('public'));

// Import router


app.use(_htmlController2.default);

app.use(function (req, res, next) {
    res.status(404);

    res.render('404');
    return;
});

app.listen(PORT, function () {
    console.log('Server listening on: http://localhost:' + PORT);
});
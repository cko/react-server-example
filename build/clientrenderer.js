var React   = require('react');
var Bcomp = require('../myApp.js');

React.render(
  React.createElement(Bcomp, {
    items: [0, 1, '</script>', '<!--inject!-->']}
  ),
  document.body
);

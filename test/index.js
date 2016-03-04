var React = require('react');
var ReactDom = require('react-dom');
var ReactF1Graph = require('./..');

var container = document.body.appendChild(
  document.createElement('div')
);

render('out');
render('over', function() {
  render('out', function() {
    render('over');
  });
});

function render(state, onComplete) {
  ReactDom.render(
  <ReactF1Graph 
    go={state}
    onComplete={onComplete}
  />,
  container
);
}

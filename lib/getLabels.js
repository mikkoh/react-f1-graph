var React = require('react');

module.exports = function(props) {
  var labels = [];
  var position;

  for(var stateName in props.states) {
    position = props.states[ stateName ];

    labels.push(
      <div
        style={{
          position: 'absolute',
          left: position[ 0 ],
          top: position[ 1 ],
          fontFamily: props.fontLabel,
          color: props.colorLabel
        }}
      >
        { stateName }
      </div>
    );
  }

  return labels;
};
var React = require('react');
var getArrow = require('./getArrow');

module.exports = function(props) {
  return <svg
    key="lines"
    width={props.width}
    height={props.height}
    style={{
      position: 'absolute',
      left: 0,
      top: 0
    }}
  >
    {
      props.transitions
      .map(function(transition) {
        return getArrow(
          props,
          props.states[ transition.from ],
          props.states[ transition.to ],
          transition.bi
        )
      })
    }
  </svg>
};
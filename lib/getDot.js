var React = require('react');

module.exports = function(props) {
  return <svg 
    data-f1="dot"
    key="dot"
    width={props.sizeDot} 
    height={props.sizeDot}
    style={{
      position: 'absolute',
      left: 0,
      top: 0,
      marginLeft: props.sizeDot * -0.5,
      marginTop: props.sizeDot * -0.5
    }}
  >
    <circle
      fill={props.colorDot}
      cx={props.sizeDot * 0.5}
      cy={props.sizeDot * 0.5}
      r={props.sizeDot * 0.5}
    />
  </svg>;
};
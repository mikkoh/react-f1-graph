module.exports = function(positionStates) {
  var states = {};
  var position;

  for(var stateName in positionStates) {
    position = positionStates[ stateName ];

    states[ stateName ] = {
      dot: {
        style: {
          translate: position.slice()  
        }
      }
    };
  }

  return states;
};
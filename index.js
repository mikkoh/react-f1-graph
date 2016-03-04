var React = require('react');
var ReactF1 = require('react-f1');
var generateStates = require('./lib/generateStates');
var getLines = require('./lib/getLines');
var getDot = require('./lib/getDot');
var getLabels = require('./lib/getLabels');

class ReactF1Graph extends React.Component {

  componentWillMount() {
    var states = generateStates(this.props.states);
    var transitions = this.props.transitions;

    this.setState({
      states: states,
      transitions: transitions
    });
  }

  render() {
    return <ReactF1
      go={this.props.go}
      onComplete={this.props.onComplete}
      states={this.state.states}
      transitions={this.state.transitions}
      style={
        this.props.style || {
          position: 'relative'
        }
      }
    >

      { 
        [
          getLines(this.props),
          getDot(this.props),
          getLabels(this.props)
        ]
      }
    </ReactF1>;
  }
}

ReactF1Graph.defaultProps = {
  go: 'out',

  width: 400,
  height: 400,

  colorDot: 'rgba(174, 0, 0, 0.5)',
  sizeDot: 14,

  colorLine: '#999',
  widthLine: 0.75,
  colorArrow: '#999',
  

  fontLabel: 'Verdana, Geneva, sans-serif',
  colorLabel: '#111', 

  states: {
    out: [ 10, 10 ],
    idle: [ 40, 80 ],
    over: [ 190, 70 ],
    pressed: [ 280, 20 ]
  },

  transitions: [
    { from: 'out', to: 'idle' },
    { from: 'idle', to: 'over', bi: true },
    { from: 'over', to: 'pressed' },
    { from: 'pressed', to: 'out' }
  ]
};

module.exports = ReactF1Graph;
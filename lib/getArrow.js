var React = require('react');

module.exports = function(props, start, end, bi) {
  var startArrowPoints= getArrowPoints(end, start); 
  var endArrowPoints = getArrowPoints(start, end);

  var arrow = [
    <line
      key="line"
      x1={start[ 0 ]}
      y1={start[ 1 ]}
      x2={end[ 0 ]}
      y2={end[ 1 ]}
      stroke={props.colorLine}
      strokeWidth={props.widthLine}
    />,
    <polygon
      key="arrowEnd"
      fill={props.colorArrow}
      points={
        endArrowPoints
        .map(function(point) {
          return point.join(',');
        })
        .join(' ')
      }
    />
  ];

  if(bi) {
    arrow.push(
      <polygon
        key="arrowStart"
        fill={props.colorArrow}
        points={
          startArrowPoints
          .map(function(point) {
            return point.join(',');
          })
          .join(' ')
        }
      />
    );
  }

  return <g
    key={start.join(',') + ' ' + end.join(',')}
  >
    { arrow }
  </g>;
};

function getArrowPoints(start, end) {
  const ARROW_SIZE = 10;
  var direction = Math.atan2(end[ 1 ] - start[ 1 ], end[ 0 ] - start[ 0 ]);
  var radLeft = direction - Math.PI * 0.1 - Math.PI;
  var radRight = direction + Math.PI * 0.1 - Math.PI;

  return [
    [ Math.cos(radLeft) * ARROW_SIZE + end[ 0 ], Math.sin(radLeft) * ARROW_SIZE + end[ 1 ] ],
    end,
    [ Math.cos(radRight) * ARROW_SIZE + end[ 0 ], Math.sin(radRight) * ARROW_SIZE + end[ 1 ] ],
  ];
}
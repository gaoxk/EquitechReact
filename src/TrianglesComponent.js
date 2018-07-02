import React, { Component } from 'react';
import { Stage, Layer, Line } from 'react-konva';

class TrianglesComponent extends Component {
  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Line
            points={[
              window.innerWidth/2, 0,
              window.innerWidth, window.innerHeight/2,
              window.innerWidth, 0
            ]}
            fill={'green'}
            closed={'true'}
            opacity={0.5}
          />
        </Layer>
      </Stage>
    );
  }
}

export default TrianglesComponent;

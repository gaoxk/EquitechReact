import React, { Component } from 'react';
import { Stage, Layer, Line } from 'react-konva';

class TrianglesComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      deltaX: 0,
      deltaY: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  _onMouseMove(e) {
    this.setState((prevState) => ({
       deltaX: Math.min(prevState.deltaX + 10, 400),
       deltaY: Math.min(prevState.deltaY + 10, 400)
     }));
  }

  render() {
    return (
      <Stage
        width={this.state.width}
        height={this.state.width}
        style={{position: 'absolute', overflow: 'none'}}
        onMouseMove = {this._onMouseMove.bind(this)}
        opacity={0.5}
      >
        <Layer>
         <Line
            points={[
              this.state.width/3, 0,
              this.state.width, this.state.height/2,
              this.state.width, 0
            ]}
            fill={'#707fbe'}
            closed={'true'}
          />
          <Line
            points={ [
              this.state.width/2 + this.state.deltaX, 40 + this.state.deltaY,
              this.state.width*2/5 + this.state.deltaX, this.state.height/3 + this.state.deltaY,
              this.state.width*5/6 + this.state.deltaX, 80 + this.state.deltaY
            ]}
            fill={'#616ab1'}
            closed={'true'}
          />
          <Line
            points={[
              this.state.width*3/4 , -40 + this.state.deltaY,
              this.state.width+40 , this.state.height/4 + this.state.deltaY,
              this.state.width*3/5, this.state.height*4/5 + this.state.deltaY
            ]}
            fill={'#cc98c4'}
            closed={'true'}
          />
          <Line
            points={[
              this.state.width*8/10 + this.state.deltaX, this.state.height/5 + this.state.deltaY,
              this.state.width*2 + this.state.deltaX, this.state.height/5 + this.state.deltaY,
              this.state.width*9/10 + this.state.deltaX, this.state.height*2/5 + this.state.deltaY
            ]}
            fill={'#5e507e'}
            closed={'true'}
          />
          <Line
            points={[
              this.state.width*3/5 + this.state.deltaX, this.state.height/4 + this.state.deltaY,
              this.state.width*3/4 + this.state.deltaX, this.state.height*3/4 + this.state.deltaY,
              this.state.width*3.5/4 + this.state.deltaX, this.state.height*2/3 + this.state.deltaY
            ]}
            fill={'#6dc1dd'}
            closed={'true'}
          />
        </Layer>
      </Stage>
    );
  }
}

export default TrianglesComponent;

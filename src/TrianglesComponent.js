import React, { Component } from 'react';
import { Stage, Layer, Line } from 'react-konva';

class TrianglesComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      deltaLR: 0,
      deltaRL: 0,
      dLR: 1,
      dRL: -1,
      width: window.innerWidth,
      height: window.innerHeight
    };
    this.animate.bind();
  }

  animate (t) {
    console.log(t);
    let delLR = this.state.dLR;
    let delRL = this.state.dRL;

    if(this.state.deltaLR > 40){
      delLR=-1;
    }else if(this.state.deltaLR < -50){
      delLR=1;
    }else{
      delLR=this.state.dLR;
    }

    if(this.state.deltaRL > 30){
      delRL=-1;
    }else if(this.state.deltaRL < -20){
      delRL=1;
    }else{
      delRL=this.state.dRL;
    }

    this.setState((prevState) => ({
       deltaLR: prevState.deltaLR + delLR,
       deltaRL: prevState.deltaRL + delRL,
       dLR: delLR,
       dRL: delRL
     }));
   }

   componentDidMount() {
     setInterval(() => this.animate(this), 50);
   }

  render() {
    const { width, height, deltaLR, deltaRL} = this.state;
    console.log("lr " + this.state.dLR + " rl " + this.state.dRL);
    console.log("delta lr " + deltaLR + " delta rl " + deltaRL);
    return (
      <Stage
        width={width}
        height={width}
        style={{position: 'absolute', overflow: 'none'}}
        opacity={0.5}
      >
        <Layer>
         <Line
            points={[
              width/3, 0,
              width, height/2,
              width, 0
            ]}
            fill={'#707fbe'}
            closed={'true'}
          />
          <Line
            points={[
              width/2 + deltaLR, 40,
              width*2/5 + deltaLR, height/3 + deltaLR,
              width*5/6 + deltaLR, 80 + deltaLR
            ]}
            fill={'#616ab1'}
            closed={'true'}
          />
          <Line
            points={[
              width*3/4 + deltaRL, -40 + deltaRL*3,
              width+40 + deltaRL, height/4 + deltaRL,
              width*3/5 + deltaRL, height*4/5 + deltaRL
            ]}
            fill={'#cc98c4'}
            closed={'true'}
          />
          <Line
            points={[
              width*8/10 + deltaLR, height/5 + deltaLR,
              width*2 + deltaLR*1.5, height/5 + deltaLR,
              width*9/10 + deltaLR, height*2/5 + deltaLR*2
            ]}
            fill={'#5e507e'}
            closed={'true'}
          />
          <Line
            points={[
              width*3/5 + deltaRL, height/4 + deltaLR,
              width*3/4 + deltaRL, height*3/4 + deltaLR,
              width*3.5/4 + deltaRL*3, height*2/3 + deltaLR
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

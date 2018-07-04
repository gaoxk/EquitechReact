import React, { Component } from 'react';
import { Stage, Layer, Line } from 'react-konva';

class TrianglesProjectComponent extends Component {
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

    animate () {
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
      //  setInterval(() => this.animate(this), 40);
    }

    render() {
        const { width, height, deltaLR, deltaRL} = this.state;
        return (
            <Stage
                width={width}
                height={height*2}
                style={{position: 'absolute', overflow: 'visible'}}
                opacity={0.5}
            >
                <Layer>
                    {/* first project*/}
                    <Line
                        points={[
                            width*3/5 + deltaRL, height/9 + deltaLR,
                            width*2/6 + deltaRL, height/7  + deltaLR,
                            width*2.5/4 + deltaRL*3, height/4 + deltaLR
                        ]}
                        fill={'#616ab1'}
                        closed={'true'}
                    />
                    <Line
                        points={[
                            width*7/10 + deltaLR, height/5 + deltaLR,
                            width*9/11 + deltaLR*1.5, height*4/6 + deltaLR,
                            width*9.5/11 + deltaLR, height*3/5 + deltaLR*2
                        ]}
                        fill={'#6dc1dd'}
                        closed={'true'}
                    />
                    <Line
                        points={[
                            width*4.25/6 + deltaRL, height*9/10 + deltaLR,
                            width*3/5 + deltaRL, height  + deltaLR,
                            width*3/4 + deltaRL*3, height*2/3 + deltaLR
                        ]}
                        fill={'#616ab1'}
                        closed={'true'}
                    />
                    <Line
                        points={[
                            width/6 + deltaLR, height*1.2,
                            width/3 + deltaLR, height*4/5 + deltaLR,
                            width*3/5 + deltaLR, height*6/7 + deltaLR
                        ]}
                        fill={'#5e507e'}
                        closed={'true'}
                    />
                    {/* second project*/}
                    <Line
                        points={[
                            width*3/5 + deltaRL, height/9 + deltaLR + height,
                            width*2/6 + deltaRL, height/7  + deltaLR + height,
                            width*2.5/4 + deltaRL*3, height/4 + deltaLR + height
                        ]}
                        fill={'#616ab1'}
                        closed={'true'}
                    />
                    <Line
                        points={[
                            width*7/10 + deltaLR, height/5 + deltaLR + height,
                            width*9/11 + deltaLR*1.5, height*4/6 + deltaLR + height,
                            width*9.5/11 + deltaLR, height*3/5 + deltaLR*2 + height
                        ]}
                        fill={'#6dc1dd'}
                        closed={'true'}
                    />
                    <Line
                        points={[
                            width*4.25/6 + deltaRL, height*9/10 + deltaLR + height,
                            width*3/5 + deltaRL, height  + deltaLR + height,
                            width*3/4 + deltaRL*3, height*2/3 + deltaLR + height
                        ]}
                        fill={'#616ab1'}
                        closed={'true'}
                    />
                    <Line
                        points={[
                            width/6 + deltaLR, height*1.2 + height,
                            width/3 + deltaLR, height*4/5 + deltaLR + height,
                            width*3/5 + deltaLR, height*6/7 + deltaLR + height
                        ]}
                        fill={'#5e507e'}
                        closed={'true'}
                    />
                </Layer>
            </Stage>
        );
    }
}

export default TrianglesProjectComponent;

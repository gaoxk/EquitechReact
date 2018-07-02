import React, { Component } from 'react';
import sh1 from './assets/sh1.png';
import sh2 from './assets/sh2.jpg';
import sh3 from './assets/sh3.png';

class ProjectComponent extends Component {
    render() {
        const style = {
            backgroundColor: this.props.color
        };
        return (
            <div className="project" style={style}>
            	<div className="container">
            		<div className="row ">
            			<div className="col-md-6">
            				<img id="img1" src={sh1}/>
            				<img id="top-img" src={sh2}/>
            				<img id="img2" src={sh3}/>
            			</div>
            			<div className="col-md-6">
            		 		<h1>{this.props.title}</h1>
            		 		<h2>{this.props.header}</h2>
            				<div className="break"> &nbsp </div>
            				<p>{this.props.description}</p>
            			</div>
            		</div>
            	</div>
            </div>
        );
    }
}

export default ProjectComponent;

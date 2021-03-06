import React, { Component } from 'react';
import Triangles from './Triangles';
import Navigate from './Navigate';
import ResourceStrings from './ResourceStrings';

class Hero extends Component {
	render() {
		return (
			<div className='hero'>
				<Triangles />
				<div className='container-fluid hero-cont'>
					<Navigate />
					<div className='hero-text'>
						<h1>{ResourceStrings.hero_h1}</h1>
                  		<h3>{ResourceStrings.hero_h2}</h3>
                  		<div className='break'> &nbsp </div>
                  		<p>{ResourceStrings.hero_p1}</p>
                  		<p>{ResourceStrings.hero_p2}</p>
						<a href='#contact'>
          	 	<button type='button' className='btn'>
								<h4>{ResourceStrings.contact}</h4>
							</button>
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Hero;

import React, { Component } from 'react';

import ResourceStrings from './ResourceStrings';
import logo_big from './assets/logo_big.png';

class Footer extends Component {
	render() {
		return (
			<div className='footer'>
				<div className='container-fluid'>
					<div className='row'>
						<div className='col-md-6 leftSide'>
							<img className='logo' src={logo_big} alt={ResourceStrings.equitech_logo_alt}/>
							<h5>{ResourceStrings.equitech_footer}</h5>
						</div>
						<div className='col-md-6 rightSide'>
							<a href='#proj1'><h4>{ResourceStrings.projects}</h4></a>
							<a href='#contact'><h4>{ResourceStrings.contact}</h4></a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Footer;

import React, { Component } from 'react';
import {Nav} from 'react-bootstrap';
import ResourceStrings from './ResourceStrings';
import logo from './assets/logo.png';

class NavComponent extends Component {
    render() {
        return (
            <Nav className='navbar' role='navigation'>

          			<div className='navbar-header'>
          				<h2 className='navbar-brand brand-name'>
          					<img className='pull-left'src={logo} />
          			 	</h2>
          	 		</div>
          	    <div className='collapse navbar-collapse'>
          	      <ul className='nav navbar-nav' id='myNavbar'>
          				  <li><a href='#proj1'><h3>{ResourceStrings.projects}</h3></a></li>
          	      	<li><a href='#contact'><h3>{ResourceStrings.contact}</h3></a></li>
          	      </ul>
          	    </div>
        
	           </Nav>
        );
    }
}

export default NavComponent;

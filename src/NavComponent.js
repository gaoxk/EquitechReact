import React, { Component } from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import ResourceStrings from './ResourceStrings';
import logo from './assets/logo.png';

class NavComponent extends Component {
    render() {
        return (
            <Navbar>
          			<Navbar.Header>
                    <Navbar.Brand>
                        <h2>
          					<img className='pull-left' src={logo} alt={ResourceStrings.equitech_logo_alt}/>
          			 	</h2>
                    </Navbar.Brand>
          	 		</Navbar.Header>
          	    <Nav>
                    <NavItem eventKey={1} href='#proj1'>
                        <h3>{ResourceStrings.projects}</h3>
                    </NavItem>
                    <NavItem eventKey={2} href='#contact'>
                        <h3>{ResourceStrings.contact}</h3>
                    </NavItem>
          	    </Nav>
	           </Navbar>
        );
    }
}

export default NavComponent;

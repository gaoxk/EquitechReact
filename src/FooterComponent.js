import React, { Component } from 'react';

import ResourceStrings from './ResourceStrings';
import logo_big from './assets/logo_big.png';

class FooterComponent extends Component {
    render() {
        return (
            <div className='container-fluid' id='footer'>
                <div className='row'>
                    <div className='col-md-6 leftSide'>
                        <img className='logo' src={logo_big} />
                        <h5>(C) 2018 Equitech</h5>
                    </div>
                    <div className='col-md-6 rightSide'>
                        <a href='#project-start'><h4>{ResourceStrings.projects}</h4></a>
                        <a href='mailto:contact@equitech.ca'><h4>{ResourceStrings.contact}</h4></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default FooterComponent;

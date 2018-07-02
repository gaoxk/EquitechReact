import React, { Component } from 'react';
import ResourceStrings from './ResourceStrings';

class ContactComponent extends Component {
    render() {
        return (
            <div className="contact" id="contact">
      	<div className="contact-text">
       		<h1>{ResourceStrings.contact_h1}</h1>
       		<h3>{ResourceStrings.contact_h3}</h3>
      		<div className="break"> &nbsp </div>
      		<div className="form-group">
      			  <input type="email" className="form-control" id="email" placeholder="your@email.here" />
      		</div>
      		<h3>{ResourceStrings.contact_or}<a href="mailto:contact@equitech.ca"><strong>contact@equitech.ca</strong></a></h3>
      	</div>
            </div>
        );
    }
}

export default ContactComponent;

import React, { Component } from 'react';
import MailChimpEmail from './MailChimpEmail';
import ResourceStrings from './ResourceStrings';

class Contact extends Component {
	render() {
		const url = '//xxxx.us13.list-manage.com/subscribe/post?u=zefzefzef&id=fnfgn';
		return (
			<div className='contact' id='contact'>
      	<div className='contact-text'>
       		<h1 id='letstalk'>{ResourceStrings.contact_h1}</h1>
       		<h3>{ResourceStrings.contact_h3}</h3>
      		<div className='break'> &nbsp </div>
					<MailChimpEmail />
					<h3>{ResourceStrings.contact_or}
						<a href={'mailto:' + ResourceStrings.contact_or}>
							<strong>{ResourceStrings.equitech_email}</strong>
						</a>
					</h3>
      	</div>
			</div>
		);
	}
}

export default Contact;

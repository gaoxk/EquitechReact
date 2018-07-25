import React from 'react';
import ResourceStrings from './ResourceStrings';

const MailChimpEmail = () => (
	<div>
		<div id="mc_embed_signup">
			<form action="someurl" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
				<div id="mc_embed_signup_scroll">
					<input type='email' name="EMAIL" className='form-control' id='mce-EMAIL' placeholder='your@email.here' />
					<div style={{position: 'absolute',left: '-5000px',}}>
						<input type="text" name="b_0a67c575dcc4ff223746d6279_d10c86457" value="" />
					</div>
					<div className="clear">
						<input type="submit" value={ResourceStrings.sign_up} name="subscribe" id="mc-embedded-subscribe" className="button" />
					</div>
				</div>
			</form>
		</div>
	</div>
);

export default MailChimpEmail;

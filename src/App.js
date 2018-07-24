import React, { Component } from 'react';
import $ from 'jquery';

import Hero from './Hero';
import Project from './Project';
import Contact from './Contact';
import Footer from './Footer';
import ResourceStrings from './ResourceStrings';
import TrianglesProject from './TrianglesProject';
import './App.css';

class App extends Component {
	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll, { passive: true });
		// Really shouldn't use JQuery with React. JQuery is used here for convenient animations :/
		$('body').addClass('animated fadeIn');
		setTimeout( () => $('.hero h1').addClass('animated fadeInUp'), 100);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll(event) {
		const isScrolledIntoView = ($elem, $window) => {
			let docViewTop = $window.scrollTop();
			let docViewBottom = docViewTop + $window.height();
			let elemTop = $elem.offset().top;
			let elemBottom = elemTop + $elem.height();
			return (((elemBottom - $elem.height()/2) <= docViewBottom)
        && ((elemTop + $elem.height()/2) >= docViewTop));
		};

		isScrolledIntoView($('.contact'), $(window)) &&
          $('body').css('background-color', ResourceStrings.contact_color);

		isScrolledIntoView($('.contact h1'), $(window)) &&
          $('.contact h1').addClass('animated fadeInUp');

		if (isScrolledIntoView($('.hero'), $(window))) {
			$('body').css('background-color', 'white');
			$('.hero').css('visibility', 'visible');
		}else{
			$('.hero').css('visibility', 'hidden');
		}

		if (isScrolledIntoView($('#proj1'), $(window))) {
			$('#proj1 #img1').addClass('animated fadeIn');
			$('#proj1 #top-img').addClass('animated bounceInLeft');
			$('#proj1 #img2').addClass('animated fadeIn');
			$('#proj1').css('visibility', 'visible');
			$('body').css('background-color', ResourceStrings.starterhacks_color);
		}else{
			$('#proj1').css('visibility', 'hidden');
		}

		if (isScrolledIntoView($('#proj2'), $(window))) {
			$('#proj2 #img1').addClass('animated fadeIn');
			$('#proj2 #top-img').addClass('animated bounceInLeft');
			$('#proj2 #img2').addClass('animated fadeIn');
			$('#proj2').css('visibility', 'visible');
			$('body').css('background-color', ResourceStrings.tohacks_color);
		}else{
			$('#proj2').css('visibility', 'hidden');
		}
	}

	render() {
		return (
			<div>
				<Hero />
				<TrianglesProject />
				<Project
					description={ResourceStrings.starterhacks_description}
					header={ResourceStrings.starterhacks_header}
					id={'proj1'}
					title={ResourceStrings.starterhacks}
					website={ResourceStrings.starterhacks_web}
				/>
				<Project
					description={ResourceStrings.tohacks_description}
					header={ResourceStrings.tohacks_header}
					id={'proj2'}
					title={ResourceStrings.tohacks}
					website={ResourceStrings.tohacks_web}
				/>
				<Contact />
				<Footer />
			</div>
		);
	}
}

export default App;

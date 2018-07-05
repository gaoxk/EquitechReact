import React, { Component } from 'react';
import HeroComponent from './HeroComponent';
import ProjectComponent from './ProjectComponent';
import ContactComponent from './ContactComponent';
import FooterComponent from './FooterComponent';
import ResourceStrings from './ResourceStrings';
import './App.css';
import $ from 'jquery';

import TrianglesProjectComponent from './TrianglesProjectComponent';

class App extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
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
    }

    if (isScrolledIntoView($('.contact h1'), $(window))) {
      $('.contact h1').addClass('animated fadeInUp');
    }

    if (isScrolledIntoView($('.hero'), $(window))) {
      $('body').css('background-color', 'white');
      $('.hero').css('visibility', 'visible');
    }else{
      $('.hero').css('visibility', 'hidden');
    }

    if (isScrolledIntoView($('#proj1'), $(window))) {
      $('body').css('background-color', '#cc98c4');
      $('.proj1 #img1').addClass('animated fadeIn');
      $('.proj1 #top-img').addClass('animated bounceInLeft');
      $('.proj1 #img2').addClass('animated fadeIn');
      $('#proj1').css('visibility', 'visible');
    }else{
      $('#proj1').css('visibility', 'hidden');
    }

    if (isScrolledIntoView($('#proj2'), $(window))) {
      $('body').css('background-color', '#616ab1');
      setTimeout($('.proj2 #img1').addClass('animated fadeIn'), 500);
      $('.proj2 #top-img').addClass('animated bounceInLeft');
      setTimeout($('.proj2 #img2').addClass('animated fadeIn'), 750);
      $('#proj2').css('visibility', 'visible');
    }else{
      $('#proj2').css('visibility', 'hidden');
    }

    if (isScrolledIntoView($('.contact'), $(window))) {
      $('body').css('background-color', '#6dc1dd');
    }
  }

    render() {
        return (
            <div>
              <HeroComponent />
              <TrianglesProjectComponent />
              <ProjectComponent
                  color={ResourceStrings.starterhacks_color}
                  description={ResourceStrings.starterhacks_description}
                  header={ResourceStrings.starterhacks_header}
                  id={'proj1'}
                  title={ResourceStrings.starterhacks}
                  website={ResourceStrings.starterhacks_web}
              />
              <ProjectComponent
                  color={ResourceStrings.tohacks_color}
                  description={ResourceStrings.tohacks_description}
                  header={ResourceStrings.tohacks_header}
                  id={'proj2'}
                  title={ResourceStrings.tohacks}
                  website={ResourceStrings.tohacks_web}
              />
              <ContactComponent />
              <FooterComponent />
            </div>
        );
    }
}

export default App;

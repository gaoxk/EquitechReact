import React, { Component } from 'react';
import TrianglesComponent from './TrianglesComponent';
import NavComponent from './NavComponent';
import ResourceStrings from './ResourceStrings';

class HeroComponent extends Component {
    render() {
        return (
            <div className='hero'>
                <TrianglesComponent />
                <div className='container-fluid hero-cont'>
                    <NavComponent />
                    <div className='hero-text'>
                      <h1>{ResourceStrings.hero_h1}</h1>
                  		<h2>{ResourceStrings.hero_h2}</h2>
                  		<div className='break'> &nbsp </div>
                  		<p>{ResourceStrings.hero_p1}</p>
                  		<p>{ResourceStrings.hero_p2}</p>
        		          <button type='button' className='btn'>
                            <h4>{ResourceStrings.contact}</h4>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeroComponent;

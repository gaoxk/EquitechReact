import React, { Component } from 'react';
import TrianglesComponent from './TrianglesComponent';
import HeroComponent from './HeroComponent';
import ProjectComponent from './ProjectComponent';
import ContactComponent from './ContactComponent';
import FooterComponent from './FooterComponent';
import ResourceStrings from './ResourceStrings';
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <TrianglesComponent />
                <HeroComponent />
                <ProjectComponent
                    title={ResourceStrings.starterhacks}
                    header={ResourceStrings.starterhacks_header}
                    description={ResourceStrings.starterhacks_description}
                    color={ResourceStrings.starterhacks_color}
                />
                <ProjectComponent
                    title={ResourceStrings.tohacks}
                    header={ResourceStrings.tohacks_header}
                    description={ResourceStrings.tohacks_description}
                    color={ResourceStrings.tohacks_color}
                />
                <ContactComponent />
                <FooterComponent />
            </div>
        );
    }
}

export default App;

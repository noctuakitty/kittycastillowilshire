import React, { Component } from 'react';
import AboutJumbotron from '../jumbotrons/AboutJumbotron';
import AboutCard from '../cards/AboutCard';

class AboutPage extends Component {
    render() {
        return (
            <div>
                <br></br>
                <AboutJumbotron />
                <AboutCard />
                <br></br>
            </div>
        )
    }
}

export default AboutPage;
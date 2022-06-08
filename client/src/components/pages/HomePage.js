import React, { Component } from 'react';
import HomeJumbotron from '../jumbotrons/HomeJumbotron';
import HomeCard from '../cards/HomeCard';

class HomePage extends Component {
    render() {
        return (
            <div>
                <br></br>
                <HomeJumbotron />
                <HomeCard />
                <br></br>
            </div>
        )
    }
}

export default HomePage;
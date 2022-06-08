import React from 'react';
import Jumbotron from '../../res/jumbotron.png';

function HomeJumbotron() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="jumbotron">
                            <p className="display-3">
                                <img style={{ height: 100, paddingBottom: 20, paddingRight: 20 }} src={Jumbotron} alt="..." ></img>
                                Meeting Title
                                <img style={{ height: 100, paddingBottom: 20, paddingLeft: 20 }} src={Jumbotron} alt="..." ></img>
                            </p>
                            <hr className="my-4"></hr>
                            <p  className="description">Sunday through Saturday</p>
                            <h2 className="lead">0:00 am - 0:00 pm</h2>
                            <p  className="description">GMT</p>
                            <hr className="my-4"></hr>
                            <br></br>
                            <h2>...</h2>
                            <p className="description">...</p>
                            <br></br>
                            <hr className="my-4"></hr>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeJumbotron;
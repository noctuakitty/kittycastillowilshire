import React from 'react';

function HomeJumbotron() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="jumbotron">
                            <p className="display-3">
                                <img style={{ height: 100, paddingBottom: 20, paddingRight: 20 }} src={...} alt="..." ></img>
                                Kilea Castillo-Wilshire
                                <img style={{ height: 100, paddingBottom: 20, paddingLeft: 20 }} src={...} alt="..." ></img>
                            </p>
                            <hr className="my-4"></hr>
                            <p  className="description">Unapologetic food scholar. Coffee advocate. Music Nerd. Sporadic Gamer.</p>
                            <h2 className="lead">A geek, basically.</h2>
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
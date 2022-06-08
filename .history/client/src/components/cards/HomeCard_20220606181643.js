import React from 'react';
import { NewcomersButton } from '../buttons/AboutButton';

function HomeCard() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="card border-secondary mb-3">
                        <div className="card-header">
                            <h2 className="header-one">
                                Welcome Curious One
                            </h2>
                        </div>
                        <div className="card-body">
                            <h4>
                                ...
                            </h4>
                            <br></br>
                            <p>
                            ...
                            </p>
                            <p>
                            ...
                            </p>
                            <h4>
                                For more info, click below
                            </h4>
                            <AboutButton />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeCard;
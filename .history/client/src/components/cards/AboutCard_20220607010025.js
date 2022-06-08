import React from 'react';
import { AboutButton } from '../buttons/AboutButton';

function AboutCard() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="card border-secondary mb-3">
                        <div className="card-header">
                            <h2 className="header-one">
                                About
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutCard;
import React from 'react';
import { Button } from 'react-bootstrap';
import About from '../pages/AboutPage';

export const AboutButton = () => {
    return (
        <div className="button">
            <Button target="_blank" href={About} className="btn btn-dark btn-lg">HERE</Button>
        </div>
    );
};
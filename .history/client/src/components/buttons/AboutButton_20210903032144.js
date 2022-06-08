import React from 'react';
import { Button } from 'react-bootstrap';
import Pdf from '../../res/Newcomers.pdf';

export const NewcomersButton = () => {
    return (
        <div className="button">
            <Button href={Pdf} target="_blank" className="btn btn-dark btn-lg">HERE</Button>
        </div>
    );
};
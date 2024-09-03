import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Name.css';


export default function Name() {
    return (
        <div className="container-fluid name-background text-white p-3">
            <Link to="/" className="text-white text-decoration-none">
                <h1 className="mb-4 fs-custom-h1">Rory Dowse</h1>
            </Link>
            <p className="subtitle mb-0">Software Engineer</p>
        </div>
    );
}

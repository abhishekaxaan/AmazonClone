import React from 'react';
import './subnavbar.css';

function SubNavbar() {
    return (
        <div className="sub-navbar">
            <div className="sub-nav-item all-menu">
                <span className="hamburger-icon"></span>
                <p>All</p>
            </div>
            <div className="sub-nav-item">
                <p>Today's Deals</p>
            </div>
            <div className="sub-nav-item">
                <p>Customer Service</p>
            </div>
            <div className="sub-nav-item">
                <p>Registry</p>
            </div>
            <div className="sub-nav-item">
                <p>Gift Cards</p>
            </div>
            <div className="sub-nav-item">
                <p>Sell</p>
            </div>
        </div>
    );
}

export default SubNavbar;

import React from 'react';
import field from  '../../Images/field.jpg'
import './Header.css'
const Header = () => {
    return (
        <div>
            <img src={field} alt="" style={{ height: "600px", width: "100%" }} />
            <div className="centered">
                <h1>Sports Talks</h1>
            </div>

        </div>
    );
};

export default Header;
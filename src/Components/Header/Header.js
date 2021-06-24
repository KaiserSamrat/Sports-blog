import React from 'react';
import code from  '../../Images/code.jpg'

import './Header.css'
const Header = () => {
    return (
        <div>
            <img src={code} alt="" style={{ height: "400px", width: "100%" }} />
            <div className="centered">
                <h2 className='text-white text-center'>Tech Blog</h2>
                <br />
                {/* <h4 className='text-white'>Know every exiting technology blog from our site</h4> */}
            </div>
           

        </div>
    );
};

export default Header;
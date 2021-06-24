import React, { useState } from 'react';
import arrow from '../../Images/next.png'
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as BsIcons from 'react-icons/bs';
import {Link} from "react-router-dom";
import { IconContext } from 'react-icons';
import './Sidelist.css'
import {SideListData} from '../../Components/SideListData/SideListData'
const SideList = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
        <IconContext.Provider value={{ color: '#fff' }}>
        <div className='sidebar'>
          <Link to='#' className='menu-bars'>
            <BsIcons.BsBoxArrowInRight onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SideListData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
        </>
    );
};

export default SideList;
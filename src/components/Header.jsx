import React from 'react'
import Sidebar from './HeaderComponents/Sidebar'
import logo from '../images/Logo.png';
import './HeaderComponents/Header.css'

const Header = () => {
    return (
        <div className="app_header">
            <img
                className="app_headerImage"
                src={logo}
                alt="logo" />
            <Sidebar/>
        </div>
    )
}

export default Header
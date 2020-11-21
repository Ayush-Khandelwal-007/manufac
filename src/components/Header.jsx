import React from 'react'
import Sidebar from './HeaderComponents/Sidebar' 
import './HeaderComponents/Header.css'

const Header = () => {
    return (
        <div className="app_header">
            <img
                className="app_headerImage"
                alt="logo" />
            <Sidebar/>
        </div>
    )
}

export default Header
import React from 'react'
import { NavLink } from 'react-router-dom';

function Header() {
    const NavLinkstyle = {
        textDecoration: 'none',
        padding: '3px',
        margin: '3px',
        border: '1px solid grey'
    }
    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }

    return (
        <nav >
            <NavLink style={NavLinkstyle} activeStyle={activeStyle} to="/home">home</NavLink>
            <NavLink style={NavLinkstyle} activeStyle={activeStyle} to="/about">about</NavLink>
            <NavLink style={NavLinkstyle} activeStyle={activeStyle} to="/sports">sports</NavLink>
            <NavLink style={NavLinkstyle} activeStyle={activeStyle} to="/userreviews">user riviews</NavLink>
        </nav>
    )
}

export default Header

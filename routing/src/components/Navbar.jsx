import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to='/' className={({isActive})=> isActive ? "border": ""}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/about' className={({isActive})=> isActive ? "border": ""}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/Dashboard' className={({isActive})=> isActive ? "border": ""}>
                        Dashboard
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar

import React from 'react'
import './Navbar.css'
import {
  Link
} from 'react-router-dom'
import { IoMdPlanet } from 'react-icons/io'

function Navbar() {
  return (
    <>
      <nav>
        <div className='navbar-logo'>
          <Link to='/' className='navbar-name'> PLANETA <br /> ROLLERS  </Link>
          <div>
            <Link to='/'> <IoMdPlanet className='logo-icon' /> </Link>
          </div>
        </div>

        <ul className='navbar-list'>
          <li className='navbar-item'>
            <Link to='/rollers' className='navbar-link'>Rollers</Link>
          </li>
          <li className='navbar-item'>
            <Link to='/clothing' className='navbar-link'>clothing</Link>
          </li>
          <li className='navbar-item'>
            <Link to='/protectivegear' className='navbar-link'>protective gear</Link>
          </li>
          <li className='navbar-item'>
            <Link to='/contact' className='navbar-link'>contact us</Link>
          </li>

        </ul>

      </nav>
    </>
  )
}

export { Navbar }
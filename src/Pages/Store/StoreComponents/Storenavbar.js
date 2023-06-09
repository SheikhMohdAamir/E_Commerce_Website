import React from 'react'
import { NavLink } from 'react-router-dom'

const Aboutnavbar = () => {

  return (
    
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
            <div className="container-fluid bg-secondary bg-gradient">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                    <li className="nav-item">
                    <NavLink to='/' className="nav-link active" aria-current="page" style={{color:'white'}}>Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to='/store' className="nav-link active" aria-current="page" style={{color:'white'}}>Store</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to='/about' className="nav-link active" aria-current="page" style={{color:'white'}}>About</NavLink>
                    </li>
                </ul>
        
                </div>
            </div>
        </nav>

  )
}

export default Aboutnavbar
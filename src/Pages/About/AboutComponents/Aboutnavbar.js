import React from 'react'
import { Link } from 'react-router-dom'

const Aboutnavbar = () => {

  return (
    
        <nav class="navbar navbar-expand-lg bg-body-tertiary ">
            <div class="container-fluid bg-secondary bg-gradient">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                    <li class="nav-item">
                    <Link to='/' class="nav-link active" aria-current="page" style={{color:'white'}}>Home</Link>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" style={{color:'white'}}>Store</a>
                    </li>
                    <li class="nav-item">
                    <Link to='/about' class="nav-link active" aria-current="page" style={{color:'white'}}>About</Link>
                    </li>
                </ul>
        
                </div>
            </div>
        </nav>

  )
}

export default Aboutnavbar
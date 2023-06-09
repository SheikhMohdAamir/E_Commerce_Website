import React from 'react'
import Modal from './Modal';
import { useState } from 'react'
import { useContext } from 'react';
import CartContext from '../ContextAPI/cart-context';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const[showModal, setShowModal] = useState(false);
    const api = useContext(CartContext)
    const modalHandler=()=>{
        setShowModal(true)
    }
    const closeModal=()=>{
        setShowModal(false)
    }
    const cartQuantity = api.items.length
    
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
                    <button className="btn position-relative btn-outline-info btn-sm " type="submit" style={{color:'white'}} onClick={modalHandler}>Cart <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartQuantity}</span></button>
        
                </div>
                {showModal && <Modal closeModal={closeModal}/>}
            </div>
        </nav>

  )
}

export default Navbar

import React from 'react'
import Modal from './Modal';
import { useState } from 'react'
import { useContext } from 'react';
import CartContext from '../ContextAPI/cart-context';
import { Link } from 'react-router-dom'

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
    
        <nav class="navbar navbar-expand-lg bg-body-tertiary ">
            <div class="container-fluid bg-secondary bg-gradient">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" style={{color:'white'}}>Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" style={{color:'white'}}>Store</a>
                    </li>
                    <li class="nav-item">
                    <Link to='/about' class="nav-link active" aria-current="page" style={{color:'white'}}>About</Link>
                    </li>
                </ul>
                    <button class="btn position-relative btn-outline-info btn-sm " type="submit" style={{color:'white'}} onClick={modalHandler}>Cart <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartQuantity}</span></button>
        
                </div>
                {showModal && <Modal closeModal={closeModal}/>}
            </div>
        </nav>

  )
}

export default Navbar

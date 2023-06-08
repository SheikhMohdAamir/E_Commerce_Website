import React from 'react';
import ReactDOM from 'react-dom';
import { useContext } from 'react';
import CartContext from '../ContextAPI/cart-context';



const Modal = (props) => {

    const api= useContext(CartContext)

    const modalContainer = {
        position: "fixed",
        maxWidth: "30rem",
        top: "40%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "white",
        borderRadius: "1rem",
        padding: "2rem 3rem",
      };
      const modalWrapper = {
        position: "fixed",
        left: "0",
        right: "0",
        bottom: "0",
        top: "0",
        background: "rgba(0, 0, 0, 0.5)",
      };

      const closeModal=()=>{
        props.closeModal()
      }

  return (
    <>
    {ReactDOM.createPortal(
        <>
        <div style={modalWrapper} onClick={closeModal}></div>
        <div className='container'  style={modalContainer}>
          <hr/>
            <h3 style={{textAlign:'center'}}>Cart Items  <button class="btn btn-info btn-sm" style={{color:'white'}} onClick={closeModal}>X</button></h3>
            <ul className="list-group">{api.items.map((i)=>
                <li className="list-group-item d-flex justify-content-between align-items-center" >{i.title}
                <span className="badge bg-dark rounded-pill">x1</span>
                <span><b>Rs.{i.price}</b></span>
                <button type="button" class="btn btn-outline-danger btn-sm">remove</button>
                </li>
                )}
            </ul>
            <hr/>
            
            <hr/>
            
            
        </div>
        </>
        ,
    document.getElementById('modalRoot')
    )}
        
    </>
  )
}

export default Modal

import React from 'react'
import CartContext from './cart-context'
import { useState } from 'react'

const CartProvider = (props) => {
    const [updateitems, setUpdateItems] = useState([])

    const addItemHandler=(item)=>{
        setUpdateItems([...updateitems,item])
    }

    let cartContext = {
        items:updateitems,
        addItems:addItemHandler
    }

  return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
import React from "react"
import { useContext } from "react"
import CartContext from "../ContextAPI/cart-context"

const Item = (props) => {
  const api= useContext(CartContext)

  const addingItemsToCartHandler=()=>{
    let Duplicate= api.items.find(i=>i.title===props.product.title)
    if(Duplicate===undefined){
       api.addItems(props.product)
    }
    else{
      alert('The Item You Chose Already Exist In The Cart!')
    }
  }

  return (
        <div class="card" style={{width:'18rem',margin:'5px'}}>
            <h5 class="card-title" style={{textAlign:'center'}}>{props.product.title}</h5>
            <img src={props.product.imageUrl} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">Rs.{props.product.price} <button class="btn btn-info" type="submit" style={{color:'white'}} onClick={addingItemsToCartHandler}>Add to cart</button></h5>
            </div>
        </div>
  )
}

export default Item


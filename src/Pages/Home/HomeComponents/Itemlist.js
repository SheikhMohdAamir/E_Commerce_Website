import React from 'react'
import Item from './Item'

const ItemList = (props) => {
  return (
    <div className='container-fluid'>
        <h3>Our Products</h3>
        <ul class="list-group list-group-horizontal-xl">
            {props.products.map((item)=><li class="list-group-item" ><Item product={item}/></li>)}
        </ul>
    </div>
  )
}

export default ItemList

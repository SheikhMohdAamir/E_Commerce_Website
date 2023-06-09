import React from 'react'
import Navbar from './HomeComponents/Navbar'
import Background from './HomeComponents/Background'
import ItemList from './HomeComponents/Itemlist'
import CartProvider from './ContextAPI/CartProvider'
import Footer from './HomeComponents/Footer'

const Home = () => {
    const products = [
        {
        title: 'Album 1',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        },
        {
        title: 'Album 2',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        },
        {
        title: 'Album 3',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        },
        {
        title: 'Album 4',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        },
        ]
  return (
    <div>
        <CartProvider>
            <Navbar />
            <Background />
            <ItemList products={products}/>
            <Footer />
        </CartProvider>
    </div>
  )
}

export default Home

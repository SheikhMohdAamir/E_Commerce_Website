import React from 'react'
import Storenavbar from './StoreComponents/Storenavbar'
import Storebackground from './StoreComponents/Storebackground'
import Storefooter from './StoreComponents/Storefooter'

const Store = () => {
  return (
    <div>
      <Storenavbar />
      <Storebackground />
      <h2>Store</h2>
      <p>This website stores cookies on your computer. These cookies are used to improve your website experience and provide more personalized services to you, both on this website and through other media. To find out more about the cookies we use, see our Privacy Policy.
      We won't track your information when you visit our site. But in order to comply with your preferences, we'll have to use just one tiny cookie so that you're not asked to make this choice again.
      </p>
      <Storefooter />
    </div>
  )
}

export default Store

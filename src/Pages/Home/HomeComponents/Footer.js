import React from 'react'

const Footer = () => {
  
  let footerStyle={
    position: 'relative',
    top:'90vh',
    width:'100%',  
    
  }
  return (
    <footer className='container-fluid bg-secondary bg-gradient text-light' style={footerStyle}>
     <h3 className='text-light ' style={{textAlign:'center'}}>The Generics</h3>
      <p className='text-center'>Copyright &copy; e.commerce.com</p>
    </footer>
  )
}

export default Footer;
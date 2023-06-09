import React from 'react'

const AboutFooter = () => {
  
  let footerStyle={
    position:'absolute',
    top:'110vh',
    width:'100%',  
    
  }
  return (
    <footer className='container-fluid bg-secondary bg-gradient text-light' style={footerStyle}>
     <hr/>
     <h3 className='text-light ' style={{textAlign:'center'}}>The Generics</h3>
      <p className='text-center'>Copyright &copy; e.commerce.com</p>
     <hr/>
    </footer>
  )
}

export default AboutFooter;
import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Contactusform = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const nameHandler=(event)=>{
        setName(event.target.value)
    }
    const emailHandler=(event)=>{
        setEmail(event.target.value)
    }
    const phoneHandler=(event)=>{
        setPhone(event.target.value)
    }

    const submitHandler = async (event)=>{
        event.preventDefault()

        const formData = {
            name:name,
            email:email,
            phone:phone
        }
        try{
            const resolve = await axios.post('https://react-http-645da-default-rtdb.firebaseio.com/contactus.json',JSON.stringify(formData))
            const data = await resolve
            console.log(data)            
        }
        catch(error){
            console.log(error.message)
        }
        
    }

  return (
    <form className='container-sm' onSubmit={submitHandler}>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={name} onChange={nameHandler}/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail2" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" onChange={emailHandler}/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail3" className="form-label">Phone Number</label>
            <input type="number" className="form-control" id="exampleInputEmail3" aria-describedby="emailHelp" onChange={phoneHandler}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default Contactusform

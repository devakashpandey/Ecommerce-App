import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css"

const Nav = () => {

  const [username , setUsername] = useState("")


  useEffect(()=>{
     const user = JSON.parse(localStorage.getItem("SignUp Details"))
     setUsername(user.fnameValue)
 
  }, [])

  let logout = () => {
      localStorage.removeItem("SignUp Details")
      window.location.href="/"
  }


  return (
     <>
     <div className='nav'>

      <div className='nav-left'>
          <h2>Ecommerce</h2>
      </div>
     
     <div className='nav-right'>
         <Link className='text-decoration-none link' to={"/account"} >Account</Link>
         <Link className='text-decoration-none link' to={"/cart"} >Cart</Link>
         <Link className='text-decoration-none link username' >Hi, {username}</Link>
         <Link onClick={logout} className='text-decoration-none link logout'>Logout</Link>
     </div>

     </div>

  

     </>
  )
}

export default Nav

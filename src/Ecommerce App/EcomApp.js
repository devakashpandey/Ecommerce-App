import React, {useState} from 'react'
import "./EcomApp.css"
import axios from "axios"

// const BASE_URL = 'http://13.235.87.215:4000';

const EcomApp = () => {

  let [showSignUp ,setShowSignUp] = useState();

  let toggleSignup = () =>{
      setShowSignUp(!showSignUp)
  }

  let loginFunc = () =>{
   const username = document.getElementById("username")
   const pass = document.getElementById("pass")

   const data = {
      username : username.value,
      pass : pass.value
  }

  axios.post( "http://13.235.87.215:4000/api/v1/user/login", data)
  .then((response) => {
   console.log(response)
   
   if(response.data.success){
      localStorage.setItem("Email", response.data.data.username)
      localStorage.setItem("userId", response.data.data.userId)
      localStorage.setItem("Token", response.data.data.token)
      window.location.href="/home"
  } })

  }


  let signupFunc = () =>{
    const mail = document.getElementById("email");
    const fname = document.getElementById("fullname")
    const sUsername = document.getElementById("sUsername")
    const sPass = document.getElementById("sPass")

    const data = {
        mail : mail.value,
        fname : fname.value,
        sUsername : sUsername.value,
        sPass : sPass.value
    }
   
   axios.post("http://13.235.87.215:4000/api/v1/user/login/api/v1/user/signup", data)
   .then((response) => {
      console.log(response)

      if(response.data.success){
         localStorage.setItem("Email", response.data.data.username)
         localStorage.setItem("userId", response.data.data.userId)
         localStorage.setItem("Token", response.data.data.token)
         window.location.href="/home"
     }
  
   }).catch((error) => {console.log(error)})
   
  }


  return (
     <>
     <div className='loginpage'>
       <div className='container'>
          <div className='row'>
             <div className='col'>
                      <h1 className='main-title text-center'>Welcome To Ecommerce</h1>

                      { 
                      !showSignUp ? (  <div className='login-wrapper'>
                          <h3 className='title text-center'>Log In</h3>
                          <div className='input-group'>
                             <input type="text" className='form-control' placeholder='Username or email'
                              id='username'/>
                          </div>
                          <div className='input-group'>
                             <input type="password" className='form-control' placeholder='Password'
                              id='pass'/>
                          </div>
                          <div className='input-group'>
                             <button type="submit" className='form-control btn btn-primary' 
                             placeholder='Enter your password' id='username' onClick={loginFunc}>Log In</button>
                          </div>
                        <a href="#" className='forgot-btn text-center text-primary'>Forgot password?</a>
                         
                          <hr></hr>

                         <div className='signup'>
                          Don't have an account? &nbsp; <span className='text-info'
                           onClick={toggleSignup}>Sign Up</span>
                           </div>

                        <div className='error-msg text-danger text-center'></div>

                      </div>)  : 
                      
                      (  <div className='signup-wrapper'>
                          <h3 className='title text-center'>Sign Up</h3>
                          <div className='input-group'>
                             <input type="text" className='form-control' placeholder='Email or Number' 
                             id='email'/>
                          </div>
                          <div className='input-group'>
                             <input type="text" className='form-control' placeholder='Full Name' 
                             id='fullname'/>
                          </div>
                          <div className='input-group'>
                             <input type="text" className='form-control' placeholder='Username'
                              id='sUsername'/>
                          </div>
                          <div className='input-group'>
                             <input type="password" className='form-control' placeholder='Password' 
                             id='sPass'/>
                          </div>

                          <div className='input-group'>
                             <button type="submit" className='form-control btn btn-primary' 
                             placeholder='Enter your password' id='username' onClick={signupFunc}>Sign Up</button>
                          </div>
                               <hr></hr>
                        <div className='login'>
                        Have an account? &nbsp; <span className='text-info' 
                        onClick={toggleSignup}>Log In</span>
                           </div>
                        <div className='error-msg text-danger text-center'></div>
                      </div>) 
                      
                      }

                    
             </div>
          </div>
       </div>
     </div>
     </>
  )
}

export default EcomApp;

import React, {useState} from 'react'
import "./EcomApp.css"


const EcomApp = () => {

  let [showSignUp ,setShowSignUp] = useState();

  let toggleSignup = () =>{
      setShowSignUp(!showSignUp)
  }

  let loginFunc = () =>{
    
  }


  let signupFunc = () =>{
    const mail = document.getElementById("email");
    const fname = document.getElementById("fullname")
    const sUsername = document.getElementById("sUsername")
    const sPass = document.getElementById("sPass")

    const sData = {
        mail : mail.value,
        fname : fname.value,
        sUsername : sUsername.value,
        sPass : sPass.value
    }
     
    

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

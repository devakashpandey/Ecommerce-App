import React,{useState} from 'react'

function LoginPage() {

const [showSignUp ,setShowSignUp] = useState("");
                                     
let toggleSignup = () =>{
    setShowSignUp(!showSignUp)
}

const [error, setError] = useState(false)
const [loginSuccess, setLoginSuccess] = useState(false)

const [emailValue, setEmailValue] = useState("")
const [passValue, setPassValue] = useState("")
const [fnameValue, setFnameValue] = useState("")
const [usernameValue, SetusernameValue] = useState("")
                    
const [signupMail, setSignupMail] = useState("")
const [signupPass, setSignupPass] = useState("")


let loginFunc = () =>{

let data = {
  emailValue,
  passValue
}
                                         
 let localData = JSON.parse(localStorage.getItem("SignUp Details"))
                                         
 if(localData.signupMail !== data.emailValue){
   setError("Email is incorrect*")
   setLoginSuccess("")
 }else if(localData.signupPass !== data.passValue){
   setError("Password is incorrect*")
   setLoginSuccess("")
 } 

 if(localData.signupMail === data.emailValue && localData.signupPass === data.passValue ){
       setLoginSuccess("Login Successfull!!")
       setEmailValue("")   
       setPassValue("")
       setError("")      
 }

}
                                         
                                         
let signupFunc = () =>{
                                            
let data = {
 signupMail,
 fnameValue,
 usernameValue,
 signupPass,
}
                                         
  if(data){
     localStorage.setItem("SignUp Details",  JSON.stringify(data))
  }
                                         
 setSignupMail("")
 setFnameValue("")
 SetusernameValue("")
 setSignupPass("")
                                         
}

  return (
     <>
     
     { 
         !showSignUp ? (  <div className='login-wrapper'>
                      <h3 className='title text-center'>Log In</h3>

                      { error ? <p className='error'>{error}</p> : null}
                      { loginSuccess ? <p className='success'>{loginSuccess}</p> : null}

                      <div className='input-group'>
                      <input type="text" className='form-control' placeholder='Username or email'
                      id='username' value={emailValue} onChange={(e) => setEmailValue(e.target.value)}/>
                      </div>
                      <div className='input-group'>
                      <input type="password" className='form-control' placeholder='Password'
                      id='pass' value={passValue} onChange={(e) => setPassValue(e.target.value)}/>
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
                             id='email' value={signupMail} onChange={(e) => setSignupMail(e.target.value)}/>
                          </div>
                          <div className='input-group'>
                             <input type="text" className='form-control' placeholder='Full Name' 
                             id='fullname' value={fnameValue} onChange={(e) => setFnameValue(e.target.value) }/>
                          </div>
                          <div className='input-group'>
                             <input type="text" className='form-control' placeholder='Username'
                              id='sUsername' value={usernameValue} onChange={(e) => SetusernameValue(e.target.value)}/>
                          </div>
                          <div className='input-group'>
                             <input type="password" className='form-control' placeholder='Password' 
                             id='sPass' value={signupPass} onChange={(e) => setSignupPass(e.target.value)}/>
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
     
     </>
  )
}

export default LoginPage

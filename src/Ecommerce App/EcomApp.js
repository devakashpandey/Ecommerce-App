import React, {useState} from 'react'
import "./EcomApp.css"
import LoginPage from './LoginPage';


const EcomApp = () => {


  return (
     <>
     <div className='loginpage'>
       <div className='container'>
          <div className='row'>
             <div className='col'>
                      <h1 className='main-title text-center'>Welcome To Ecommerce</h1>

                   <LoginPage  />         
             
                    
             </div>
          </div>
       </div>
     </div>
     </>
  )
}

export default EcomApp;

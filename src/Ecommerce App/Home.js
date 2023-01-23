import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
     <>
       <div className='container'>
         <div className='row'>
            <div className='col'>
              <h1 className='home-title text-center py-5'>Welcome To Ecommerce</h1>
              <div className='category-list d-flex flex-row justify-content-center align-items-center'>
               
                <div className='category-items'>
                     <Link to={"/products"}>All Products</Link>
                </div>

              </div>
              <h4 className='category-text text-center'>Select a category to start shopping</h4>
            </div>
         </div>
       </div>
     </>
  )
}

export default Home

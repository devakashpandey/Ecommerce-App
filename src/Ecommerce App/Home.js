import React, { useState } from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
import { Categories } from "./ProductCateg"

const Home = () => {

  let [category , setCategory] = useState(Categories)

  return (
     <>
       <div className='container'>
         <div className='row'>
            <div className='col'>
              <h1 className='home-title text-center py-5'>Welcome To Ecommerce</h1>
              <div className='category-list'>
               
                <div className='category-items'>
                     <Link className='allprod' to={"/products"}>All Products</Link>
                
                {
                  category.map((currEle, id)=>{
                     return(
                      <div className='categ-link'>
                        <p className='categ'>{currEle.categ}</p>
                        </div>
                     )
                  })
                }

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
 
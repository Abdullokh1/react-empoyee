import React from 'react'
import Header from './Header/Header'
import Left from './Left/Left'
import './Main.css'
import Users from './Users/Users'

function Main() {
  return (
    <>
    <div className='d-flex'>
      <Left/>

      <div>
        <Header/>

        <Users/>
        
      </div>
    </div>
    
    </>
  )
}

export default Main
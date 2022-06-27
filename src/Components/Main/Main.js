import React from 'react'
import Header from './Header/Header'
import Left from './Left/Left'
import './Main.css'
import Users from './Users/Users'

function Main({search, setSearch}) {
  return (
    <>
    <div className='d-flex'>
      <Left/>

      <div>
        <Header/>

        <Users search={search} setSearch={setSearch}/>
        
      </div>
    </div>
    
    </>
  )
}

export default Main
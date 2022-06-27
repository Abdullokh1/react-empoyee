import React from 'react'
import './Header.css'

function Header() {
  return (
    <>
    <div className="header p-4 d-flex align-items-center justify-content-between">
      <div>
        <i className="bx me-2 fs-5 bx-search-alt-2" />
        <input className="header__input" type="text" name="search" placeholder="Search topics" />
      </div>
      <div className="nav">
        <button type="button" className="position-relative me-4">
          <i className="bx nav__icon bx-bell" />
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            4
            <span className="visually-hidden">unread messages</span>
          </span>
        </button>
        <button type="button" className="position-relative me-4">
          <i className="bx nav__icon bx-message-square" />
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill">
            3
            <span className="visually-hidden">unread messages</span>
          </span>
        </button>
        <button><i className="bx nav__icon bx-power-off" /></button>
      </div>
    </div>

    <div className="d-flex user p-4 ">
      <span className="user__part me-4"><i className='bx fs-3 bxs-user'></i></span>
      <div>
        <h3 className="m-0 fs-5 mb-1">New Employee</h3>
        <p className="m-0 text-gray">Form design with validation</p>
      </div>
    </div>
    
    </>

  )
}

export default Header
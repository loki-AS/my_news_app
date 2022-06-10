import React from 'react'
import "./Nav.css"
import MenuDrawer from './MenuDrawer'

const Nav = ({setCategory}) => {
  return (
    <div className="nav">
    <div className="title my-tit">
        <h1>NEWS APP</h1>
    </div>
        <div className="menu ms-auto">
            <MenuDrawer setCategory={setCategory} />
        </div>
    </div>
  )
}

export default Nav
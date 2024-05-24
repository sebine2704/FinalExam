import React from 'react'
import { Link } from 'react-router-dom'
import "./header.css"

const Header = () => {
  return (
    <header>
        <h1>M.</h1>
        <ul className='lists'>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/form"}>Form</Link></li>
            <li>Men</li>
            <li>Women</li>
            <li>Latest</li>
            <li>Pages</li>

        </ul>
            

            
    </header>
  )
}

export default Header
import React from 'react'
import style from './navigation.module.css'

const Navigation = () => {

  return (
    <nav className={`${style.navigation} container `}>
        <div> <img src="./public/images/nike-logo-one.png" alt="" width={90} /></div>
        <div>
            <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            </ul></div>
    </nav>
  )
}

export default Navigation
import React from 'react'
import home from '../images/home.svg'



export const Nav = () => {
  return (
    <header className='header'>
     
     <nav className="nav">
      <img src={home} className="image-home"/>
        <ul>
          
          <li>
            <a>How we work</a>
          </li>
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>Free Quote</a>
          </li>
          <li>
            <a>Contact</a>
          </li>

         

        </ul>
      </nav>
</header>
  )
}

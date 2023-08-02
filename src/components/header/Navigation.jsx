import React from 'react'
import "../header/Navigation.css"
import menuItem from '../../assets/data/navDetails'

const Navigation = () => {
  return (
    <header className='header'>
      <div className="container">
        <div className="nav_wrapper">
          <div className="logo">
            <h2>Qubist.inc</h2>
            {/* <p>Grow with us</p> */}
          </div>

          {/* Navigation */}
          <div className="navigation">
            <ul className="menu">
              {menuItem.map(({ display, path }) => (
                <li className='menu_item'>
                  <a href={path} className='menu_link'>
                    {display}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Light Mode option */}
          <div className='light_mode'>
            <span>
              <i className='ri-sun-line'></i> Light Mode
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navigation;
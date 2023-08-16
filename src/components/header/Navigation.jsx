import React, { useEffect, useRef } from 'react'
import "../header/Navigation.css"
import menuItem from '../../assets/data/navDetails'

const Navigation = ({ theme, toggleTheme }) => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const headerFunc = () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      headerRef.current.classList.add("header__shrink")
    }
    else {
      headerRef.current.classList.remove("header__shrink")
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);

    return () => window.removeEventListener("scroll", headerFunc);
  }, [])

  const handleClick = (event) => {
    event.preventDefault();

    const targetAttr = event.target.getAttribute("href");
    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 80,
      behavior: "smooth", // Added smooth scrolling behavior

    });
  }

  const toggleMenu = () => {
    menuRef.current.classList.toggle('menu__active');
  };
  return (
    <header className='header' ref={headerRef}>
      <div className="container">
        <div className="nav_wrapper">
          <div className="logo">
            <h2><a href="/">Qubist.inc</a></h2>
            {/* <p>Grow with us</p> */}
          </div>

          {/* Navigation */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}  >
            <ul className="menu">
              {menuItem.map(({ display, path, index }) => (
                <li className='menu_item' key={index}>
                  <a href={path} onClick={handleClick} className='menu_link'>
                    {display}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Light Mode option */}
          <div className='light_mode'>
            <span onClick={toggleTheme}>
              {
                theme === "light-theme" ? (
                  <span>
                    <i className='ri-moon-line'> Dark</i>
                  </span>
                ) : (
                  <span>
                    <i className='ri-sun-line'> Light</i>
                  </span>
                )
              }
            </span>
          </div>

          <span className='mobile__menu' onClick={toggleMenu}>
            <i className='ri-menu-line'></i>
          </span>

        </div>
      </div>
    </header>
  )
}

export default Navigation;
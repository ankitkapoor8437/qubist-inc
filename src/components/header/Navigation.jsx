import React, { useEffect, useRef } from 'react';
import "../header/Navigation.css"; // Importing the CSS file for styling
import menuItem from '../../assets/data/navDetails'; // Importing navigation menu data

const Navigation = ({ theme, toggleTheme }) => {
  // Creating refs for the header and menu elements
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  // Function to handle header shrinking on scroll
  const headerFunc = () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      headerRef.current.classList.add("header__shrink");
    } else {
      headerRef.current.classList.remove("header__shrink");
    }
  };

  // Adding scroll event listener and cleanup on component mount and unmount
  useEffect(() => {
    window.addEventListener("scroll", headerFunc);
    return () => window.removeEventListener("scroll", headerFunc);
  }, []);

  // Function to handle smooth scroll when clicking on menu items
  const handleClick = (event) => {
    event.preventDefault();
    const targetAttr = event.target.getAttribute("href");
    const location = document.querySelector(targetAttr).offsetTop;
    window.scrollTo({
      left: 0,
      top: location - 80,
      behavior: "smooth", // Smooth scrolling behavior
    });
  };

  // Function to toggle mobile menu visibility
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

          {/* Navigation menu */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu">
              {/* Mapping through navigation menu items */}
              {menuItem.map(({ display, path, index }) => (
                <li className='menu_item' key={index}>
                  {/* Click event for smooth scroll */}
                  <a href={path} onClick={handleClick} className='menu_link'>
                    {display}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Light Mode option */}
          <div className='light_mode'>
            {/* Click event to toggle theme */}
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

          {/* Mobile menu icon */}
          <span className='mobile__menu' onClick={toggleMenu}>
            <i className='ri-menu-line'></i>
          </span>

        </div>
      </div>
    </header>
  );
}

export default Navigation;
